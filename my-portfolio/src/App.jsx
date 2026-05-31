import './App.css'

const skills = ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Git Basics']

const projects = [
  { title: 'Student Grade Calculator', description: 'Developed using Python. Calculates total marks, percentage, and grade based on student scores.' },
  { title: 'Personal Portfolio Website', description: 'Built using HTML and CSS to showcase skills, education, and projects in a responsive layout.' },
  { title: 'Library Management System', description: 'Developed using Java basics. Allows adding, searching, and managing book records.' },
  { title: 'Calculator Application', description: 'Created using HTML, CSS, and JavaScript. Performs basic arithmetic operations.' },
  { title: 'To-Do List App', description: 'Web application to add, delete, and manage daily tasks using JavaScript.' },
  { title: 'Weather Information App', description: 'Beginner-level project that displays weather details using a public weather API.' },
]

const achievements = [
  'Learning Data Structures and Algorithms',
  'Completed multiple programming exercises in C and Python',
  'Actively building beginner-level software projects',
  'Exploring Web Development and Java Programming',
]

export default function App() {
  return (
    <>
      <header className="header">
        <h1>M. Sangamesh</h1>
        <p>CSE Student | Aspiring Software Developer</p>
      </header>

      <main className="container">

        <section>
          <h2 className="section-title">About Me</h2>
          <div className="card">
            <p>I am M. Sangamesh, a Computer Science and Engineering student at CMR Engineering College (2024–2028). I am passionate about programming, problem solving, and learning new technologies. Currently, I am building my foundation in software development and exploring different programming languages.</p>
          </div>
        </section>

        <section>
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Education</h2>
          <div className="card">
            <h3>CMR Engineering College</h3>
            <p>B.Tech — Computer Science and Engineering</p>
            <p>2024 – 2028</p>
          </div>
        </section>

        <section>
          <h2 className="section-title">Achievements</h2>
          <div className="card">
            <ul className="achievements-list">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="section-title">Contact</h2>                      




          
          <div className="card">
            <p>📧 sangamesh@example.com</p>
            <p>📞 +91 XXXXXXXXXX</p>
            <div className="links">
              <a href="#" target="_blank" rel="noreferrer">GitHub Profile</a>
              <a href="#" target="_blank" rel="noreferrer">LinkedIn Profile</a>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <p>© 2026 M. Sangamesh | Portfolio Website</p>
      </footer>
    </>
  )
}