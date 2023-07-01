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
                topic="Cybersoft - Cyberlearn Programing Education Center"
                date="November 2022 - June 2023"
                content={
                  <ul>
                    <li>Internship</li>
                  </ul>
                }
              />
              <Card
                className={styles.itemCard}
                topic="Cybersoft - Cyberlearn Programing Education Center"
                date="November 2022 - June 2023"
                content={
                  <ul>
                    <li>
                      Front-end Foundation course: Basic knowledge of HTML5,
                      CSS3, Bootstrap 4, SASS/SCSS, Javascript (ES5/ES6),
                      Jquery, AJAX, Git, ...
                    </li>
                    <li>Grade: Good</li>
                  </ul>
                }
              />
            </div>
            <div className={cls(styles.details, styles.card2)}>
              <Card
                className={styles.itemCard}
                topic="Personal Projects"
                date="June 2023 - Present"
                content={
                  <ul>
                    <li>
                      Learning and practicing with many Front-end projects
                    </li>
                    <li>
                      Working on my own projects with learned Front-end skills
                    </li>
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Resume;
