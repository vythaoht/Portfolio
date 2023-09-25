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
                <span className={styles.unitSkill}>Soft Skill</span>
                <AnimateGroup play={animationSlide.slide1}>
                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={3}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill1}>
                      Communication ability
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={3}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>Team work </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={3}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>Self Study </span>
                  </Animate>
                </AnimateGroup>
              </li>

              <li className={styles.perSkill} onMouseEnter={() => onHover(2)}>
                <span className={styles.unitSkill}>MS Office</span>
                <AnimateGroup play={animationSlide.slide2}>
                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={1}
                    duration={0.2}
                  >
                    <span className={styles.itemSkill}>
                      <img src="/image/word.png" alt="#" />
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={1}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill}>
                      <img src="/image/excel.png" alt="#" />
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={1}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill}>
                      <img src="/image/pwp.png" alt="#" />
                    </span>
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
                    <span className={styles.itemSkill2}>
                      Informatics certificate level A
                    </span>
                  </Animate>

                  <Animate
                    start={{ opacity: 0 }}
                    end={{ opacity: 1 }}
                    sequenceIndex={1}
                    duration={0.5}
                  >
                    <span className={styles.itemSkill2}>
                      English certificate level B
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
