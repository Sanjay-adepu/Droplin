import React from 'react';
import styles from './footer.module.css';

export default function footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Droplin. All rights reserved.</p>
      <div className={styles.links}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}