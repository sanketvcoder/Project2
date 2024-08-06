import React, { useState } from 'react';
import styles from './Main.module.css';
import Button from '../Button/Button'; // Ensure you have this Button component

export default function Main() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [showInfo, setShowInfo] = useState(false); // New state variable

  const onSubmit = (e) => {
    e.preventDefault();
    setShowInfo(true); // Set the state to true on submit
  };

  const clearFields = () => {
    setName("");
    setEmail("");
    setText("");
    setShowInfo(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" />
          <Button text="VIA CALL" />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              rows="8"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>

        {showInfo && (
          <div>
            {`${name} ${email} ${text}`}
            <Button text="CLEAR" onClick={clearFields} /> {/* Button to clear the fields */}
          </div>
        )}
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
}
