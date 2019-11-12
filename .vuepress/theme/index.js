const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
    title: 'Sicon.OS Documentation',
    alias() {
        const { themeConfig, siteConfig } = ctx
        // resolve algolia
        const isAlgoliaSearch =
            themeConfig.algolia ||
            Object.keys((siteConfig.locales && themeConfig.locales) || {}).some(
                base => themeConfig.locales[base].algolia
            )
        return {
            '@AlgoliaSearchBox': isAlgoliaSearch
                ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
                : path.resolve(__dirname, 'noopModule.js'),
        }
    },
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Sicon.OS Documentation',
            description: 'Vue-powered Static Site Generator',
        },
        '/de/': {
            lang: 'de-DE',
            title: 'Sicon.OS Dokumentation',
            description: 'Dokumentation zu Sicon APPs, PLUGs und OS',
        },
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'User Guide', link: '/user/' },
            { text: 'Developer Guide', link: '/developer/' },
        ],
        sidebar: ['/', '/page-a', ['/page-b', 'Explicit link text']],
    },
    plugins: [
        ['@vuepress/active-header-links', options.activeHeaderLinks],
        '@vuepress/search',
        '@vuepress/plugin-nprogress',
        [
            'container',
            {
                type: 'tip',
            },
        ],
        [
            'container',
            {
                type: 'warning',
            },
        ],
        [
            'container',
            {
                type: 'danger',
            },
        ],
    ],
})
