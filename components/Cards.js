// components/Cards.js

import React, { useEffect } from 'react';
import styles from '../src/styles/Cards.module.css';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cards = ({ imageUrl }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // animation only happens once
      delay:1000
    });
  }, []);

  return (
    <div className={styles.card} data-aos="fade-up">
      <h1>About me</h1>
      <Link href="/About">
        <img className={styles.cardImage} src={imageUrl} alt="loading" />
        <div className={styles.cardContent}></div>
      </Link>
    </div>
  );
};

export default Cards;
