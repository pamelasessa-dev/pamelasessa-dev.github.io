import type { ReactNode } from 'react'

const email = 'mailto:karinasessa@gmail.com'
const github = 'https://github.com/pamelasessa-dev'

const projects = [
  {
    number: '01', type: 'PROYECTO INDIVIDUAL', area: 'BACKEND · API REST', title: 'SGAF', subtitle: '— Sistema de Gestión Académica y Financiera',
    description: 'API REST para gestionar procesos académicos, administrativos y financieros. Incluye autenticación mediante JWT, gestión de roles, validaciones y documentación con Swagger.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT', 'Swagger'], focus: 'Autenticación · Datos · API', art: 'art-sgaf',
  },
  {
    number: '02', type: 'PROYECTO COLABORATIVO', area: 'BACKEND · API REST', title: 'API Backend para Help Desk Interno',
    description: 'Participé en equipo en una API para soporte interno. Mi contribución incluyó funcionalidades relacionadas con tickets, comentarios, usuarios, autenticación, manejo de excepciones y documentación.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'Swagger / OpenAPI'], focus: 'Trabajo en equipo', art: 'art-help',
  },
  {
    number: '03', type: 'EN DESARROLLO', area: 'FRONTEND', title: 'Zoológico Villa Dolores',
    description: 'Aplicación frontend para explorar animales y facilitar la orientación de los visitantes mediante una guía del zoológico.',
    tags: ['React', 'TypeScript', 'Vite'], focus: 'En desarrollo', art: 'art-zoo',
  },
]

const technologies = [
  { title: 'Frontend', note: 'Interfaces y experiencias web', icon: '</>', tags: ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', note: 'Servicios y APIs', icon: '{ }', tags: ['Node.js', 'Express', 'NestJS', 'APIs REST'] },
  { title: 'Datos & herramientas', note: 'Persistencia y flujo de trabajo', icon: '⌘', tags: ['PostgreSQL', 'SQL', 'Prisma', 'Git', 'GitHub', 'Swagger / OpenAPI', 'JWT', 'Passport', 'Supabase', 'Render'] },
]

const education = [
  { year: 'EN CURSO', title: 'Desarrollador Web Full Stack', place: 'Funval', state: 'Formación actual', current: true },
  { year: '2026', title: 'Computer Hardware Basics', place: 'Cisco Networking Academy', state: 'Curso' },
  { year: '2025', title: 'Curso Desarrollador Web', place: 'Ceibal', state: 'Curso' },
  { year: '2025', title: 'Habilidades Digitales para la Empleabilidad', place: 'INEFOP / Microsoft', state: 'Curso' },
]

function ProjectArtwork({ art, number }: { art: string; number: string }) {
  let artwork: ReactNode
  if (art === 'art-sgaf') {
    artwork = <><span className="art-label">SISTEMA ACADÉMICO</span><div className="dashboard"><div className="dash-top"><i /><i /><i /><span>SGAF / panel</span></div><div className="dash-content"><div className="dash-sidebar"><b /><b /><b /><b /></div><div className="dash-main"><div className="dash-title" /><div className="dash-stats"><i /><i /><i /></div><div className="dash-chart">{Array.from({ length: 7 }, (_, i) => <span key={i} />)}</div></div></div></div></>
  } else if (art === 'art-help') {
    artwork = <><span className="art-label">SOPORTE INTERNO</span><div className="ticket-stack"><div className="ticket ticket-back"><i /><b /><em /></div><div className="ticket ticket-front"><span className="ticket-status">ABIERTO</span><i /><b /><em /><small>Ticket #0248</small></div></div></>
  } else {
    artwork = <><span className="art-label">EXPLORAR · DESCUBRIR</span><div className="zoo-map"><div className="map-path" /><span className="map-pin pin-one">✳</span><span className="map-pin pin-two">✳</span><span className="map-pin pin-three">✳</span><div className="map-card"><span>VILLA DOLORES</span><b>Tu recorrido<br />empieza aquí</b></div></div></>
  }
  return <div className={`project-art ${art}`} aria-hidden="true">{artwork}<span className="art-index">{number}</span></div>
}

function ProjectCard({ project, featured = false }: { project: (typeof projects)[number]; featured?: boolean }) {
  return <article className={`project-card ${featured ? 'project-featured' : ''}`}>
    <ProjectArtwork art={project.art} number={project.number} />
    <div className="project-info">
      <div className="project-meta"><span>{project.type}</span><span>{project.area}</span></div>
      <h3>{project.title}{project.subtitle && <span> {project.subtitle}</span>}</h3>
      <p>{project.description}</p>
      <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="project-bottom"><span className="project-focus">{project.art === 'art-zoo' && <i className="status-dot" />}{project.focus}</span><a className="project-link" href={github} target="_blank" rel="noreferrer" aria-label={`Ver proyectos de Pamela en GitHub`}>Ver en GitHub <span>↗</span></a></div>
    </div>
  </article>
}

function App() {
  return <>
    <header className="site-header flex items-center justify-between">
      <a className="brand" href="#inicio" aria-label="Pamela Sessa, inicio"><span className="brand-mark">ps</span><span>Pamela Sessa</span></a>
      <nav aria-label="Navegación principal"><a href="#sobre-mi">Sobre mí</a><a href="#proyectos">Proyectos</a><a href="#tecnologias">Tecnologías</a><a href="#formacion">Formación</a></nav>
      <a className="header-contact" href={email}>Hablemos <span aria-hidden="true">↗</span></a>
    </header>

    <main>
      <section className="hero wrap mx-auto" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> DISPONIBLE PARA NUEVOS DESAFÍOS <span className="location">· URUGUAY</span></p>
          <h1>Hola, soy<br /><span>Pamela Sessa.</span></h1>
          <p className="hero-role">Desarrolladora <span>Full Stack Junior</span></p>
          <p className="hero-intro">Construyo aplicaciones web y APIs REST mientras sigo aprendiendo y creciendo en equipo. Me gusta investigar, resolver problemas y convertir ideas en soluciones claras.</p>
          <div className="hero-actions"><a className="button button-primary" href="#proyectos">Explorar proyectos <span>↓</span></a><a className="button button-quiet" href={email}>Contactarme <span>↗</span></a></div>
          <div className="hero-links"><a href={github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a><span className="link-divider">/</span><a href={email}>karinasessa@gmail.com</a></div>
        </div>
        <div className="hero-visual" aria-label="Ilustración decorativa de código"><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-core"><span className="core-bracket">{'{'}</span><span className="core-code">&lt;/&gt;</span><span className="core-bracket">{'}'}</span></div><span className="float-tag tag-api">API REST</span><span className="float-tag tag-ts">TypeScript</span><span className="float-tag tag-react">React</span><span className="visual-caption">aprendiendo · creando · compartiendo</span></div>
        <div className="hero-index"><span>01</span> / 04</div>
      </section>

      <section className="intro-strip"><div className="wrap strip-inner mx-auto"><span className="strip-label">EN POCAS PALABRAS</span><p>Curiosidad técnica, aprendizaje autónomo y ganas de aportar desde el primer día.</p><span className="strip-arrow">↘</span></div></section>

      <section className="section wrap about-section mx-auto" id="sobre-mi">
        <div className="section-heading"><p className="eyebrow">01 — PERFIL</p><h2>Desarrollo con intención.</h2></div>
        <div className="about-content"><p className="about-lead">Soy desarrolladora Full Stack Junior en formación, con experiencia práctica en proyectos individuales y colaborativos.</p><p>Desarrollo aplicaciones web y APIs REST. Me destaco por aprender rápidamente, investigar de forma autónoma y resolver problemas técnicos. Busco mi primera oportunidad laboral como desarrolladora web Full Stack, frontend o backend junior, donde pueda seguir creciendo y contribuir al equipo.</p><a className="text-link" href={email}>¿Trabajamos juntos? <span>↗</span></a></div>
      </section>

      <section className="section projects-section" id="proyectos"><div className="wrap mx-auto">
        <div className="section-heading heading-row"><div><p className="eyebrow">02 — TRABAJO SELECCIONADO</p><h2>Proyectos destacados<span className="accent">.</span></h2></div><span className="heading-note">01 individual · 01 colaborativo · 01 en desarrollo</span></div>
        <ProjectCard project={projects[0]} featured />
        <div className="project-grid">{projects.slice(1).map(project => <ProjectCard key={project.number} project={project} />)}</div>
      </div></section>

      <section className="section wrap tech-section mx-auto" id="tecnologias">
        <div className="section-heading heading-row"><div><p className="eyebrow">03 — HERRAMIENTAS</p><h2>Mi stack de trabajo<span className="accent">.</span></h2></div><p className="heading-note">Tecnologías que conozco y utilizo<br />en mis proyectos.</p></div>
        <div className="tech-grid">{technologies.map(group => <article className="tech-group" key={group.title}><div className="tech-group-head"><span className="tech-icon">{group.icon}</span><div><h3>{group.title}</h3><p>{group.note}</p></div></div><div className="tech-tags">{group.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="education-section" id="formacion"><div className="wrap education-layout mx-auto"><div className="section-heading"><p className="eyebrow">04 — APRENDIZAJE</p><h2>Formación<br />en progreso.</h2><p className="education-note">Aprender es parte de cómo trabajo. Sigo ampliando mis conocimientos paso a paso.</p><div className="language-card"><span className="language-symbol">文</span><div><span className="language-label">IDIOMAS</span><p><b>Español</b> · Nativo <span className="language-separator">/</span> <b>Inglés</b> · A2</p></div></div></div><div className="timeline">{education.map(item => <article className={`timeline-item ${item.current ? 'current' : ''}`} key={item.title}><span className="timeline-year">{item.year}</span><span className="timeline-dot" /><div><h3>{item.title}</h3><p>{item.place}</p><span className="timeline-state">{item.state}</span></div></article>)}</div></div></section>

      <section className="contact-section"><div className="wrap contact-inner mx-auto"><div><p className="eyebrow">¿TENÉS UN PROYECTO O UNA OPORTUNIDAD?</p><h2>Hagamos algo<br /><span>que valga la pena.</span></h2></div><a className="contact-cta" href={email}>Escribime un correo <span>↗</span></a><span className="contact-orb" /></div></section>
    </main>

    <footer className="site-footer"><div className="wrap footer-inner mx-auto"><a className="brand" href="#inicio"><span className="brand-mark">ps</span><span>Pamela Sessa</span></a><p>Diseñado y desarrollado con curiosidad. <span>© {new Date().getFullYear()}</span></p><div className="footer-links"><a href={github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={email}>Email ↗</a></div></div></footer>
  </>
}

export default App

