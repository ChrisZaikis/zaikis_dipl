import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductContentBased = ({
  productId,
  name,
  price,
  images,
  rating,
  reviewsNumber,
}) => {
  return (
    <Card
      className="shadow p-3 mb-5 bg-white rounded"
      style={{ marginTop: "10px", marginBottom: "20px" }}
    >
      <Row>
        <Col>
          <Card.Img
            className="shadow p-3 mb-5 bg-white rounded"
            crossOrigin="anonymous"
            variant="top"
            src={images[0] ? images[0].path : ""}
          />
        </Col>
        <Col>
          <Card.Body className="mb-2">
            <h4 className="mb-4 text-black">{name}</h4>
            <div className="mb-3 text-black">
              <Rating readonly size={20} initialValue={rating} /> (
              {reviewsNumber})
            </div>
            <div className="h4 text-black mb-3">
              €{price}.00{" "}
              <LinkContainer to={`/product-details/${productId}`}>
                <Button variant="warning shadow border-danger">
                  Δες το Προϊόν
                </Button>
              </LinkContainer>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductContentBased;
