<template>
  <div>
    <header>
      <div class="hero">
        <div class="hero-text">
          <h1>This is my awesome blog page</h1>
          <p>Enjoy the content and your life</p>
        </div>
      </div>
    </header>

    <section class="light-bg">
      <div class="container">
        <posts :posts="posts"></posts>
      </div>
    </section>
  </div>
</template>

<script>
import Posts from "@/components/Posts";
import postsHelper from "@/mixins/postsHelper";

export default {
  components: {
    Posts
  },
  async asyncData() {
    return postsHelper.methods.getPosts();
  }
};
</script>

<style lang="scss">
</style>
