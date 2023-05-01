import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import styles from '../src/styles/Parallax.module.css';

const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      
      {scrollPosition > 0 && <Navbar />}
      <div
        className={styles.parallax}
        style={{
          transform: `translateY(${scrollPosition > 0 ? scrollPosition * 0.5 : 0}px)`,
          opacity: `${scrollPosition > 0 ? 1 - scrollPosition / window.innerHeight : 1}`,
          transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
          backgroundImage: `url('/images/intro.jpg')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
          width:'auto',
          overflow:'hidden',
          margin: '0'
        }}
      >
        {/* Add any content you want to display over the background image */}
        <h1 style={{color:"white"}} >Manivannan <br/>  Web Developer</h1>
      </div>
    </>
  );
};

export default Parallax;
