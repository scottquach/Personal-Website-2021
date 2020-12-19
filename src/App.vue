<template>
  <div id="app">
    <hero></hero>
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";

export default {
  name: "App",
  components: {
    Hero,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Lora', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 5rem 25rem 0 25rem;
}

.line-divider {
  border: 0.25px solid rgba(0, 0, 0, 0.25);
  width: 100%;
  margin-left: 1rem;
}
</style>
