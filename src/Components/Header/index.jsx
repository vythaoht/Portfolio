import classNames from "classnames";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

function Header() {
  const [changeToWhite, setChangeToWhite] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10 && !changeToWhite) {
        setChangeToWhite(true);
      } else if (window.scrollY < 10) {
        setChangeToWhite(false);
      }
    });
  }, []);

  return (
    <div
      className={classNames(
        styles.container,
        changeToWhite ? styles.whiteContainer : ""
      )}
    >
      <div className={styles.content}>
        <div className={styles.left}>
          <Link to="#">
            <i className="fa fa-candy-cane"></i>
          </Link>
        </div>

        <div className={styles.right}>
          <ul className={styles.unlist}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
