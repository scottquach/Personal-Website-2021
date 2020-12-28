<template>
  <div class="hero">
    <div class="content pg-width">
      <div class="header anim__bounce-in">
        <div class="header__text">👋 Hi, I'm Scott Quach</div>
        <div class="line-divider"></div>
      </div>
      <div class="summary anim__bounce-in">
        I’m a software engineer passionate about sustainable and thoughtful
        solutions to very human issues
      </div>

      <div class="tags anim__bounce-in">
        <div class="tag">
          <font-awesome-icon
            class="tag__icon"
            icon="thumbtack"
          ></font-awesome-icon>
          <div class="tag__description">Seattle</div>
        </div>
        <div class="tag">
          <font-awesome-icon
            class="tag__icon"
            icon="briefcase"
          ></font-awesome-icon>
          <div class="tag__description">Currently at T-Mobile</div>
        </div>
        <div class="tag">
          <font-awesome-icon
            class="tag__icon"
            icon="lightbulb"
          ></font-awesome-icon>
          <div class="tag__description">Application & Mobile Development</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header {
  opacity: 0;
}

.summary {
  font-size: 48px;
  text-align: start;
  animation-delay: 400ms;
  opacity: 0;
}

.tags {
  animation-delay: 800ms;
  opacity: 0;
}

@media screen and (max-device-width: 480px) {
  .summary {
    font-size: 25px;
  }
}
</style>
