import React, { useEffect } from "react";
import styles from "./modal.module.scss";

function Modal({ children, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Modal;
