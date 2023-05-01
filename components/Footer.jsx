import React from 'react';
import styles from '../src/styles/Footer.module.css';
const Footer = () => {
    return (
    <footer className={styles.footer} > 
      <div className="container">
        <div className="row">
          <div className="col-md-6">
           <h3>MANIVANNAN</h3>
            <p>Unleashing The Power Of Web</p>
          </div>
          <div className="col-md-6">
            <h3>Contact Me</h3>
            <p>Email: manivannan0734@gmail.com</p>
            <p>Phone: +91 9345483471</p>
            <p>Github: Manivannan0734</p>
            <p>LinkedIn: Manivannan Pandian</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
