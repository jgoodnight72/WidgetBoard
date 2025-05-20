import logo from './logos/logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Clock from './components/Clock';
import gitIcon from './icons/git.png';
import linkedinIcon from './icons/linkedin.png';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/app/home')
    .then(res => res.text())
    .then(data => setMessage(data))
    .catch((err) => console.error(err));;
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Widget Board</h1>
        <Clock/>
      </header>
      <main className="app-main">
        <p>{message}</p>
      </main>
      <footer className="app-footer">
        <span className="footer-about">
          <h4>About The Developer</h4>
          <p>
            Passionate about building great software with great people! 
            To me, meaningful work comes from impactful solutions, collaboration and team synergy. 
            As a Software Developer at Opus, I work remotely with a nationwide team, delivering scalable, high-quality software. 
            Always looking to grow, refine my skills, and contribute to projects that make a difference.
          </p>
        </span>
        <span className="footer-contact-info"> 
          <h4>Contact Info</h4>
          <p>
            (509)690-7476
            <br/>
            jgoodnight7272@gmail.com
          </p>
          <span className="footer-contact-icons">
            <a href="https://www.linkedin.com/in/jtraeger/" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="Linkedin Icon" className="linkedin-icon"></img>
            </a>
            <a href="https://github.com/jgoodnight72" target="_blank" rel="noreferrer">
              <img src={gitIcon} alt="Git Icon" className="git-icon"></img>
            </a>
          </span>
        </span>
      </footer>
    </div>
  );
}

export default App;
