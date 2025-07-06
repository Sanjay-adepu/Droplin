"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css"; // Assuming you're using CSS Modules

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        {/* Logo */}
        <Link href="/" className={styles["navbar-logo"]}>
          <div className={styles["logo-wrapper"]}>
            <Image
              src="./file_0000000092fc61f8b1dcef3bcbda5a3c.jpg"
              alt="Droplin Logo"
              width={40}
              height={40}
              className={styles["logo-img"]}
            />
            
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className={styles["nav-links-desktop"]}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Upload">Upload</Link></li>
          <li><Link href="/download">Download</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`${styles["hamburger-menu"]} ${isMenuOpen ? styles.open : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles["nav-links"]}>
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="/Upload" onClick={() => setIsMenuOpen(false)}>Upload</Link></li>
          <li><Link href="/download" onClick={() => setIsMenuOpen(false)}>Download</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
