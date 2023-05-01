// components/ScrollImages.js

import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from '../styles/Certi.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = ['https://media.licdn.com/dms/image/C5622AQF5a9cP0g0O5A/feedshare-shrink_800/0/1676693825942?e=1685577600&v=beta&t=dfbWDRJafpBTUvLxTKkDXoMtmadWxZC102II-iF7r14', 'https://media.licdn.com/dms/image/C5622AQGsQwr-ULZ9_A/feedshare-shrink_1280/0/1679491098791?e=1685577600&v=beta&t=j685FlyJC_kj4WeDehKwDCQHi6351ag2-AF-31yFi2E', 'https://media.licdn.com/dms/image/C4E22AQH9YVuDoXF_Lg/feedshare-shrink_800/0/1660573366184?e=1685577600&v=beta&t=-veHbqIZx4ivrw892QN1H4TS8vbwbKH-1fo6tqOGuhc','https://media.licdn.com/dms/image/C5622AQEHYoy_U7_pQg/feedshare-shrink_1280/0/1676693972835?e=1685577600&v=beta&t=Wi4-6PiTUmsy9QFmlpyIX3bD7B3m-FFz3C7XOKCaIqc','https://media.licdn.com/dms/image/C5622AQFYOugz3Gg7yw/feedshare-shrink_1280/0/1676693970624?e=1685577600&v=beta&t=Xa0qb3-KsspB1V3rtugCvb3i2ycN9-pzasdQJmaV26Q','https://media.licdn.com/dms/image/D5622AQEwgZIyipVMPw/feedshare-shrink_800/0/1682922277650?e=1685577600&v=beta&t=zDTCluMvwaAkE-9MyrqsPPwp2jwZ9KbaeGp6LrTFx3o','https://media.licdn.com/dms/image/D5622AQHwGAsQbtjWLg/feedshare-shrink_800/0/1682922464851?e=1685577600&v=beta&t=v2mHCv91ct7Bt5yMxnQvAjMZIBbKC9lLXdHLeby1N1E'];

const Certi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // animation only happens once
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target);
            setCurrentIndex(index);
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% of the image is visible
    );

    imageRefs.current.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { duration: 1000 }, // animation duration in milliseconds
  });

  return (
    <div className={styles.scrollContainer}>
      {images.map((imageUrl, index) => (
        <animated.img
          key={index}
          className={styles.scrollImage}
          src={imageUrl}
          alt={`Image ${index}`}
          style={index <= currentIndex ? springProps : {}}
          ref={(el) => (imageRefs.current[index] = el)}
          data-aos="fade-up"
        />
      ))}
    </div>
  );
};

export default Certi;
