import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

// ── Data ──────────────────────────────────────────────
const NAV_LINKS = ['About', 'Skills', 'Projects', 'Education', 'Achievements', 'Contact']

const skills = ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Git Basics']

const projects = [
  { title: 'Student Grade Calculator',   description: 'Developed using Python. Calculates total marks, percentage, and grade based on student scores.' },
  { title: 'Personal Portfolio Website', description: 'Built using HTML and CSS to showcase skills, education, and projects in a responsive layout.' },
  { title: 'Library Management System',  description: 'Developed using Java basics. Allows adding, searching, and managing book records.' },
  { title: 'Calculator Application',     description: 'Created using HTML, CSS, and JavaScript. Performs basic arithmetic operations.' },
  { title: 'To-Do List App',             description: 'Web application to add, delete, and manage daily tasks using JavaScript.' },
  { title: 'Weather Information App',    description: 'Beginner-level project that displays weather details using a public weather API.' },
]

const achievements = [
  'Learning Data Structures and Algorithms',
  'Completed multiple programming exercises in C and Python',
  'Actively building beginner-level software projects',
  'Exploring Web Development and Java Programming',
]

// ── Navbar ────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (section) => {
    setMenuOpen(false)
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <span className="navbar__brand">MS</span>

      {/* Desktop links */}
      <ul className="navbar__links">
        {NAV_LINKS.map(link => (
          <li key={link}>
            <button onClick={() => handleNavClick(link)}>{link}</button>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        {NAV_LINKS.map(link => (
          <button key={link} onClick={() => handleNavClick(link)}>{link}</button>
        ))}
      </div>
    </nav>
  )
}

// ── Contact Form (EmailJS) ────────────────────────────
function ContactForm() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // 🔴 Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID',  // 🔴 Replace with your EmailJS Template ID
      formRef.current,
      'YOUR_PUBLIC_KEY'    // 🔴 Replace with your EmailJS Public Key
    )
    .then(() => {
      setStatus('success')
      formRef.current.reset()
    })
    .catch(() => setStatus('error'))
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input id="user_name" type="text" name="user_name" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input id="user_email" type="email" name="user_email" placeholder="your@email.com" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" name="subject" placeholder="What's this about?" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required />
      </div>

      <button type="submit" className="btn-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'success' && <p className="form-feedback form-feedback--success">✅ Message sent successfully!</p>}
      {status === 'error'   && <p className="form-feedback form-feedback--error">❌ Something went wrong. Please try again.</p>}
    </form>
  )
}

// ── App ───────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />

      <header className="header" id="home">
        <h1>M. Sangamesh</h1>
        <p>CSE Student | Aspiring Software Developer</p>
      </header>

      <main className="container">

        <section id="about">
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <p>I am M. Sangamesh, a Computer Science and Engineering student at CMR Engineering College (2024–2028). I am passionate about programming, problem solving, and learning new technologies. Currently, I am building my foundation in software development and exploring different programming languages.</p>
          </div>
        </section>

        <section id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map(skill => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <h2 className="section-title">Education</h2>
          <div className="card">
            <h3>CMR Engineering College</h3>
            <p>B.Tech — Computer Science and Engineering</p>
            <p>2024 – 2028</p>
          </div>
        </section>

        <section id="achievements">
          <h2 className="section-title">Achievements</h2>
          <div className="card">
            <ul className="achievements-list">
              {achievements.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="card">
            <div className="contact-info">
              <p>📧 sangamesh@example.com</p>
              <p>📞 +91 XXXXXXXXXX</p>
              <div className="links">
                <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
            <hr className="divider" />
            <h3 className="form-heading">Send a Message</h3>
            <ContactForm />
          </div>
        </section>

      </main>

      <footer className="footer">
        <p>© 2026 M. Sangamesh | Portfolio Website</p>
      </footer>
    </>
  )
}