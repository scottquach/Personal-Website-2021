<template>
  <div class="hero">
    <div class="content pg-width">
      <div class="header">
        <div class="header__text">👋 Hi, I'm Scott Quach</div>
        <div class="line-divider"></div>
      </div>
      <div class="summary">
        I’m a software engineer passionate about sustainable and thoughtful
        solutions to very human issues
      </div>

      <div class="tags">
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

.summary {
  font-size: 48px;
  text-align: start;
}
</style>
