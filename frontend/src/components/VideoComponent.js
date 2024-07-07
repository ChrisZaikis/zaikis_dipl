import MyImage from "../images/video-preview.jpg";
import "../scss/styless.scss";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: 1,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
function VideoComponent() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <section className="App">
      <div className="row video-points px-6 mt-5"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <div className="position-relative">
              <div onClick={openModal}>
                <img src={MyImage} alt="" className="img-fluid" />
                {modal ? (
                  <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content" modal={modal}>
                        <IoCloseOutline
                          className="modal__close"
                          arial-label="Close modal"
                          onClick={setModal}
                        />
                        <div className="modal__video-align">
                          {videoLoading ? (
                            <div className="modal__spinner">
                              <BiLoaderAlt
                                className="modal__spinner-style"
                                fadeIn="none"
                              />
                            </div>
                          ) : null}
                          <iframe
                            className="modal__video-style"
                            onLoad={spinner}
                            loading="lazy"
                            width="800"
                            height="500"
                            src="https://www.youtube.com/embed/ohLIv6ElGk4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
                <div>
                  <span className="video-play-button">
                    <span />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="row video-points px-6 mt-5"
          variants={variants}
          initial="initial"
          ref={ref}
          animate={isInView && "animate"}
        >
          <div className="col-lg-4">
            <h4 className="fw-bold text-primary ">10 Χρόνια Εμπειρίας</h4>
            <p className="text-secondary">
              Με περισσότερα από 10 χρόνια εμπειρίας, έχουμε αποκτήσει πολύτιμες
              γνώσεις και τεχνογνωσία για την παροχή λύσεων υψηλής ποιότητας
            </p>
          </div>
          <div className="col-lg-4">
            <h4 className="fw-bold text-primary">Διαρκείς Συνεργασίες</h4>
            <p className="text-secondary">
              Πιστεύουμε στη δημιουργία διαρκών συνεργασιών με τους πελάτες μας.
              Εμείς δημιουργούν μακροχρόνιες σχέσεις βασισμένες στην εμπιστοσύνη
            </p>
          </div>
          <div className="col-lg-4">
            <h4 className="fw-bold text-primary">Ικανοποιημένη ομάδα</h4>
            <p className="text-secondary">
              Η ομάδα μας αποτελείται από εξειδικευμένους και ικανούς
              επαγγελματίες που είναι παθιασμένει με την παροχή αριστείας
            </p>
          </div>
          <div className="row video-points px-6 mt-5"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoComponent;
