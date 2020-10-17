<template>
 <div>
    <nuxt />
    <to-top-button></to-top-button>
 </div>
</template>

<script>
import ToTopButton from "../components/ToTopButton";

export default {
  components: { ToTopButton },
};
</script>

<style>
:root {
  font-size: 16px;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
  --transition-speed: 600ms;
}

html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
html,
body,
#__nuxt,
#__layout {
  min-height: 100%;
  height: 100%;
  position: initial;
  color: black;
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
}
body .material-icons {
  vertical-align: middle;
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: #6649b8;
}

.container {
  margin: auto;
  max-width: 960px;
  padding: 1em;
}

.hero {
  width: 100vw;
  height: 50vh;
  max-width: 100%;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~assets/images/splash.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text h1 {
  font-size: 32px;
  text-transform: uppercase;
  line-height: 75px;
  letter-spacing: -0.08em;
  line-height: 1.25;
}

section {
  margin-top: 2em;
}

a.btn {
  /* Positioning and sizing */
  display: inline-block;

  padding: 1em;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  /* Text styles */
  color: white;
  text-decoration: none;
  font-size: 1.5em;

  /* Border styles */
  border: 3px solid white;
  border-radius: 3px;

  transition: all 0.3s ease;
}

a.btn:hover {
  color: black;
  background-color: white;
}

.text-center {
  text-align: center;
}
</style>
