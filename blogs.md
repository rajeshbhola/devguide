---
layout: default
title: Blogs
---

<div id="articles">
  <h1>Blogs</h1><br>
  <ul class="posts noList">
    {%- for post in site.posts -%}
      <li>
      	<span class="date">{{ post.date | date_to_string }}</span>
      	<h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      </li><br> 
    {%- endfor -%}
  </ul>
</div>
