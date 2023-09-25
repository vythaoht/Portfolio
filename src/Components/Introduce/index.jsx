import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMounted from "../../Hooks/useMounted";
import TextLooping from "../TextLooping";
import styles from "./introduce.module.scss";

function Introduce() {
  const [linkAppear, setLinkAppear] = useState(false);
  const { myRef, isMounted } = useMounted();

  const handleLinkAppear = () => {
    setLinkAppear(!linkAppear);
  };
  return (
    <div ref={myRef} className={styles.container}>
      {isMounted && (
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Welcome!</h2>
            <TextLooping title="I'm Ho Thi Thao Vy" ms={300} />
            <p>
              I'm passionate about teaching job and always keep concentrated on
              improving my self skills. I feel complete when I work with and
              talk about what I love to little angles.
            </p>
            <button>
              <a
                download
                href="https://drive.google.com/file/d/1b7BCGiUTXgaJWDEA50zNvQtNRZ6n1_71/view?usp=sharing"
                target="_blank"
              >
                <i class="fa fa-download"></i>
                DOWNLOAD CV
              </a>
            </button>
          </div>
          <div className={styles.right}>
            <div className={styles.right__content}>
              <div className={styles.circle}>
                <img src="/image/vi.png" alt="#" width="540px" height="530px" />
              </div>
              <div className={styles.links}>
                <div
                  className={classNames(
                    styles.social,
                    linkAppear ? styles.show : ""
                  )}
                >
                  <Link to="https://github.com/vythaoht" target="_blank">
                    <i class="fab fa-github"></i>
                  </Link>

                  <Link
                    to="https://www.linkedin.com/in/vy-thao-vivian-b45b40280/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </Link>

                  <Link to="https://www.facebook.com/vy.pi.507" target="_blank">
                    <i class="fab fa-facebook"></i>
                  </Link>
                </div>

                <div className={styles.clickToLink} onClick={handleLinkAppear}>
                  <i class="fa fa-link"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Introduce;
