import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from '../styles/About.module.css';

const About = () => {
  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/in/manivannan-pandian-b59134227';
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  
  });

  return (
   
    
    <div className={styles.W}>
      
    <div className={styles.box}>
    <animated.div className={styles['animated-intro']} style={fadeIn}>
   
    <p>Hello, my name is Manivannan, and I'm a front-end web developer with expertise in React, JavaScript, Python, Java, MySQL, HTML, and CSS. 
    I have experience building interactive and responsive websites with smooth user experiences, and I'm passionate about creating high-quality web applications. 
    In addition to my technical skills, I have extensive knowledge of web services and am always eager to learn about the latest trends and technologies in the field.
    Whether you need help building a new website from scratch or optimizing an existing one, I'm ready to help bring your vision to life.
    I am a skilled front-end developer with a strong background in web development.
    He has expertise in React, JavaScript, Python, Java, MySQL, HTML, and CSS, along with a deep understanding of web services.
    I am a detail-oriented developer who takes pride in creating clean and efficient code. He is also a quick learner who is always eager to stay up-to-date with the latest web technologies and best practices. 
    In my free time, enjoys reading about new programming languages and technologies, as well as working on personal web development projects. He is also a fan of hiking and traveling, and enjoys exploring new places in his free time.  
    I am passionate about creating high-quality web experiences that engage and delight users. He believes in creating user-centric designs that are both aesthetically pleasing and functional. 
    With My strong technical skills and attention to detail, I am committed to delivering outstanding results for his clients.
    </p>
    </animated.div>
    <button className='btn' onClick={handleClick} > More About me</button>
    </div>
    
  </div>
  
  );
};

export default About;
