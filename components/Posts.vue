<template>
  <div class="posts" v-if="posts">
    <div v-for="post in posts" :key="post.attributes.title">
      <nuxt-link :to="getPermalink(post)" class="post">
        <div class="coverimage">
          <img
            v-if="post.attributes.cover && post.attributes.cover.image"
            :src="getImage(post)"
            :title="`Photo by ${post.attributes.cover.photographer}`"
          />
          <img v-else :src="getImage(post)" title="cheng feng" />
        </div>
        <div class="info">
          <div class="heading">{{ post.attributes.title }}</div>
          <div class="created">Created on {{ post.attributes.created }}</div>
          <div class="text" v-html="getPreview(post)"></div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
const path = require("path");

export default {
  props: ["posts"],
  methods: {
    getPermalink(post) {
      let link = `/posts/${
        post.name
          .split("\\")
          .pop()
          .split("/")
          .pop()
          .split(".")[0]
      }`;
      return link;
    },

    getImage(post) {
      if(post.attributes.cover && post.attributes.cover.image)
        return `images/blog/${post.attributes.cover.image}`;
      else {
        return `images/blog/default.jpg`;
      }
    },

    getPreview(post) {
      let text = post.html;
      let pEnd = text.search("</p>");

      return text.substring(0, pEnd);
    }
  }
};
</script>

<style lang="scss">
.post {
  display: flex;
  margin-bottom: 1.5em;
  transition: all 0.3s;
  border: solid 1px #e8e7e700;
  padding: 2em;

  @media (max-width: 991px) {
    padding: 1.3em;
  }

  &:hover {
    background-color: #ffffff;
    border-radius: 5px;
    border: solid 1px #e8e7e7;

    @media (max-width: 991px) {
      padding: 1.3em;
    }
  }

  .coverimage {
    display: inline-block;
    text-align: left;

    img {
      border-radius: 5px;
      max-width: 200px;

      @media (max-width: 991px) {
        max-width: 100%;
      }
    }

    @media (max-width: 991px) {
      margin-top: 0.6em;
      border-radius: 5px;
      max-width: 25vw;
      max-height: 200px;
      overflow: hidden;
    }
  }

  .info {
    vertical-align: top;
    text-align: left;
    display: inline-block;
    margin-top: -11px;
    margin-left: 1.5em;
    max-width: 75%;
    color: #44494f;

    @media (max-width: 991px) {
      max-width: 100%;
      margin-top: 0px;
    }
  }

  .heading {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.5em;
    line-height: 75px;
    letter-spacing: -0.08em;
    line-height: 1.25;

    @media (max-width: 991px) {
      font-size: 2em;
    }
  }

  .created {
    margin-top: -0.5em;
    font-weight: 600;
    font-size: 0.8em;
  }

  .text {
    margin-top: 1em;
    text-align: left;
    p {
      padding: 0px;
      margin: 0px;
    }

    h1,
    h2,
    h3 {
      color: #797979;
      font-size: 14px;
      font-weight: 700;
    }
  }
}

a {
  color: #726fb9;
  text-decoration: none;
  background-color: transparent;
  font-weight: 400;
  transition: all 0.3s;

  &:hover {
    color: #726fb9;
    text-decoration: none;
  }
}
</style>
