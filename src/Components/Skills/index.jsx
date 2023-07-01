import React, { useState } from "react";
import Title from "../../Core/Tittle";
import styles from "./skills.module.scss";
import { Animate, AnimateGroup } from "react-simple-animate";
import useMounted from "../../Hooks/useMounted";
function Skills() {
  const [animationSlide, setAnimationSlide] = useState({
    slide1: false,
    slide2: false,
    slide3: false,
    slide4: false,
    slide5: false,
    slide6: false,
    slide7: false,
  });

  const { myRef, isMounted } = useMounted();
  const onHover = (slide) => {
    const newSlide = "slide" + slide; // "slide1"
    setAnimationSlide({
      ...animationSlide,
      [newSlide]: true,
    });
  };

  return (
    <div ref={myRef} className={styles.container} id="skills">
      <div className={styles.content}>
        <Title first="My" second="Skills" />
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-12">
            <ul className={isMounted ? styles.listSkill : ""}>
              <li className={styles.perSkill} onMouseEnter={() => onHover(1)}>
                <span className={styles.unitSkill}>HTML/CSS</span>
                <AnimateGroup play={animationSlide.slide1}>
                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={0}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>
                      <img src="/image/html5.svg" alt="#" />
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={1}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>
                      <img src="/image/css-3.svg" alt="#" />
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={2}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>
                      <img src="/image/sass-1.svg" alt="#" />
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={3}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>
                      <img src="/image/materialize.svg" alt="#" />
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={4}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>
                      <img src="/image/bootstrap-4.svg" alt="#" />
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={5}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>Responsive</span>
                  </Animate>
                </AnimateGroup>
              </li>

              <li className={styles.perSkill} onMouseEnter={() => onHover(2)}>
                <span className={styles.unitSkill}>Javascript</span>
                <AnimateGroup play={animationSlide.slide2}>
                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={0}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>ES5/ES6</span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={1}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>
                      <img
                        src="/image/jquery-1.svg"
                        alt="#"
                        width="75px"
                        height="75px"
                      />
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={2}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>AJAX</span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={3}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>RESTful API</span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={4}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>AXIOS</span>
                  </Animate>
                </AnimateGroup>
              </li>

              <li className={styles.perSkill} onMouseEnter={() => onHover(3)}>
                <span className={styles.unitSkill}>React</span>
                <AnimateGroup play={animationSlide.slide3}>
                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={0}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill}>Router</span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={1}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill}>Redux</span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={2}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill}>React Hooks</span>
                  </Animate>
                </AnimateGroup>
              </li>

              <li className={styles.perSkill} onMouseEnter={() => onHover(4)}>
                <span className={styles.unitSkill}>Git</span>

                <AnimateGroup play={animationSlide.slide4}>
                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={0}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill}>Git Flow</span>
                  </Animate>
                </AnimateGroup>
              </li>

              <li className={styles.perSkill} onMouseEnter={() => onHover(5)}>
                <span className={styles.unitSkill}>Knowledge base</span>

                <AnimateGroup play={animationSlide.slide5}>
                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={0}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill}>OOP</span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={1}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill}>Algorithms</span>
                  </Animate>
                </AnimateGroup>
              </li>

              <li className={styles.perSkill} onMouseEnter={() => onHover(6)}>
                <span className={styles.unitSkill}>Soft Skill</span>

                <AnimateGroup play={animationSlide.slide6}>
                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={0}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill}>Teamwork</span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={1}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill}>Self Study</span>
                  </Animate>
                </AnimateGroup>
              </li>

              <li className={styles.perSkill} onMouseEnter={() => onHover(7)}>
                <span className={styles.unitSkill}>Language</span>

                <AnimateGroup play={animationSlide.slide7}>
                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={0}
                    duration={0.5}
                  >
                    <span
                      className={styles.itemSkill}
                      style={{ width: "250px" }}
                    >
                      Communicating (Intermediate)
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={2}
                    duration={0.5}
                  >
                    <span
                      className={styles.itemSkill}
                      style={{ width: "200px" }}
                    >
                      Reading documents
                    </span>
                  </Animate>
                </AnimateGroup>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
