import React from "react";
import Title from "../../Core/Tittle";
import styles from "./about.module.scss";
import cls from "classnames";
import useMounted from "../../Hooks/useMounted";

function About() {
  const { myRef, isMounted } = useMounted();

  return (
    <>
      <div ref={myRef} className={styles.container} id="about">
        {isMounted && (
          <>
            <div className={styles.backdrop}></div>
            <div className={styles.content}>
              <Title first="About" second="me" />

              <div className={styles.details}>
                <div className={styles.infor}>
                  <div className={styles.left}>
                    <img src="/image/vivian.jpg" alt="#" />
                  </div>

                  <div className={styles.right}>
                    <ul className={styles.listStyles}>
                      <li className={cls(styles.itemStyles, styles.infor1)}>
                        <p>
                          <span>
                            <i class="fa fa-user"></i>
                            Name:
                          </span>
                          <span>Ho Thi Thao Vy</span>
                        </p>
                      </li>
                      <li className={cls(styles.itemStyles, styles.infor2)}>
                        <p>
                          <span>
                            <i class="fa fa-map-marker-alt"></i>
                            Address:
                          </span>
                          <span>Ho Chi Minh City</span>
                        </p>
                      </li>
                      <li className={cls(styles.itemStyles, styles.infor3)}>
                        <p>
                          <span>
                            <i class="fa fa-envelope"></i>
                            Email:
                          </span>
                          <span>vy.thao.239@gmail.com</span>
                        </p>
                      </li>
                      <li className={cls(styles.itemStyles, styles.infor4)}>
                        <p>
                          <span>
                            <i class="fa fa-mobile-alt"></i>
                            Phone:
                          </span>
                          <span>+84 984634825</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default About;
