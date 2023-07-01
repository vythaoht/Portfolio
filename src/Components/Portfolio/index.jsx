import React, { useState } from "react";
import Title from "../../Core/Tittle";
import styles from "./portfolio.module.scss";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import InforProject from "../../Core/InforProject";
import { Link } from "react-router-dom";
import Modal from "../../Core/Modal";

function Portfolio() {
  const [showModal, setShowModal] = useState({
    isDisplay: false,
    element: <></>,
  });

  const handleModal = (element) => {
    setShowModal({
      isDisplay: true,
      element,
    });
  };

  const handleOnClose = () => {
    setShowModal({
      isDisplay: false,
      element: <></>,
    });
  };

  return (
    <div className={styles.container} id="portfolio">
      <Title first="My" second="Portfolio" />

      <div className={styles.content}>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.info}>
              <div className={styles.coverImg}>
                <img src="/image/vlearning.jpg" alt="#" />

                <div className={styles.overlay}>
                  <Link
                    to="#"
                    onClick={() =>
                      handleModal(
                        <iframe
                          width="800"
                          height="500"
                          src="https://www.youtube.com/embed/GIsFWOLxW20"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      )
                    }
                  >
                    <i class="fa fa-play-circle"></i>
                  </Link>
                </div>
              </div>

              <InforProject
                className={styles.inforProject}
                topic="V-LEARNING"
                desc="A website for finding and learning IT skills courses."
                button1={
                  <Link
                    to="https://github.com/vythaoht/vlearning-project-g2"
                    target="_blank"
                  >
                    Link Github
                  </Link>
                }
                button2={
                  <Link
                    to="https://vlearning-project-g2.vercel.app/"
                    target="_blank"
                  >
                    Link Demo
                  </Link>
                }
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.info}>
              <div className={styles.coverImg}>
                <img src="/image/movie.jpg" alt="#" height="500px" />

                <div className={styles.overlay}>
                  <Link
                    to="#"
                    onClick={() =>
                      handleModal(
                        <iframe
                          width="800"
                          height="500"
                          src="https://www.youtube.com/embed/-vs1ckrvlvY"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      )
                    }
                  >
                    <i class="fa fa-play-circle"></i>
                  </Link>
                </div>
              </div>

              <InforProject
                className={styles.inforProject}
                topic="BOOKING MOVIE"
                desc="A website for booking movie, see more information of the film is being shown at the cinema."
                button1={
                  <Link
                    to="https://github.com/LamPhuongZ/capstone-react-group7"
                    target="_blank"
                  >
                    Link Github
                  </Link>
                }
                button2={
                  <Link
                    to="https://capstone-react-group7.netlify.app/"
                    target="_blank"
                  >
                    Link Demo
                  </Link>
                }
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.info}>
              <div className={styles.coverImg}>
                <img src="/image/my.jpg" alt="#" />
              </div>

              <InforProject
                className={styles.inforProject}
                topic="MY PORTFOLIO"
                desc="My portfolio you can get my information and done my projects"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {showModal.isDisplay && (
        <Modal children={showModal.element} onClose={handleOnClose} />
      )}
    </div>
  );
}

export default Portfolio;
