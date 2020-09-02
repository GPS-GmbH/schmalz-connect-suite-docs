// Theme API.
const tailwindcss = require('tailwindcss')
const glob = require('glob')
// const getSidebar = require('./sidebar')

const title = 'Schmalz Connect:API'
const description = 'Documentation for users and developers'
const ogprefix = 'og: http://ogp.me/ns#'
const color = '#0050A0'

const getChildren = (parentPath) => {
    return glob
        .sync(parentPath + '/*.md')
        .map(path => {
            // remove "parentPath" and ".md"
            // remove README
            if (path.endsWith('README')) {
                path = path.slice(0, -6)
            }
            return `/${path}`.replace('.md', '').replace('index', '')
        })
        .sort()
}
const locales = {
    '/en/': {
        selectText: 'Languages',
        lang: 'English',
        title: 'Schmalz Connect:API',
        description: 'Documentation for controlling devices',
        nav: [
            { text: 'Home', link: '/en/' },
            { text: 'User Guide', link: '/en/user/' },
            { text: 'Connect:API', link: '/en/developer/' },
        ],
        sidebar: {
            '/en/developer/': [
                {
                    collapsable: false,
                    title: '🚀 Developer Guide',
                    children: getChildren('en/developer'),
                },
                {
                    collapsable: false,
                    title: '📦 App Development',
                    children: getChildren('en/developer/apps'),
                },
            ],
            '/en/user/': [
                {
                    collapsable: false,
                    title: 'User Guide',
                    children: getChildren('en/user'),
                },
                {
                    collapsable: false,
                    title: '⚙️️ Settings',
                    children: getChildren('en/user/settings'),
                },
                {
                    collapsable: false,
                    title: '🔌 Assets',
                    children: getChildren('en/user/assets'),
                },
            ],
        },
    },
    '/de/': {
        selectText: 'Sprachen',
        lang: 'Deutsch',
        title: 'Schmalz Connect:API',
        description: 'Dokumentation zu Sicon APPs, PLUGs und OS',
        nav: [
            { text: 'Home', link: '/de/' },
            { text: 'User Guide', link: '/de/user/' },
            { text: 'Connect:API', link: '/de/developer/' },
        ],
        sidebar: {
            '/de/developer/': [
                {
                    collapsable: false,
                    title: '🚀 Developer Guide',
                    children: getChildren('de/developer'),
                },
                {
                    collapsable: false,
                    title: '📦 App Development',
                    children: getChildren('de/developer/apps'),
                },
            ],
            '/de/user/': [
                {
                    collapsable: false,
                    title: 'User Guide',
                    children: getChildren('de/user'),
                },
                {
                    collapsable: false,
                    title: '⚙️️ Settings',
                    children: getChildren('de/user/settings'),
                },
                {
                    collapsable: false,
                    title: '🔌 Assets',
                    children: getChildren('de/user/assets'),
                },
            ],
        },
    },
}
// const sidebar = require('./sidebar')(path.relative(__dirname, '../'), locales)
// console.log('sidebar', sidebar)

const config = async () => ({
    title,
    head: [
        ['link', { rel: 'icon', href: `/assets/favicon.ico` }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' }],
        ['meta', { name: 'theme-color', content: color }],
        ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
        ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://docs.sicon.io' }],
        ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
        [
            'meta',
            {
                prefix: ogprefix,
                property: 'og:image',
                content: 'https://docs.sicon.io/assets/logo.png',
            },
        ],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/assets/apple-touch-icon.png` }],
        ['link', { rel: 'mask-icon', href: '/assets/safari-pinned-tab.svg', color: color }],
        ['meta', { name: 'msapplication-TileImage', content: '/assets/mstile-150x150.png' }],
        ['meta', { name: 'msapplication-TileColor', content: color }],
    ],
    postcss: {
        plugins: [tailwindcss('.vuepress/tailwind.js')],
    },
    locales,
    themeConfig: {
        locales,
        sidebarDepth: 4,
    },
})

module.exports = config
config().then(a => console.log(JSON.stringify(a.themeConfig.sidebar, null, 4)))
