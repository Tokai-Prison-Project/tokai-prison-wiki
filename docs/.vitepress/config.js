import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'ja-JP',
    title: 'Tokai Prison Wiki',
    lastUpdated: true,
    themeConfig: {
        nav: [
            { text: 'トップページ', link: '/' },
        ],

        editLink: {
            pattern: 'https://github.com/Tokai-Prison-Project/tokai-prison-wiki/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Tokai-Prison-Project' }
        ],

        footer: {
            message: 'Released under the CC-BY-4.0 License.',
            copyright: 'Copyright (c) 2022-present Tokai Prison Project'
        }
    }
})
