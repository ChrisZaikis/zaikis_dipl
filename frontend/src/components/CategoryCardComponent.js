import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../scss/button.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
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
const CategoryCardComponent = ({ category, idx }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <Card.Img
        className="image"
        crossOrigin="anonymous"
        variant="top"
        src={category.image ?? null}
      />

      <Card.Body className="p-2">
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>{category.description}</Card.Text>
        <LinkContainer to={`/product-list/category/${category.name}`}>
          <Button className="button-77 fs-6">
            {/* <Button variant="warning shadow border-danger"> */}
            Μεταβείτε στην Κατηγορία
          </Button>
        </LinkContainer>
      </Card.Body>
    </motion.div>
  );
};

export default CategoryCardComponent;
