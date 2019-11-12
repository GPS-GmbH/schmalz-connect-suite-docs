// Theme API.
const tailwindcss = require('tailwindcss')
// const getSidebar = require('./sidebar')

const title = 'Sicon.OS Documentation'
const description = 'Documentation for users and developers'
const ogprefix = 'og: http://ogp.me/ns#'
const color = '#1c9a9a'

const locales = {
    '/': {
        lang: 'English',
        title: 'Sicon.OS Documentation',
        description: 'Vue-powered Static Site Generator',
    },
    '/de/': {
        lang: 'Deutsch',
        title: 'Sicon.OS Dokumentation',
        description: 'Dokumentation zu Sicon APPs, PLUGs und OS',
    },
}
// const sidebar = require('./sidebar')(path.relative(__dirname, '../'), locales)
// console.log('sidebar', sidebar)

module.exports = async () => ({
    title,
    head: [
        ['link', { rel: 'icon', href: `/assets/favicon.ico` }],
        ['meta', { name: 'theme-color', content: color }],
        ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
        ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://wireupyourfrontend.com' }],
        ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
        [
            'meta',
            {
                prefix: ogprefix,
                property: 'og:image',
                content: 'https://wireupyourfrontend.com/assets/logo.png',
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
        nav: [
            { text: 'Home', link: '/' },
            { text: 'User Guide', link: '/user/' },
            { text: 'Developer Guide', link: '/developer/' },
        ],
        sidebar: {
            '/developer/': [
                ['/developer/', 'Overview'],
                '/developer/create-app',
                '/developer/publish-app',
                '/developer/restapi',
            ],
            '/user/': [
                ['/user/', 'Overview'],
                '/user/config',
                '/user/setup',
            ]
        }
        // sidebar: await getSidebar({
        //     target: `${__dirname}/../`
        // })
    },
})
