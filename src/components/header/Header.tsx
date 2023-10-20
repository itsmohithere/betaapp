import React from "react";
import Image from "next/image";
import styles from "./header.module.css"

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.logo}
            width={100}
            height={24}
            priority
          />
        </div>
        <nav>
          How It Work
        </nav>
        <nav>
          Browse Jobs
        </nav>
      </div>
      <div className={styles.innerContainer}>
        <nav>
          Log In
        </nav>
        <nav>
          Sign Up
        </nav>
        <button className={styles.postButton}>
          Post a Project
        </button>
      </div>
    </header>
  );
};

export default Header;
