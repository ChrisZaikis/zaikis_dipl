import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";
import "../scss/button.scss";

const ProductForListComponent = ({
  productId,
  name,
  description,
  price,
  images,
  rating,
  reviewsNumber,
}) => {
  return (
    <Card
      className="shadow p-3 mb-4 bg-white rounded"
      style={{ marginTop: "30px", marginBottom: "50px" }}
    >
      <Row>
        <Col lg={3}>
          <Card.Img
            className="shadow p-3 mb-5 bg-white rounded"
            crossOrigin="anonymous"
            variant="top"
            src={images[0] ? images[0].path : ""}
          />
        </Col>
        <Col lg={7}>
          <Card.Body className="mb-2">
            <h4 className="mb-4">{name}</h4>
            <div className="mb-3">{description}</div>
            <div className="mb-3">
              <Rating readonly size={20} initialValue={rating} /> (
              {reviewsNumber}) Αξιολογήσεις
            </div>
            <div className="h4 mb-3">
              €{price}.00{" "}
              <LinkContainer to={`/product-details/${productId}`}>
                <button className="button-77  ">Δες το Προϊόν</button>
              </LinkContainer>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
