const R = require('ramda')
const fs = require('fs-extra')
const path = require('path')
const ignore = require('ignore')

const isDir = stat => stat.isDirectory()
const isFile = stat => stat.isFile()
const resolvePath = R.curry((targetRoot, directory) => path.resolve(targetRoot, directory))
const resolvePromises = R.then(p => Promise.all(p))
const stat = async file => ({ stat: await fs.stat(file), file })
const readdir = async dir => ({ dirs: await fs.readdir(dir), dir})
const resolvePaths = ({ dirs, dir }) => R.map(resolvePath(dir), dirs)
const readdirAbs = R.pipe(
    readdir,
    R.then(resolvePaths)
)
const getFileStats = R.pipe(
    readdirAbs,
    R.then(R.map(stat)),
    resolvePromises
)
const filterDirs = R.pipe(
    R.filter(file => isDir(file.stat)),
    R.map(R.prop('file')),
)

const filterFiles = (stats = [], fileFilter = a => a) => R.pipe(
    R.filter(file => isFile(file.stat)),
    R.filter(fileFilter),
    R.map(R.prop('file')),
)(stats)

const getDirs = R.pipe(
    getFileStats,
    R.then(filterDirs)
)

// const ignoreFilter = R.curry((filter, files) => R.pipe(
//     R.map(R.prop('file')),
//     R.map(file => ({file, match:R.match(filter, file)})),
//     R.filter(file => !file.match.length),
//     R.map(R.prop('file')),
// )(files))

// const ignoreFilters = (filters, files) => R.pipe(
//     R.map(filter => ignoreFilter(filter, files)),
//     R.map(R.intersection),
// )(filters)

const scan = async (options, target, dirs = []) => {
    const files = await getFileStats(target)
    const scannedDirs = R.pipe(filterDirs, ignoreFilter(options.ignoreFilter))(files)
    const scannedFiles = filterFiles(files, options.filterFiles)
    const dest = path.basename(target)
    return {
        [dest]: await Promise.all(scannedDirs.map(dir => scan(options, dir, scannedDirs)))
    }
}

const getSidebarConfig = async (targetRoot = '', options = { ignore: [] }) => {
    return scan(options, targetRoot)
}

module.exports = getSidebarConfig

getSidebarConfig(`${__dirname}/../`, {
    ignore: [/^\./],
    fileWhitelist: ['*md'],
    folderBlacklist: ['.*']
}).then(console.log).catch(console.log)
