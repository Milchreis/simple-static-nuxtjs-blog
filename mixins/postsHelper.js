const path = require("path");

export default {
    methods: {
        getPosts() {
            const postNames = [];
            const resolve = require.context("~/blog/", true, /\.md$/);
            const imports = resolve.keys().map(key => {
                const [, name] = key.match(/\/(.+)\.md$/);
                postNames.push(name);
                return resolve(key);
            });

            for (let i = 0; i < postNames.length; i++) {
                imports[i].name = postNames[i];
            }

            const sortedPosts = imports.sort((e1, e2) =>
                e1.attributes.created.split(".").reverse().join(".") < e2.attributes.created.split(".").reverse().join("."));

            return {
                posts: sortedPosts
            };
        },
    }
}