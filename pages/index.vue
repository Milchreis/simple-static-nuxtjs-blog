<template>
  <div id="landing">
    <div class="hero">
      <div class="hero-text">
        <h1>This is my awesome blog page</h1>
        <p>
          <nuxt-link class="btn" to="/posts/">Look at my posts ...</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
#landing {
  .hero {
    height: 100vh;

    h1 {
      max-width: 80%;
      font-size: 5em;
      margin: auto;
    }

    p {
      font-size: 1em;
    }
  }
}
</style>
