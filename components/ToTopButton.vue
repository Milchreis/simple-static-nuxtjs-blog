<template>
  <transition name="fade">
    <div class="to_top_button" v-show="visible">
      <p><a href="#" class="btn" @click.prevent="scrollToTop()">▲</a></p>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  beforeMount() {
    window.onscroll = (e) => {
      const y = window.scrollY;
      const h = window.innerHeight;

      this.visible = y > h * 0.3;
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss">
.to_top_button {
  position: fixed;
  bottom: 10px;
  right: 10px;

  .btn {
    background-color: #222;
    color: white;
    font-size: 1em;
    border: none;

    &:hover {
      background-color: #44494f;
      color: white;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
