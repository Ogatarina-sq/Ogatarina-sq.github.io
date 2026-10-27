---
layout: about
title: about
permalink: /
---

<div class="biography">
  <figure class="profile">
    <img src="{{ '/profile.jpg' | relative_url }}" alt="Quan Shi" width="1517" height="1612" fetchpriority="high">
    <figcaption>National University of Singapore<br><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></figcaption>
  </figure>

  <p>Hello! I am <strong>Quan Shi</strong>, a PhD student at the <a href="https://www.nus.edu.sg/">National University of Singapore (NUS)</a>, advised by <a href="https://cde.nus.edu.sg/ece/staff/biplab-sikdar/">Prof. Biplab Sikdar</a> and <a href="https://sites.google.com/view/prosantagope">Dr. Prosanta Gope</a>.</p>

  <p>My research focuses on <strong>next-generation network systems and security</strong>, including 5G, 6G, and satellite networks. I am also interested in AI, including large language models, agents, and embodied AI, with a strong foundation in cryptography and algorithm design.</p>

  <p>My work has appeared at <strong>USENIX Security, IEEE S&amp;P, and ACM CCS</strong>. My leading work, <a href="https://www.usenix.org/conference/usenixsecurity26/presentation/shi-quan">LPG</a>, received the <a class="inline-award" href="{{ '/sec26_distinguished_paper-shi.pdf' | relative_url }}" aria-label="View USENIX Security Distinguished Paper Award certificate (PDF)"><span aria-hidden="true">🏆</span> Distinguished Paper Award</a> at USENIX Security 2026.</p>

  <p>Before NUS, I received my bachelor's degree from the <a href="https://www.uestc.edu.cn/">University of Electronic Science and Technology of China (UESTC)</a> in 2024.</p>

  <p>I am excited to collaborate on network security and AI. Please feel free to <a href="mailto:{{ site.author.email }}">get in touch</a>!</p>
</div>

<section class="section" aria-labelledby="news-heading">
  <h2 id="news-heading">news</h2>
  <dl class="news-list">
    <div class="news-item"><dt>2026</dt><dd><span aria-hidden="true">🏆</span> <strong>LPG wins the Distinguished Paper Award</strong> at USENIX Security!</dd></div>
    <div class="news-item"><dt>2026</dt><dd>Our paper <strong>ZK-eSIM</strong> is accepted by ACM CCS.</dd></div>
    <div class="news-item"><dt>2025</dt><dd>Our paper <strong>PGUS</strong> appears at IEEE S&amp;P.</dd></div>
  </dl>
</section>

<section class="section" aria-labelledby="publications-heading">
  <div class="section-heading">
    <h2 id="publications-heading">selected publications</h2>
    <a href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">→</span></a>
  </div>
  {% include academic-publications.html id_prefix="selected-" %}
</section>

<section class="section" aria-labelledby="education-heading">
  <h2 id="education-heading">education</h2>
  <div class="education-list">
    <div class="education-item">
      <div class="education-date">2024–2028</div>
      <div><p><strong>National University of Singapore</strong></p><p class="education-degree">PhD · Singapore</p></div>
    </div>
    <div class="education-item">
      <div class="education-date">2020–2024</div>
      <div><p><strong>University of Electronic Science and Technology of China</strong></p><p class="education-degree">Bachelor's degree · China</p></div>
    </div>
  </div>
  <p class="honors-note"><strong>Undergraduate honor:</strong> <a href="{{ '/awards/#mcm' | relative_url }}">Outstanding Winner, Mathematical Contest in Modeling (MCM), 2022</a>, COMAP.</p>
</section>

<section class="section" aria-labelledby="activities-heading">
  <h2 id="activities-heading">Professional Activities</h2>
  <p>I have been invited to serve as a reviewer for:</p>
  <ul class="activities-list">
    <li><strong>TIFS</strong> — IEEE Transactions on Information Forensics and Security</li>
    <li><strong>TDSC</strong> — IEEE Transactions on Dependable and Secure Computing</li>
    <li><strong>PETS</strong> — Privacy Enhancing Technologies Symposium</li>
    <li><strong>EuroS&amp;P</strong> — IEEE European Symposium on Security and Privacy</li>
  </ul>
</section>

<section class="section contact" aria-label="Contact">
  <div class="contact-links">
    <a href="mailto:{{ site.author.email }}"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 5 9 7 9-7"/></svg>Email</a>
    <a href="https://github.com/{{ site.author.github }}"><svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.12.68-3.78-1.33-3.78-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.49-.28-5.1-1.25-5.1-5.54 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.61 5.25-5.11 5.53.4.35.76 1.03.76 2.08v3.2c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg>GitHub</a>
  </div>
  <p class="contact-note">Open to research collaborations in network security and AI.</p>
</section>
