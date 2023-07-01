import React from "react";
import styles from "./title.module.scss";

function Title({ first, second }) {
  return (
    <h1 className={styles.title}>
      {first} <span>{second}</span>
    </h1>
  );
}

export default Title;
