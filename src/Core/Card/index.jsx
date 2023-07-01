import React from "react";
import styles from "./card.module.scss";
import cls from "classnames";

function Card({ topic, date, content, className }) {
  return (
    <div className={cls("row", styles.container, className)}>
      <div className={cls("col-12", styles.details)}>
        <h3>{topic}</h3>
        <h4>{date}</h4>
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Card;
