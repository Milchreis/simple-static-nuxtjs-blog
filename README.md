# simple-static-nuxtjs-blog

> This is a template to quickstart your next blog with the power of NuxtJS.

![alt screenshot](https://raw.githubusercontent.com/Milchreis/simple-static-nuxtjs-blog/master/.github/screen.png)

[Demo](https://milchreis.github.io/simple-static-nuxtjs-blog/)

## Why another repository for a static blog page?
 * Had a lot of struggle and research for this features
 * Need of basic features with and fast and simple usage
 * ready to use (f.e. on github with gh-pages)

## Features
 * Write your posts in markdown notation
    * Configurable cover image
    * Default cover image
 * Overview of your latest posts
     * with preview of the first paragraph from each post
 * Support for frontmatter meta data
 * Support for google analytics
 * Basic navigation and cover images
 * Responsive design
 * Based on awesome frameworks like: nuxtjs/vue, sass

## Quickstart
 * Add your posts to the `blog` directory as markdown file
 * To use other cover images add you image to the `static/images/blog` directory and add the filename to the frontmatter configuration of the post

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# Deploy changes (to gh-pages)
$ npm run generate:gh-pages
$ npm run deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
