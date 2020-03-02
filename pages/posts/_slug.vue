<template>
  <div id="blogpost">
    <header>
      <div class="hero" :style="splash">
        <div class="hero-text"></div>
      </div>
    </header>

    <section>
      <div class="container">
        <div class="head">
          <div class="heading">{{ meta.title }}</div>
          <div class="created">{{ meta.created }} - {{ meta.author }}</div>
          <div class="updated">{{ meta.updated }}</div>
        </div>

        <div class="content">
          <div v-html="html"></div>
        </div>

        <div class="text-center">
          <div class="tagList">
            <p>
              <span v-for="(voter, i) in meta.tags" :key="i" class="tags">{{voter}}</span>
            </p>
          </div>
        </div>

        <div class="text-center">
          <nuxt-link to="/posts/" class="btn">
            Back to overview
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    let post = await import(`~/blog/${params.slug}.md`);
    let prefix = process.env.DEPLOY_ENV ? '' : '/';

    return {
      meta: post.attributes,
      html: post.html,
      singlePostComponent: post.component,
      splash: post.attributes && post.attributes.cover && post.attributes.cover.image ?  
        `background-image: url(${prefix}images/blog/${post.attributes.cover.image});`
        :
        `background-image: url(${prefix}images/blog/default.jpg);`
    };
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.meta.title
        }
      ]
    };
  },
};
</script>

<style lang="scss">
#blogpost section {
  color: rgb(68, 73, 79);

  .heading {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 55px;
    line-height: 75px;
    letter-spacing: -0.05em;
    line-height: 1.25;

    @media (max-width: 991px) {
      font-size: 2em;
    }
  }

  .head {
    margin-bottom: 2em;

    .coverimage {
      margin-top: 1em;
      border-radius: 5px;
      max-height: 200px;
      overflow: hidden;

      img {
        max-width: 100%;
        margin-top: -10%;
      }
    }
  }

  .created {
    font-weight: 600;
    font-size: 18px;
    letter-spacing: -0.05em;
    line-height: 1.25;
  }

  .content {
    h1 {
      font-size: 2rem;
      margin-bottom: 0.5em;
      letter-spacing: -0.05em;
      font-weight: 500;
      color: #44494f;
    }
    h2 {
      font-size: 1.6rem;
      margin-bottom: 0.7em;
      letter-spacing: -0.05em;
      font-weight: 500;
      color: #44494f;
    }
    h3 {
      font-size: 1.4rem;
      margin-bottom: 0.7em;
      letter-spacing: -0.05em;
      font-weight: 500;
      color: #44494f;
    }

    a {
      color: #726fb9;
      text-decoration: none;
      background-color: transparent;
      font-weight: 400;
      transition: all 0.3s;

      &:hover {
        color: #fed136;
        text-decoration: none;
      }
    }

    img {
      max-width: 100%;
    }

    table {
      margin-bottom: 1em;
    }
  }

  .content,
  .content p {
    font-size: 1.08em;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: #797979;
  }

  code,
  pre {
    color: #f8f8f2;
    background: none;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
    background-color: #222;
    color: white;
  }

  .tagList {
    display: inline-block;
    text-align: center;
    margin-bottom: 2em;
  }

  .tags {
    padding: 0.5em 1em 0.5em 1em;
    border-radius: 2px;
    background-color: #ececec;
    text-transform: uppercase;

    font-family: "Roboto", sans-serif;
    font-size: 0.8em;
    font-weight: 300;
    line-height: 23px;
    letter-spacing: 0.2px;
    margin-left: 0.3em;
    margin-right: 0.3em;
    color: #797979;
  }

  .btn {
    background-color: #222;
    color: white;

    &:hover {
      background-color: #44494f;
    }
  }
}
</style>
