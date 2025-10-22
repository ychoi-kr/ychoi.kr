---
layout: default
title: "이력서"
permalink: /cv/
---

# Curriculum Vitae

## Personal Information

<ul id="personal-info-list">
  <li><strong>Name</strong>: {{ site.data.personal.name }}</li>
  <li class="print-only-item"><strong>Homepage</strong>: <a href="{{ site.data.personal.homepage }}">{{ site.data.personal.homepage }}</a></li>
  <li><strong>Email</strong>: <a href="mailto:{{ site.data.personal.email }}">{{ site.data.personal.email }}</a></li>
  <li><strong>LinkedIn</strong>: <a href="{{ site.Dpersonal.linkedin }}">{{ site.data.personal.linkedin }}</a></li>
  <li><strong>Location</strong>: {{ site.data.personal.location }}</li>
</ul>

## Summary
Software consultant and technical publisher (author, translator, reviewer) with nearly 30 years of experience in the IT industry. Currently, I am deeply focused on AI application development, specializing in LLMs, AI agents, and drone/robotics convergence.

Proven ability to master complex technologies, demonstrated by authoring and translating numerous books on LLM API development, LangChain, and machine learning. My practical skills are primarily built through hands-on personal projects, including developing LLM-based tools, AI integrations (e.g., Claude Skills, MCP servers), and automation scripts.

These applied skills have also been formally recognized in university-level AI competitions. I am actively solidifying this specialization by pursuing a BSc in Drone & Robotics Convergence.

## Education
- **Seoul Cyber University**, BSc in Drone & Robotics Convergence (March 2023–Present, Expected February 2026, Early graduation in 3 years)
- **Korea National Open University**, BSc in Computer Science (March 1999–February 2004)

## Extracurricular Activities
- KCPSW (AI-Powered Drone Software Development Team), 2024
    Developed AI-driven drone control software as part of a university-affiliated research group.

## Work Experience

<ul>
  {% assign cv_work = site.data.work | where: "show_in_cv", true %}
  {% for item in cv_work %}
  <li>
    <span class="cv-list-title">{{ item.title }}</span> {{ item.meta }}
    <span class="cv-list-description">
      {{ item.description | markdownify | remove: '<p>' | remove: '</p>' }}
    </span>
  </li>
  {% endfor %}
</ul>

## **Lectures**

<ul>
  {% for lecture in site.data.lectures %}
  <li>
    <span class="cv-list-title">{{ lecture.title }}</span> ({{ lecture.date }})
    <span class="cv-list-description">
      {{ lecture.organization }}
      {% if lecture.description %}
        <span class="cv-list-sub-description">{{ lecture.description }}</span>
      {% endif %}
    </span>
  </li>
  {% endfor %}
</ul>

## Projects

### Applications

<ul>
{% assign cv_projects = site.data.apps | where: "show_in_cv", true %}
{% for app in cv_projects %}
  {% assign primary_link = app.link | default: app.github | default: app.intro_link %}
  <li>
    <a href="{{ primary_link }}" class="cv-list-title primary-project-link">
      <span class="link-text">{{ app.name_en | default: app.name }}</span>
      <span class="link-url">{{ primary_link }}</span>
    </a>
    {% if extra_links_count > 0 %}
      <span class="extra-links-wrapper">
        {% if app.github and app.github != primary_link %}<span class="extra-link-item"><a href="{{ app.github }}" class="extra-project-link"><span class="link-text">GitHub</span><span class="link-url">{{ app.github }}</span></a></span>{% endif %}
        {% if app.intro_link and app.intro_link != primary_link %}<span class="extra-link-item print-hide-item"><a href="{{ app.intro_link }}" class="extra-project-link"><span class="link-text">Intro</span><span class="link-url">{{ app.intro_link }}</span></a></span>{% endif %}
      </span>
    {% endif %}
    
    <span class="cv-list-description">
      {{ app.description_en | default: app.description }} (Tech stack: {{ app.tech | join: ', ' }})
    </span>
  </li>
{% endfor %}
</ul>
[View complete portfolio →](/apps/)

### GPTs

<ul>
{% assign cv_gpts = site.data.gpts | where: "show_in_cv", true %}
{% for bot in cv_gpts %}
  {% if bot.status == "active" %}
  <li>
    <a href="{{ bot.link }}" class="cv-list-title primary-project-link">
      <span class="link-text">{{ bot.name_en | default: bot.name }}</span>
      <span class="link-url">{{ bot.link }}</span>
    </a>

    {% if bot.intro_link %}
      <span class="extra-links-wrapper">
        <span class="extra-link-item print-hide-item">
          (<a href="{{ bot.intro_link }}" class="extra-project-link">
            <span class="link-text">Intro</span>
            <span class="link-url">{{ bot.intro_link }}</span>
          </a>)
        </span>
      </span>
    {% endif %}
    
    <span class="cv-list-description">
      {{ bot.description_en | default: bot.description }}
    </span>
  </li>
  {% endif %}
{% endfor %}
</ul>

[View complete portfolio →](/bots/)

## Publications
### Authored Books

<ul id="authored-books-list">
{% for book in site.data.authored_books %}
  <li>
    <a href="{{ book.link | default: '#' }}" class="primary-project-link">
      <span class="link-text">{{ book.title_en | default: book.title }}</span>
      <span class="link-url">{{ book.link | default: '#' }}</span>
    </a>, 
    {{ book.publisher_en | default: book.publisher }}, 
    {{ book.date | date: "%B %Y" }}
  </li>
{% endfor %}
</ul>

### Translations

<ul id="translated-books-list">
{% assign cv_translations = site.data.translated_books | where: "show_in_cv", true %}
{% for book in cv_translations %}
  <li>
    <a href="{{ book.link | default: '#' }}" class="primary-project-link">
      <span class="link-text">{{ book.original_title | default: book.title }}</span>
      <span class="link-url">{{ book.link | default: '#' }}</span>
    </a>, 
    {{ book.authors_en | default: book.authors }}, 
    {{ book.publisher_en | default: book.publisher }}, 
    {{ book.date | date: "%B %Y" }}
  </li>
{% endfor %}
</ul>

[View complete portfolio →](/books/)

### Research Papers

<ul id="research-papers-list">
  <li>
    The Necessity and Implementation Plan of AI Technology for Automation of Platoon-level Reconnaissance Drone Operations, 
    <a href="http://www.kidet.or.kr/index.php?hCode=BOARD&page=view&bo_idx=1&idx=1259">Proceedings of the 2024 Autumn Conference of the Korean Institute of Defense Technology</a>
  </li>
</ul>

## Awards
{% for award in site.data.awards %}
- {{ award.title_en }}, "{{ award.event_en | default: award.field_en }}", {{ award.organization_en }}, {{ award.date_en }}
{% endfor %}

## **Scholarships** {% for scholarship in site.data.scholarships %}
- **{{ scholarship.title_en }}**, {{ scholarship.field_en }} (Received in **{{ scholarship.semester_en }}**)
{% endfor %}