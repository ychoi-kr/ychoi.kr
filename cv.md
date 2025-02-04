---
layout: default
title: "이력서"
permalink: /cv/
---

# Curriculum Vitae

## Personal Information

- **Name**: 최용(Yong Choi)
- **Email**: [ychoi_kr@naver.com](mailto:ychoi_kr@naver.com)  
- **LinkedIn**: [https://www.linkedin.com/in/ychoi-kr/](https://www.linkedin.com/in/ychoi-kr/)
- **Location**: Seoul, Korea

## Summary
Experienced technical reviewer, software consultant, and AI application developer with a strong background in drone and robotics convergence, software development, and technical publishing. Over 20 years of experience across industries, including software consulting, IT system operations, and technical book reviewing.

Passionate about integrating AI into real-world applications, particularly in drone automation and control systems. Skilled in LLM applications, AI-driven automation, and software development. Experienced in delivering lectures and workshops on AI technologies, including LLM-based applications and GPT customization.

Currently researching and developing AI-powered drone control systems, combining machine learning, embedded systems, and robotics to enhance automation capabilities. Actively involved in technical writing, publishing, and translating books on AI and software technologies.

## Education
- **Seoul Cyber University**, BSc in Drone & Robotics Convergence (2023–Present)
- **Korea National Open University**, BSc in Computer Science (1999–2004)

## Extracurricular Activities
- KCPSW (AI-Powered Drone Software Development Team), 2024
    Developed AI-driven drone control software as part of a university-affiliated research group.

## Work Experience
- **Technical Reviewer & Proofreader** (2020–Present)  
  Reviewed and proofread technical books on IT and software development.

- **Figure Skating Instructor** (2016–2021)  
  Taught figure skating to recreational skaters, including adults and children in beginner and intermediate classes.

- **Software Consultant, AM&C Inc.** (2007–2016)  
  Specialized in Workload Automation using BMC Control-M, providing consulting and implementation services for enterprise clients.  
  Participated in System Integration (SI) projects, handling software development and serving as a project lead (PL) for certain projects.

- **IT System Operator, KB Kookmin Bank (Outsourced)** (2001–2007)  
  Operated IBM mainframes, Unix, and Windows servers in a rotating shift, managing batch jobs and system operations.  
  Performed computer room access control and backup tape management to ensure data security.

- **Aircraft Maintenance Technician, Republic of Korea Air Force** (1996–2000)  
  Performed field maintenance and structural repairs on KF-16C/D fighter jets, including airframe and skin defect repairs.  
  Carried out inspections, damage assessments, and on-site repairs to ensure aircraft structural integrity.

## **Lectures**

- **Korea Disease Control and Prevention Agency (KDCA) AI Playground Research Group**,  
  **"Utilizing LLM Applications,"** February 2025.

- **Seoul Cyber University, Department of Artificial Intelligence, College of Engineering**,  
  **"Practical Use of ChatGPT and GPTs,"** January 2025.

- **Korean Contingent Faculty Union, Kangwon National University Chapter**,  
  **"Developing GPTs,"** February 2024.

- **Dongyang Mirae University, Department of Computer Information Engineering**,  
  **"Python Programming for the Information Technology Era" (6–10th sessions),** July 2015.  
  Delivered lectures on Python libraries, data analysis, web programming, and automation tools as part of a 30-hour university program.

## Projects

### Applications

{% for app in site.data.apps %}
- [{{ app.name }}]({{ app.link }}){% if app.github %} ([GitHub]({{ app.github }})){% endif %}: {{ app.description_en | default: app.description }} (Tech stack: {{ app.tech | join: ', ' }})
{% endfor %}

### Chatbots

{% for bot in site.data.bots %}
  {% if bot.status == "active" %}
- [{{ bot.name }}]({{ bot.link }}){% if bot.intro_link %} ([Intro]({{ bot.intro_link }})){% endif %}: {{ bot.description_en | default: bot.description }}
  {% endif %}
{% endfor %}

## Publications
### Authored Books

{% for book in site.data.authored_books %}
- {% if book.link %}[{{ book.title_en | default: book.title }}]({{ book.link }}){% else %}{{ book.title_en | default: book.title }}{% endif %}, {{ book.publisher_en | default: book.publisher }}, {{ book.date_en | default: book.date }}
{% endfor %}

### Translations

{% for book in site.data.translated_books %}
- {% if book.link %}[{{ book.title_en | default: book.title }}]({{ book.link }}){% else %}{{ book.title_en | default: book.title }}{% endif %}, {{ book.authors_en | default: book.authors }}, {{ book.publisher_en | default: book.publisher }}, {{ book.date_en | default: book.date }}
{% endfor %}

### Research Papers
- The Necessity and Implementation Plan of AI Technology for Automation of Platoon-level Reconnaissance Drone Operations, [Proceedings of the 2024 Autumn Conference of the Korean Institute of Defense Technology](http://www.kidet.or.kr/index.php?hCode=BOARD&page=view&bo_idx=1&idx=1259)

## Awards
- Encouragement Award, "2024 Chat GPT Idea Contest for Solving Various Social Issues," Center for Humanities and Social Integration and Dissemination, June 19, 2024.
- Encouragement Award, "AI-Generated Artwork Contest," Association of Artificial Intelligence Friends (AAIF), November 4, 2023.

## **Scholarships**  

- **Academic Excellence Scholarship**, awarded for the highest GPA among 2nd-year students in the **Department of Drone & Robot Convergence** (Received in **3nd Year, Spring 2025**)  
- **Academic Excellence Scholarship**, awarded for the highest GPA among 2nd-year students in the **Department of Drone & Robot Convergence** (Received in **2nd Year, Fall 2024**)  
- **Academic Excellence Scholarship**, awarded for the highest GPA among 1st-year students in the **Department of Drone & Robot Convergence** (Received in **2nd Year, Spring 2024**)  
- **Academic Excellence Scholarship**, awarded for the highest GPA among 1st-year students in the **Department of Drone & Robot Convergence** (Received in **1st Year, Fall 2023**)  
