<template>
  <div class="experience">
    <div class="content pg-width" data-aos="fade-up">
      <div class="header">
        <div class="header__text">Work Timeline</div>
        <div class="line-divider"></div>
      </div>
      <div class="jobs">
        <div class="job-header">
          <div class="job-header__text">T-Mobile</div>
          <div class="line-divider"></div>
        </div>
        <div class="job-content">
          <div class="job-content__position">Associate Software Engineer</div>
          <div class="job-content__time">2020 - Present</div>
        </div>
        <div class="job-header">
          <div class="job-header__text" style="">T-Mobile</div>
          <div class="line-divider"></div>
        </div>
        <div class="job-content">
          <div class="job-content__position">Intern, Software Engineer</div>
          <div class="job-content__time">2018 - 2020</div>
        </div>

        <div class="job-header">
          <div class="job-header__text">Novo Nordisk</div>
          <div class="line-divider"></div>
        </div>
        <div class="job-content">
          <div class="job-content__position">Device Connectivity Intern</div>
          <div class="job-content__time">June 2018 - August 2018</div>
        </div>

        <div class="job-header">
          <div class="job-header__text">Accolade</div>
          <div class="line-divider"></div>
        </div>
        <div class="job-content">
          <div class="job-content__position">Mobile Developer Intern</div>
          <div class="job-content__time">July 2017 - August 2017</div>
        </div>
      </div>

      <div class="resume-prompt">
        See my resume for more work experience details
      </div>
      <a
        href="https://drive.google.com/file/d/1Hg7TadIr5na-gt4vu_u7a3jGUXyAjsWt/view?usp=sharing"
        target="_blank"
        class="tag"
      >
        <font-awesome-icon class="tag__icon" icon="link"></font-awesome-icon>
        <div class="tag__description">Resume</div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.jobs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.job-header {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.job-header:first-child {
  font-weight: bold;
}
.job-header:first-child .line-divider {
  border: 0.25px solid rgba(0, 0, 0, 0.5);
}

.job-header .job-header__text {
  font-size: 24px;
  white-space: nowrap;
}

.job-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
  font-family: "Lato", sans-serif;
}
.job-content:first-child {
  font-weight: bold;
}

.resume-prompt {
  text-align: start;
  font-family: "Lato", sans-serif;
  margin-bottom: 0.25rem;
}

.tag {
  color: inherit;
  font-family: "Lato", sans-serif;
  cursor: pointer;
}

@media screen and (max-device-width: 480px) {
  .job-header .job-header__text {
    font-size: 18px;
    white-space: nowrap;
  }

  .job-content {
    font-size: 12px;
  }
}
</style>