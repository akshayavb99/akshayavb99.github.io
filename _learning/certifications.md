---
layout: page
title: Certifications
description: Cloud and machine learning certifications from AWS and other leading providers
img: 
importance: 1
category: 
toc:
  sidebar: left
---

{% assign sorted_certs = site.data.certifications | sort: "date" | reverse %}

<ul class="card-text font-weight-light list-group list-group-flush">
  {% for cert in sorted_certs %}
  <li class="list-group-item">
    <div class="row">
      <div class="col">
        <h3 class="title font-weight-bold ml-1 ml-md-4" style="font-size: 1rem; margin-bottom: 0.25rem;">
          {{ cert.title }}
        </h3>
        {% if cert.organization %}
        <p class="ml-1 ml-md-4" style="font-size: 0.95rem; font-style: italic; color: #888; margin-bottom: 0.25rem;">
          {{ cert.organization }}
        </p>
        {% endif %}
        {% if cert.description %}
        <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
          {{ cert.description }}
        </p>
        {% endif %}
        {% if cert.certificate_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
              <a href="{{ cert.certificate_url }}" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </p>
        {% endif %}
        {% if cert.notes_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
            <a href="{{ cert.notes_url }}" target="_blank" rel="noopener noreferrer">Read Notes</a>
          </p>
        {% endif %}
        {% if cert.tags %}
        <div class="ml-1 ml-md-4">
          {% for tag in cert.tags %}
            <span class="badge bg-secondary">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
      <div class="col-auto text-right">
        <span class="text-muted" style="font-size: 0.85rem;">{{ cert.date | date: "%b %Y" }}</span>
      </div>
    </div>
  </li>
  {% endfor %}
</ul>
