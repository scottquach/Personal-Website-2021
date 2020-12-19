<template>
  <div class="hero">
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
        <div class="tag__description">Current at T-Mobile</div>
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
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.header .header__text {
  font-size: 36px;
  white-space: nowrap;
}

.summary {
  font-size: 48px;
  text-align: start;
}

.tags {
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
  opacity: 0.8;
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