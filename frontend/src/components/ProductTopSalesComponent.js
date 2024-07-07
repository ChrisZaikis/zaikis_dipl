import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import "../scss/button.scss";

const ProductTopSalesComponent = ({
  topSales,
  rating,
  reviewsNumber,
  productId,
  name,
  description,
  price,
}) => {
  const cursorP = {
    cursor: "pointer",
  };

  return topSales.length > 0 ? (
    <Row>
      <Col>
        <Card.Text className=" mb-5 text-secondary topsales">
          Συγκεντρώσαμε τα Top sale προϊόντα & στα παρουσιάζουμε. Αξίζουν την
          προσοχή σου!
        </Card.Text>
        <Container className="track">
          <Card.Body className="  product-detail-container">
            {topSales.map((item, idx) => (
              <Card
                className="product-card marquee border-warning shadow"
                key={idx}
              >
                <Card.Title className="maylike-products-container">
                  <Card.Img
                    className="product-image "
                    style={{
                      height: "130px",
                      width: "130px",
                    }}
                    src={item.images ? item.images[0].path : null}
                    alt="First slide"
                  />
                </Card.Title>
                <Carousel.Caption className="carousel-caption">
                  <LinkContainer
                    style={cursorP}
                    to={`/product-details/${item._id}`}
                  >
                    <Card.Text className="text-black mb-1">
                      {item.name}
                    </Card.Text>
                  </LinkContainer>
                  <Card.Body className="mb-2">
                    <Card.Text className="mb-1 text-black">
                      <Rating readonly size={20} initialValue={item.rating} /> (
                      {item.reviewsNumber})
                    </Card.Text>
                    <Card.Text className="h4 text-black mb-1">
                      €{item.price}.00 {""}
                      <LinkContainer to={`/product-details/${item._id}`}>
                        <Card.Title>
                          <Button className="button-77 p-2 fs-6 ">
                            Δες το Προϊόν
                          </Button>
                        </Card.Title>
                      </LinkContainer>
                    </Card.Text>
                  </Card.Body>
                </Carousel.Caption>
              </Card>
            ))}
          </Card.Body>
        </Container>
      </Col>
    </Row>
  ) : null;
};

export default ProductTopSalesComponent;
