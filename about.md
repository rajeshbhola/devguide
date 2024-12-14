---
layout: default
title: About bholaCodeCamp
---

<div class="post">
  <h1 class="pageTitle">About Me</h1>
  <div class="about-me checkerboard">
    <div style="text-align: center; padding: 15px;border-radius: 10px; color: whitesmoke; font-weight: bold;">
      <img src="https://avatars.githubusercontent.com/u/82930824?v=4" alt="Avatar" class="avatar">
      <a href="https://rajeshbhola.github.io">
        <img src="https://img.shields.io/badge/Author-Rajesh Bhola-slateblue" alt="Rajesh Bhola" height="32"> 
      </a><br>
      <div style="display: flex; justify-content: center; align-items: center; font-size: 18px;">
      <span class="lead">Software Engineer</span>
      </div>
	  <p style="font-weight: normal; color: yellow; font-size: 16px;">Odisha, India</p>
	  <div class="footer-links">
			<ul class="noList">
       {%- if site.social.twitter -%}
			{%- include footer_links/twitter_icon.html -%}
		{%- endif -%}
		{%- if site.social.github -%}
			{%- include footer_links/github_icon.html -%}
		{%- endif -%}
		{%- if site.social.youtube -%}
			{%- include footer_links/youtube_icon.html -%}
		{%- endif -%}</ul></div>
    </div>
  </div>
  <br>

  <p class="intro1">Welcome to <b>bholaCodeCamp</b>, a comprehensive coding blog dedicated to all things related to programming, technology, and development tools. Whether you're a beginner or an advanced coder, you'll find valuable content that enhance your learning journey.</p>
  <p>I am Rajesh Bhola, a developer and owner of bholaCodeCamp. As a software engineer, I thrive on problem-solving, delivering quality projects, and sharing my knowledge through blogs.</p>
  <br>
  <h2>What You'll Learn</h2>
  <ul>
    <li style="margin-bottom: 30px;"><b>Backend Development:</b> Dive into server-side technologies, frameworks, and best practices for building secure and efficient backend systems.</li>
    <li style="margin-bottom: 30px;"><b>Frontend Development:</b> Learn the latest trends and techniques in web design and frontend development, from HTML and CSS to JavaScript and modern frameworks.</li>
    <li style="margin-bottom: 30px;"><b>Artificial Intelligence (AI):</b> Delve into the world of AI with tutorials and AI-driven applications.</li>
    <li style="margin-bottom: 30px;"><b>Databases:</b> Gain expertise in managing and optimizing databases, including SQL and NoSQL technologies.</li>
    <li style="margin-bottom: 30px;"><b>Tools and Technologies:</b> Stay updated with the latest tools, libraries, and technologies to enhance your development workflow and productivity.</li>
  </ul>

  <p>Keep learning and happy coding!</p>
</div>

<style>
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
  }
  .about-me div a {
    margin: 0 5px;
  }
  .about-me div img:first-of-type {
    margin-bottom: 10px;
  }
  .checkerboard {
    background: radial-gradient(#000000 15%, #00000000 16%) 0 0, radial-gradient(#43444a 15%, #06060600 16%) 8px 8px, rgb(0 0 0 / 50%);
    background-size: 16px 16px;
  }

</style>
