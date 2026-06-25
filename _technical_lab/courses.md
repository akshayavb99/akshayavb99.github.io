---
layout: page
title: Courses
permalink: /technical-lab/courses/
description: Selected list of courses from my academic journey and online platforms, including lectures and structured learning programs
img: 
importance: 3
category: 
toc:
  sidebar: left
---

{% assign sorted_courses = site.data.courses | sort: "date" | reverse %}

<ul class="card-text font-weight-light list-group list-group-flush">
  {% for course in sorted_courses %}
  <li class="list-group-item">
    <div class="row">
      <div class="col">
        <h3 class="title font-weight-bold ml-1 ml-md-4" style="font-size: 1rem; margin-bottom: 0.25rem;">
          {{ forloop.index }}.
          {% if course.url %}
            <a href="{{ course.url }}" target="_blank" rel="noopener noreferrer">{{ course.title }}</a>
          {% else %}
            {{ course.title }}
          {% endif %}
        </h3>
        {% if course.organization %}
        <p class="ml-1 ml-md-4" style="font-size: 0.95rem; font-style: italic; color: #888; margin-bottom: 0.25rem;">
          {{ course.organization }}
        </p>
        {% endif %}
        {% if course.description %}
        <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
          {{ course.description }}
        </p>
        {% endif %}
        {% if course.certificate_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
              <a href="{{ course.certificate_url }}" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </p>
        {% endif %}
        {% if course.notes_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
            <a href="{{ course.notes_url }}" target="_blank" rel="noopener noreferrer">Read Notes</a>
          </p>
        {% endif %}
        {% if course.tags %}
        <div class="ml-1 ml-md-4">
          {% for tag in course.tags %}
            <span class="badge bg-secondary">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
      <div class="col-auto text-right">
        <span class="text-muted" style="font-size: 0.85rem;">{{ course.date | date: "%b %Y" }}</span>
      </div>
    </div>
  </li>
  {% endfor %}
</ul>
