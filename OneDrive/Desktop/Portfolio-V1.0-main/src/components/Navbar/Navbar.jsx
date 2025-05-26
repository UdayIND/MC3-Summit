import React, {useState} from "react";
import styles from './Navbar.module.css';
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

console.log("Navbar rendered");

export const Navbar = ({ activeSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftGroup}>
        <a className={styles.title} href="/">
          Jasmine
        </a>
        <a href="/resume.pdf" download title="Download Resume">
          <FiDownload className={styles.icon} />
        </a>
        <a href="https://linkedin.com/in/jasmine-christopher" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="https://github.com/jasmine6789" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/j.a.s.m.i.n.e_c/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram className={styles.icon} />
        </a>
      </div>

      <div className={styles.iconRow}>
        <span className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX className={styles.icon} /> : <FiMenu className={styles.icon} />}
        </span>
        <ul 
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" className={activeSection === 'about' ? styles.active : ''}>About</a>
          </li>
          <li>
            <a href="#education" className={activeSection === 'education' ? styles.active : ''}>Education</a>
          </li>
          <li>
            <a href="#skills" className={activeSection === 'skills' ? styles.active : ''}>Skills</a>
          </li>
          <li>
            <a href="#projects" className={activeSection === 'projects' ? styles.active : ''}>Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
