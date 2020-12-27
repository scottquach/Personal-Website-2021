<template>
  <div id="app">
    <hero></hero>
    <about-me></about-me>
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";

export default {
  name: "App",
  components: {
    Hero,
    AboutMe,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Lora", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding: 0 15rem 0 15rem; */
}

.pg-width {
  width: 60rem;
}

.pg-width--large {
  width: 80rem;
}

.line-divider {
  border: 0.25px solid rgba(0, 0, 0, 0.25);
  width: 100%;
  margin-left: 1rem;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.header .header__text {
  font-size: 36px;
  white-space: nowrap;
}

.tags {
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
  opacity: 0.8;
  font-family: "Lato", sans-serif;
}

.tag {
  display: flex;
  align-items: center;
  margin-right: 5rem;
}

.tag__icon {
  margin-right: 0.5rem;
}
</style>
