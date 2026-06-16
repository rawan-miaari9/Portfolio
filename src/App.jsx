import React, { useState, useEffect } from 'react';

// ==========================================
// 1. NAVBAR SECTION (Responsive Layout)
// ==========================================
function Navbar({ activeSection }) {
  const logoName = "BuildLog"; 
  // State to track if the mobile menu drawer is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg w-full">
      <div className="max-w-6xl w-full mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <span className="text-lg md:text-xl font-bold text-sky-400 tracking-wide shrink-0">
          {logoName}
        </span>
        
        {/* DESKTOP MENU: Visible on computers (md:flex), completely hidden on mobile (hidden) */}
        <div className="hidden md:flex space-x-6 font-medium text-sm">
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`capitalize transition-colors duration-200 ${
                activeSection === section ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-sky-300'
              }`}
            >
              {section}
            </a>
          ))}
        </div>

        {/* MOBILE BURGER BUTTON: Visible on mobile, hidden on computer (md:hidden) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* This changes the icon layout automatically between 3 bars or an 'X' close symbol */}
          {isOpen ? (
            // The "X" Close Button Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // The 3-Bar Hamburger Button Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE DRAWER: Drops down instantly ONLY when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-3 flex flex-col shadow-inner">
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              // When a user clicks a link, move to section AND automatically close the drawer!
              onClick={() => setIsOpen(false)}
              className={`capitalize text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                activeSection === section 
                  ? 'bg-slate-800 text-sky-400 font-bold' 
                  : 'text-slate-300 hover:bg-slate-800/50 hover:text-sky-300'
              }`}
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ==========================================
// 2. HERO / INTRO SECTION
// ==========================================
function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-950 w-full px-4 py-12">
      <div className="text-center max-w-3xl w-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
          Hi, I'm <span className="text-sky-400">Rawan Miaari</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 mb-6">
          Full Stack Web Developer
        </p>
        <p className="text-sm md:text-lg text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
          I build clean, responsive, and robust web applications. Passionate about linking highly efficient backend logic with clean frontend user interfaces.
        </p>
        {/* flex-col stacks buttons vertically on mobile, sm:flex-row snaps side-by-side */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xs mx-auto sm:max-w-none">
          <a href="#projects" className="w-full sm:w-auto text-center px-6 py-3 bg-sky-600 text-white font-medium rounded-lg shadow-md hover:bg-sky-500 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="w-full sm:w-auto text-center px-6 py-3 bg-slate-800 text-slate-200 font-medium rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. ABOUT ME SECTION
// ==========================================
function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-slate-900 w-full px-4 border-y border-slate-800/50">
      <div className="max-w-4xl w-full mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">About Me</h2>
        <div className="text-slate-400 space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-center md:text-left">
          <p>
            Hello! I am a software engineer with a deep interest in constructing software systems that solve structural real-world problems. My interest in full-stack web development comes from wanting to understand how complex backend database rows render efficiently into sleek browser interfaces.
          </p>
          <p>
            I focus heavily on code quality, testing workflows, and continuous growth. My ambition is to be a reliable team member who builds performant tools while writing software that remains maintainable for other developers.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. TECHNOLOGIES & TOOLS SECTION
// ==========================================
function Technologies() {
  const stack = ['JavaScript', 'PHP', 'Python', 'React', 'Laravel', 'SQL', 'Git & GitHub', 'Tailwind CSS'];
  return (
    <section className="py-20 bg-slate-950 w-full px-4">
      <div className="max-w-4xl w-full mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Technologies & Tools</h2>
        {/* Safe mobile stack grid: grid-cols-1 forces full width rows on base mobile view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stack.map((item, index) => (
            <div key={index} className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-center font-medium text-slate-300 text-sm shadow-sm hover:border-sky-500 transition-colors">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. CORE STRENGTHS SECTION
// ==========================================
function Skills() {
  const coreSkills = ['Component-based development', 'Responsive web layouts', 'Clean code practices', 'Team collaboration workflow'];
  return (
    <section id="skills" className="py-20 bg-slate-900 w-full px-4 border-y border-slate-800/50">
      <div className="max-w-4xl w-full mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Core Strengths</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {coreSkills.map((skill, index) => (
            <div key={index} className="flex items-center text-slate-300 text-xs sm:text-sm bg-slate-950 p-4 rounded-lg border border-slate-800 w-full">
              <span className="w-2 h-2 bg-sky-500 rounded-full mr-3 shrink-0"></span>
              <span className="break-words">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 6. PROJECTS SECTION
// ==========================================
function ProjectCard({ name, description, tags, githubLink }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-full hover:border-slate-700 transition-colors shadow-md w-full">
      <div className="p-5 md:p-6 flex-grow">
        <h3 className="text-base md:text-lg font-bold text-white mb-2">{name}</h3>
        <p className="text-slate-400 text-xs md:text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-0.5 bg-slate-950 border border-slate-800 text-sky-400 rounded text-[11px] font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5 md:p-6 pt-0 mt-auto border-t border-slate-800/50 bg-slate-950/30">
        <a href={githubLink} target="_blank" rel="noreferrer" className="text-xs md:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors inline-block mt-2">
          GitHub Repository →
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const projectList = [
    { name: "Home Services - Website", description: "UI kit made for Technicians theme industry or another can related to, because we included Home page, Blog Page, About Page, Contact Us page, and this UI kit ready for mobile responsive.", tags: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/rawan-miaari9/First-Project.git" },
    { name:  "Checkout Flow", description: "Payment flow that collects user information, address details, and credit/debit card information. Interactive, and fully responsive checkout interface", tags: ["HTML", "CSS", "JavaScript"], githubLink: "https://github.com/rawan-miaari9/Checkout-Flow.git" },
    //{ name: "Weather Metrics Interface", description: "Asynchronous single-page web view configured to look up location names and display clean meteorological charts and telemetry cards.", tags: ["JavaScript", "CSS Grid", "Fetch API"], githubLink: "https://github.com" }
  ];
  return (
    <section id="projects" className="py-20 bg-slate-950 w-full px-4">
      <div className="max-w-6xl w-full mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Featured Projects</h2>
        <p className="text-slate-400 text-center mb-10 text-xs md:text-sm max-w-md mx-auto">A detailed review of specific projects built to demonstrate technical full-stack operations.</p>
        {/* Enforces 1 full-width item per column on mobile screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, idx) => <ProjectCard key={idx} {...project} />)}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 7. WHY COMPANIES SHOULD HIRE ME SECTION
// ==========================================
function HireMe() {
  const cards = [
    { title: "Continuous Learning", text: "I pick up backend libraries, state frameworks, and interface patterns quickly, implementing them accurately into functional systems." },
    { title: "Problem Solving", text: "I investigate logic bottlenecks systematically, writing algorithms that run predictably across edge cases and high volumes." },
    { title: "Code Quality & Reliability", text: "I structure code in an organized manner with descriptive naming conventions, guaranteeing your engineering team stays fast and unblocked." }
  ];
  return (
    <section className="py-20 bg-slate-900 w-full px-4 border-y border-slate-800/50">
      <div className="max-w-5xl w-full mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">Why Hire Me</h2>
        {/* Changes down to grid-cols-1 for a neat phone scrolling view */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-md w-full">
              <h3 className="font-bold text-sm md:text-lg text-slate-100 mb-2">{card.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 8. CONTACT SECTION
// ==========================================
function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    alert(`Success! Message recorded from: ${email}`);
    setEmail(''); setMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 w-full px-4">
      <div className="max-w-md w-full mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Get In Touch</h2>
        <p className="text-slate-400 text-center mb-8 text-xs md:text-sm">Reach out via the form below or link directly to my professional channels.</p>
        
        <form onSubmit={handleForm} className="space-y-4 mb-8 w-full">
          <input 
            type="email" placeholder="Your Email Address" required value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs sm:text-sm outline-none focus:border-sky-500 transition-colors" 
          />
          <textarea 
            placeholder="Your Message..." rows="4" required value={message} onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs sm:text-sm outline-none focus:border-sky-500 transition-colors"
          ></textarea>
          <button type="submit" className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs sm:text-sm rounded-lg shadow-md transition-colors">
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-6 text-slate-400 text-xs sm:text-sm font-medium">
          <a href="https://github.com/rawan-miaari9" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">GitHub</a>
          <a href="http://www.linkedin.com/in/rawan-miaari" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 9. MASTER APP ENTRY (Scroll Tracker Engine)
// ==========================================
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            window.history.replaceState(null, '', `#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 antialiased scroll-smooth w-full overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      <main className="w-full">
        <Hero />
        <About />
        <Technologies />
        <Skills />
        <Projects />
        <HireMe />
        <Contact />
      </main>
      <footer className="bg-slate-950 text-slate-600 py-8 text-center text-xs border-t border-slate-900 w-full px-4">
        <div>&copy; {new Date().getFullYear()} Rawan Miaari. All rights reserved.</div>
      </footer>
    </div>
  );
}