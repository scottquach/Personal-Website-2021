<template>
  <div id="app">
    <hero></hero>
    <about-me></about-me>
    <experience></experience>
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";
import Experience from "./components/Experience.vue";

export default {
  name: "App",
  components: {
    Hero,
    AboutMe,
    Experience
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
  background-color: #faf8f5;
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

.anim__bounce-in {
  animation-name: bounce-in;
  animation-duration: 500ms;
  transition-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: translateY(35px);
  }
  80% {
    transform: translateY(-15px);
  }
  90% {
    opacity: 1;
    transform: translateY(0px);
  }
  95% {
    transform: translateY(-3px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@media screen and (max-device-width: 480px) {
  .pg-width {
    width: 20rem;
  }

  .header {
    margin-bottom: 1rem;
  }

  .header .header__text {
    font-size: 24px;
    white-space: nowrap;
  }

  .tags {
    flex-direction: column;
  }
  .tag {
    margin-bottom: .25rem;
    margin-right: 0rem;
  }
}
</style>
