// components/Card.js
import Link from 'next/link';
import React from 'react';
import styles from '../src/styles/Cards.module.css';
const Card3 = ({  imageUrl }) => {
  return (
  <div className={styles.card}>
    <Link href="/Certi" >
      <h1>Certifications</h1>
      <img className={styles.cardImage} src={imageUrl} alt="loaading" />
      <div className={styles.cardContent}>
        
      </div>
      </Link>
    </div>
    );
};
export default Card3;
