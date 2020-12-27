<template>
  <div class="about-me">
    <div class="content pg-width">
      <div class="l-profile-image">
        <img class="profile-image" src="../assets/profile_img.png" />
      </div>
      <div class="l-content">
        <div class="header">
          <div class="header__text">About Me</div>
          <div class="line-divider"></div>
        </div>
        <div class="summary">
          I’m a recent graudate in computer science and enginnering program at
          the University of Washington Bothell. Thanks for stopping by!
        </div>
        <section>
          <div>My <b>story</b></div>
          <div>
            Before I learned to code, I enjoyed reading and architecture. During
            schooling, I discovered that what brought real joy out of my work
            was creative problem-solving centered around having a real impact on
            people
          </div>
        </section>
        <section>
          <div>My <b>values</b></div>
          <div>
            I strive to develop and provide products designed to improve the
            daily lives of people. I believe creating great software starts
            first from understanding the perspective of the user.
          </div>
        </section>
        <section>
          <div>My <b>journey</b></div>
          <div>
            Previously, I was an Android developer intern at
            <u><b>Accolade</b></u>
            in Seattle. More recently, I’ve continued my role at
            <u><b>T-Mobile</b></u> as a software developer after working as an
            intern prior to graduation.
          </div>
        </section>

        <div class="tags">
          <a class="tag" href="mailto: scottqglobal@gmail.com">
            <font-awesome-icon
              class="tag__icon"
              icon="envelope-open-text"
            ></font-awesome-icon>
            <div class="tag__description">scottqglobal@gmail.com</div>
          </a>
          <a class="tag" href="https://www.linkedin.com/in/scott-quach/" target="_blank">
            <font-awesome-icon
              class="tag__icon"
              :icon="['fab', 'linkedin']"
            ></font-awesome-icon>
            <div class="tag__description">/in/scott-quach</div>
          </a>
          <a class="tag" href="https://github.com/scottquach" target="_blank">
            <font-awesome-icon
              class="tag__icon"
              :icon="['fab', 'github']"
            ></font-awesome-icon>
            <div class="tag__description">Open Source</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-me {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 85vh;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
}

.l-profile-image {
  justify-self: flex-start;
}

.profile-image {
  width: 20rem;
  height: 35rem;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}

.summary {
  text-align: start;
  font-size: 18px;
  margin-bottom: 2rem;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

section div:first-child {
  margin-bottom: 0.25rem;
}

.summary,
section {
  font-size: 18px;
  font-family: "Lato", sans-serif;
}

section div {
  text-align: left;
}

.tag {
  color: inherit;
  margin-right: 2.5rem;
}
</style>