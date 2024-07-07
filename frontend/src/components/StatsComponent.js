import { FaRegSmile } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsExclamationTriangle } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: 0,
    y: 200,
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
function StatsComponent() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      const increment = target / 4000;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });

  // Event Listeners
  document.addEventListener("DOMContentLoaded", StatsComponent);
  return (
    <motion.div
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <div className="row video-points px-6 mt-5"></div>{" "}
      <div id="stats" className="stats container">
        <div className="row my-6">
          <div className="col-md-3 col-sm-6 text-center">
            <h2 className="counter xl-text fs-1 text-success" data-target="328">
              328
            </h2>
            <FaRegSmile color="green" className="fs-1" />
            <p className="text-success">Eυχαριστημενοι Πελατες</p>
          </div>

          <div className="col-md-3 col-sm-6 text-center">
            <h2 className="counter xl-text text-success fs-1" data-target="285">
              285
            </h2>
            <IoShieldCheckmarkOutline color="green" className="fs-1" />
            <p className="text-success">Ζητήματα Που Λύθηκαν</p>
          </div>

          <div class="col-md-3 col-sm-6 text-center">
            <h2
              className="counter xl-text text-success fs-1 "
              data-target="159"
            >
              159
            </h2>
            <AiOutlineLike color="green" className="fs-1" />
            <p className="text-success">Καλές κριτικές</p>
          </div>

          <div class="col-md-3 col-sm-6 text-center">
            <h2 className="counter xl-text fs-1 text-success" data-target="128">
              128
            </h2>
            <BsExclamationTriangle color="green" className="fs-1" />
            <p className="text-success">Εξέταση Συγκεκριμένων Περιπτώσεων</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default StatsComponent;
