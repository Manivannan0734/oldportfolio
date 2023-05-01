import React from 'react';
import styles from '../src/styles/Cards.module.css';

const Card2 = ({  imageUrl }) => {
  const handleOnClick = () => {
    window.location.href = 'https://github.com/Manivannan0734';
  };
  return (
    <div onClick={handleOnClick} className={styles.card}>
      
      <h1 style={{textDecoration:"none"}} >Projects</h1>
      <img className={styles.cardImage} src={imageUrl} alt="Loading"/>
      <div className={styles.cardContent}>
       
      </div>
    
    </div>
    );
};
export default Card2;
