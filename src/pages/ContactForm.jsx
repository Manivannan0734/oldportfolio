import React from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        method="post"
        action="mailto:your_email_address_here@example.com"
      >
        <label htmlFor="message" className={styles.label}>
          Write your message:
        </label>
        <textarea id="message" name="message" className={styles.input}></textarea>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
