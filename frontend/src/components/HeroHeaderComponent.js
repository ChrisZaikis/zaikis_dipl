import "../scss/styles.scss";
import "../index.css";
import "../scss/scrolmg.scss";
import MyImage from "../images/hero.png";
import ScrollImage from "../images/scroll.png";
import { Row, Col } from "react-bootstrap";
// import "../css/bootstrap.css";
// import Img from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
const Page = ({ children }) => {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
function HeroHeaderComponent() {
  const textToAnimate =
    "Στο Κατάστημα μας θα βρείτε προϊόντα Τεχνολογίας, βιβλία και ταινίες προβολής μην  διστάσετε για οποιαδήποτε απορία σας να μιλήσετε με έναν εκπρόσωπο μας στο online Chat.";
  const myStyle = {
    fill: "#f3f6f9",
  };
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const AnimatedText = ({ text }) => {
    return (
      <div>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            custom={index}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <header className="header ">
      <div className="hero text-white pt-7">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-4">
              <div className="image-container mb-5 px-0">
                <motion.img
                  initial={{ y: -50 }}
                  animate={{ y: 20 }}
                  transition={{
                    type: "smooth",
                    repeatType: "mirror",
                    duration: 2,
                  }}
                  src={MyImage}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <Row className="col-md-6">
              <Col className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5">
                <AnimatePresence exitBeforeEnter>
                  <Page key="page">
                    <motion.h1
                      className="display-3 fw-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 3.2 }}
                      whileHover={{ color: "gray" }}
                    >
                      Καλωσήρθατε στο Κατάστημα μας
                    </motion.h1>
                  </Page>
                </AnimatePresence>
                <div>
                  <AnimatedText text={textToAnimate} />
                </div>

                <motion.img
                  src={ScrollImage}
                  variants={fadeInAnimationVariants}
                  animate="scrollButton"
                  className="img mt-4"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <svg
        className="frame-decoration"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 192.275"
      >
        <defs>
          <path className="cls-2" style={myStyle} />
        </defs>
        <title>frame-decoration</title>
        <path
          className="cls-2"
          d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
          transform="translate(0 -158.755)"
        />
      </svg>
    </header>
  );
}

export default HeroHeaderComponent;
