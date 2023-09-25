import React from "react";
import Card from "../../Core/Card";
import Title from "../../Core/Tittle";
import styles from "./resume.module.scss";
import cls from "classnames";
import useMounted from "../../Hooks/useMounted";

function Resume() {
  const { myRef, isMounted } = useMounted();

  return (
    <div ref={myRef} className={styles.container} id="resume">
      {isMounted && (
        <div className={styles.content}>
          <Title first="My" second="Resume" />

          <div className={styles.coverDetails}>
            <h1 className={styles.experience}>EXPERIENCE</h1>
            <h1 className={styles.education}>EDUCATION</h1>
            <div className={cls(styles.details, styles.card1)}>
              <Card
                className={styles.itemCard}
                topic="Eijiko Kindergarten"
                date="October 2019 - July 2020"
                content={
                  <ul>
                    <li>Teaching toddlers grade</li>
                  </ul>
                }
              />
              <Card
                className={styles.itemCard}
                topic="Sai Gon University"
                date="September 2016 - September 2020"
                content={
                  <ul>
                    <li>Education</li>
                    <li>Grade: Good</li>
                  </ul>
                }
              />
            </div>
            <div className={cls(styles.details, styles.card2)}>
              <Card
                className={styles.itemCard}
                topic="Maple Bear Kindergarten"
                date="November 2020 - July 2022"
                content={
                  <ul>
                    <li>Teaching junior grade</li>
                  </ul>
                }
              />
              <Card
                className={styles.itemCard}
                topic="HCMC University of Education"
                date="November 2021 - September 2023"
                content={
                  <ul>
                    <li>Education</li>
                    <li>Grade: Good</li>
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resume;
