---
layout: page
description: Just playing around
---

<div class = "home-layout">
  <dvi class="hero">
    <h1 class="hero-title">松涛的前端博客</h1>
    <p class="des">Just playing around</p>
    <p class="action">
      <a class="action-button" href="/front-blog/html5css/">快速阅读 →</a>
    </p>
  </dvi>

  <div class="features">
    <div class="feature">
      <h2>前端基础+补充</h2>
      <p>补齐前端基础知识，掌握开发调试技巧。补齐纯前端的缺失知识，更从容地面对应试官。</p>
    </div>
    <div class="feature">
      <h2>Vue学习</h2>
      <p>学习和理解 Vue 基础，学会使用 Vue 快速编写 Web 应用。</p>
    </div>
    <div class="feature">
      <h2>React学习</h2>
      <p>理解React框架原理，掌握实际必备指南。</p>
    </div>
  </div>
</div>

<style >
.home-layout {
  padding: 3.6rem 2rem 0;
  max-width: 960px;
  margin: 0 auto;
  display: block;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.hero-title {
  font-weight: 600;
  line-height: 1.25;
  margin: 1.8rem auto;
  font-size: 3rem;
}

.des {
  max-width: 35rem;
  font-size: 1.6rem;
  line-height: 1.3;
  color: #6a8bad;
  margin: 1.8rem auto;
}

.action {
  margin: 1.8rem auto;
  line-height: 1.7;
}

.action-button{
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: .8rem 1.6rem;
  border-radius: 4px;
  transition: background-color .1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}

.features {
  border-top: 1px solid #eaecef;
  padding: 1.2rem 0;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
}

.feature {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
}

.feature h2 {
  font-size: 1.4rem;
  font-weight: 500;
  border-bottom: none;
  padding-bottom: 0;
  color: #3a5169;
}

.feature p {
  line-height: 1.7;
  color: #4e6e8e;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}
</style>
