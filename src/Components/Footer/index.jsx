import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./footer.module.scss";

function Footer() {
  const [toggleBackToTop, setToggleBackToTop] = useState(false);
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 1000 && !toggleBackToTop) {
          setToggleBackToTop(true);
        } else if (window.scrollY < 1000) {
          setToggleBackToTop(false);
        }
      },
      []
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>© Copyright 2023 by Ho Thi Thao Vy</p>

        {toggleBackToTop && (
          <div className={styles.iconStyle} onClick={handleBackToTop}>
            <i class="fa fa-angle-up"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
