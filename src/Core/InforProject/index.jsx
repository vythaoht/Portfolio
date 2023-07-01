import React from "react";
import styles from "./inforProject.module.scss";

function InforProject({ topic, desc, button1, button2 }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>{topic}</h3>
        <h4>Description: {desc}</h4>
        <ul>
          <li>Responsibility: Development</li>
          <li>
            Technology: ReactJS, Redux, Redux Thunk, Redux Persists, SCSS,
            Antd,...
          </li>
        </ul>
        <div className={styles.buttonStyle}>
          <button className={styles.itemStyle}> {button1}</button>
          <button className={styles.itemStyle}>{button2}</button>
        </div>
      </div>
    </div>
  );
}

export default InforProject;
