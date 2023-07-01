import React from "react";
import Title from "../../Core/Tittle";
import styles from "./contact.module.scss";

function Contact() {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.backdrop}></div>
      <div className={styles.content}>
        <Title first="Get in touch with" second="Me" />
        <p>
          Thank you to spend your time visiting my page! Please feel free to
          send me some messages.
        </p>
        <p>
          Hope that we can have a chance to work together
          <i class="fa fa-heart"></i>
        </p>

        <form className={styles.connect}>
          <input placeholder="Full name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <input placeholder="Message" />
          <button>Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
