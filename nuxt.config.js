import fs from 'fs'
import path from 'path'
import glob from 'glob'

let files = glob.sync('**/*.md', { cwd: 'blog' })
files = files.map(d => '/posts/' + d.substr(0, d.lastIndexOf('.')))

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [{
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'framevuerk/dist/framevuerk-nuxt.min.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/framevuerk',
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Add your GA id here
        // ['@nuxtjs/google-analytics', { id: 'UA-12301-2' }]
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/sitemap',
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.md$/,
                include: path.resolve(__dirname, "blog"),
                loader: 'frontmatter-markdown-loader',
            })
        },
        extractCSS: true,
    },
    sitemap: {
        hostname: 'http://localhost:3000',
        exclude: [],
    },
}