const profile = {
  name: 'Prabhat Saini',
  title: 'AI/ML Engineer · Full-Stack Developer',
  location: 'Ghaziabad, U.P',
  email: 'prabhat23169064@akgec.ac.in',
  phone: '+91 8006077821',
  github: 'https://github.com/prabhat243',
  resume: 'Prabhat_Final.pdf',
  summary:
    'Motivated Computer Science undergraduate with hands-on experience in full-stack web development, DevOps, and a rapidly growing foundation in Artificial Intelligence and Machine Learning. Skilled in Python, JavaScript, containerization, CI/CD, cloud platforms, and modern AI tooling.',
  stats: [
    { label: 'Years in CS', value: '3+' },
    { label: 'Projects Built', value: '2+' },
    { label: 'Cloud/DevOps Tools', value: '8+' },
    { label: 'AI/ML Libraries', value: '5+' }
  ],
  skills: [
    {
      title: 'Languages',
      items: ['Python', 'JavaScript (ES6+)', 'C', 'C++']
    },
    {
      title: 'AI / ML',
      items: ['scikit-learn', 'NumPy', 'Matplotlib', 'NLTK']
    },
    {
      title: 'Frontend',
      items: ['React.js', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
      title: 'Backend',
      items: ['Node.js', 'FastAPI', 'Rest APIs']
    },
    {
      title: 'Database & Tools',
      items: ['SQLite', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter', 'Google Colab']
    },
    {
      title: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'ArgoCD', 'Terraform', 'Ansible', 'Linux', 'Azure', 'AWS']
    }
  ],
  experience: [
    {
      role: 'DevOps Engineer Intern',
      company: 'Kushel Digi Solutions',
      period: 'Jun 2026 – Present',
      highlights: [
        'Working on containerization and orchestration using Docker and Kubernetes in a production environment.',
        'Assisting in setting up CI/CD pipelines and infrastructure automation using Terraform and Ansible.',
        'Gaining hands-on experience with cloud platforms and GitOps workflows using ArgoCD.'
      ]
    }
  ],
  projects: [
    {
      title: 'Sentiment Analysis API',
      stack: 'Python · NLTK · scikit-learn · FastAPI',
      description:
        'Built a text sentiment classifier trained on the IMDB dataset, with a FastAPI endpoint returning sentiment and confidence.',
      impact: 'Achieved ~88% validation accuracy and documented the workflow in a Jupyter Notebook.'
    },
    {
      title: 'SecureScan',
      stack: 'FastAPI · React/Vite · SQLite',
      description:
        'Engineered a full-stack vulnerability scanner with SQL injection, XSS, SSL/TLS, and port scanning modules.',
      impact: 'Implemented async scan jobs, persistent reporting, and a modern UI for live results.'
    }
  ],
  education: [
    {
      degree: 'B.Tech — Computer Science',
      institution: 'Ajay Kumar Garg Engineering College, Ghaziabad',
      period: '2023 – Present',
      note: '3rd Year student with strong interest in systems, AI, and modern software engineering.'
    }
  ],
  certifications: [
    'The Complete Web Developer Bootcamp — Udemy',
    'Machine Learning with Python — Self-study',
    'Generative AI Fundamentals — Self-study',
    'DevOps Engineering — Self-study'
  ]
};

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

function renderNav() {
  const nav = document.getElementById('nav');
  nav.innerHTML = sections
    .map((section) => `<a href="#${section.id}">${section.label}</a>`)
    .join('');
}

function renderHero() {
  return `
    <section id="home" class="hero">
      <div class="hero-card">
        <span class="eyebrow">Available for internships and collaboration</span>
        <h1>${profile.name}</h1>
        <p>${profile.title}</p>
        <p>${profile.summary}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${profile.resume}">Download Resume</a>
          <a class="btn btn-secondary" href="#projects">View Projects</a>
        </div>
      </div>
      <div class="info-card">
        <h3>Quick Info</h3>
        <ul class="info-list">
          <li>📍 ${profile.location}</li>
          <li>📧 <a href="mailto:${profile.email}">${profile.email}</a></li>
          <li>📱 ${profile.phone}</li>
          <li>🔗 <a href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section id="about" class="section-card">
      <div class="section-title">
        <h3>About Me</h3>
      </div>
      <p>${profile.summary}</p>
      <div class="tag-grid">
        ${profile.stats
          .map(
            (item) => `
              <div class="tag-card">
                <strong>${item.value}</strong>
                <div>${item.label}</div>
              </div>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderSkills() {
  return `
    <section id="skills" class="section-card">
      <div class="section-title">
        <h3>Technical Skills</h3>
      </div>
      <div class="skill-grid">
        ${profile.skills
          .map(
            (group) => `
              <div class="skill-group">
                <h4>${group.title}</h4>
                <ul>
                  ${group.items.map((item) => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderProjects() {
  return `
    <section id="projects" class="section-card">
      <div class="section-title">
        <h3>Featured Projects</h3>
      </div>
      <div class="project-grid">
        ${profile.projects
          .map(
            (project) => `
              <article class="project-card">
                <h4>${project.title}</h4>
                <div class="meta">${project.stack}</div>
                <p>${project.description}</p>
                <p><strong>Impact:</strong> ${project.impact}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderExperience() {
  return `
    <section id="experience" class="section-card">
      <div class="section-title">
        <h3>Experience</h3>
      </div>
      <div class="timeline">
        ${profile.experience
          .map(
            (item) => `
              <article class="experience-card">
                <h4>${item.role}</h4>
                <div class="meta">${item.company} · ${item.period}</div>
                <ul class="list">
                  ${item.highlights.map((point) => `<li>${point}</li>`).join('')}
                </ul>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderEducation() {
  return `
    <section class="section-card">
      <div class="section-title">
        <h3>Education</h3>
      </div>
      <div class="timeline">
        ${profile.education
          .map(
            (item) => `
              <article class="experience-card">
                <h4>${item.degree}</h4>
                <div class="meta">${item.institution} · ${item.period}</div>
                <p>${item.note}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderCertifications() {
  return `
    <section class="section-card">
      <div class="section-title">
        <h3>Certifications & Learning</h3>
      </div>
      <div class="cert-list">
        ${profile.certifications
          .map((item) => `<div class="cert-card">${item}</div>`)
          .join('')}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section id="contact" class="section-card">
      <div class="section-title">
        <h3>Let’s Connect</h3>
      </div>
      <p>I’m currently exploring opportunities in software development, AI/ML, and DevOps. Feel free to reach out for internships, projects, or collaboration.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="mailto:${profile.email}">Email Me</a>
        <a class="btn btn-secondary" href="${profile.github}" target="_blank" rel="noreferrer">Visit GitHub</a>
      </div>
    </section>
  `;
}

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = [
    renderHero(),
    renderAbout(),
    renderSkills(),
    renderProjects(),
    renderExperience(),
    renderEducation(),
    renderCertifications(),
    renderContact()
  ].join('');
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
  }
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggle.textContent = isLight ? '☀️' : '🌙';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderNav();
  renderApp();
  initTheme();
});
