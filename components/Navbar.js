import React from 'react';
import Link from 'next/link';
import styles from '../src/styles/Navbar.module.css';

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'resume.pdf';
  link.click();
};

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/About">
              <div>About</div>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#">
              <div onClick={downloadResume}>Resume</div>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/ContactForm">
              <div>Contact</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
