import { MdDesignServices } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiShieldStarFill } from "react-icons/ri";
import { FaEarthAsia } from "react-icons/fa6";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
function ExpertiseComponent() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <section id="expertise" className="expertise bg-white py-5 my-6">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
              <h5>
                <span className="badge bg-primary rounded-0 text-uppercase">
                  Εξειδικευση
                </span>
              </h5>
              <h2 className="fw-bold">Ισχυρά σημεία τεχνογνωσίας</h2>
              <p>
                Είμαστε υπερήφανοι για την τεχνογνωσία μας. Με πολυετή εμπειρία
                και μια αφοσιωμένη ομάδα, παρέχουμε εξαιρετικές λύσεις
                προσαρμοσμένες στις ανάγκες σας. Τα δυνατά μας σημεία
                περιλαμβάνουν
              </p>
            </div>
          </div>

          <motion.div
            className="row"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={isInView && "animate"}
          >
            <div className="col-md-3">
              <div className="card bg-transparent border-0 text-center mb-3">
                <div className="card-image">
                  <i className="text-primary"></i>
                  <RiShieldStarFill className="fs-1" color="Tomato" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">887+ brands</h4>
                  <p>30.000+ προϊόντα</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-transparent border-0 text-center mb-3">
                <div className="card-image">
                  <i className="fas fa-desktop fa-5x text-primary"></i>
                  <MdDesignServices className="fs-1" color="Tomato" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Ολοκληρωμένες λύσεις</h4>
                  <p>ιδέες & προτάσεις για σένα.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-transparent border-0 text-center mb-3">
                <div className="card-image">
                  <i className="fas fa-wifi fa-5x text-primary"></i>
                  <MdMiscellaneousServices className="fs-1" color="Tomato" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Τεχνική Υποστήριξη</h4>
                  <p>Total Support, για όποτε το χρειαστείς.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card bg-transparent border-0 text-center mb-3">
                <div className="card-image">
                  <i className="fas fa-cog fa-5x text-primary"></i>
                  <FaEarthAsia className="fs-1" color="Tomato" />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Πράσινες πρωτοβουλίες</h4>
                  <p>για έναν καλύτερο κόσμο</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ExpertiseComponent;
