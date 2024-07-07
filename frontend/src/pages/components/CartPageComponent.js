import {
  Container,
  Row,
  Col,
  Alert,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";
import ProductTopSalesComponent from "../../components/ProductTopSalesComponent";
import { useEffect, useState } from "react";
import "../../scss/button.scss";

const CartPageComponent = ({
  addToCart,
  removeFromCart,
  cartItems,
  cartSubtotal,
  reduxDispatch,
  getTopsales,
}) => {
  const changeCount = (productID, count) => {
    reduxDispatch(addToCart(productID, count));
  };

  const removeFromCartHandler = (productID, quantity, price) => {
    if (window.confirm("Είσαι σίγουρος?")) {
      reduxDispatch(removeFromCart(productID, quantity, price));
    }
  };
  const [topSales, setTopsales] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getTopsales()
      .then((data) => {
        setTopsales(data);
      })
      .catch((er) => {
        setError(
          er.response.data.message ? er.response.data.message : er.response.data
        );
        console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        );
      });
  }, [getTopsales]);

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Alert variant="info">Το καλάθι σας είναι άδειο</Alert>
          ) : (
            <ListGroup className="shadow p-3 mb-5 bg-white rounded">
              <h3>Καλάθι αγορών</h3>
              {cartItems.map((item, idx) => (
                <CartItemComponent
                  item={item}
                  key={idx}
                  changeCount={changeCount}
                  removeFromCartHandler={removeFromCartHandler}
                />
              ))}
            </ListGroup>
          )}
        </Col>

        <Col md={4}>
          <ListGroup className="shadow p-3 mb-5 bg-white rounded">
            <ListGroup.Item>
              <h3>
                Μερικό Σύνολο ({cartItems.length}{" "}
                {cartItems.length === 1 ? "Προϊόν" : "Προϊόντα"})
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Τιμή: <span className="fw-bold ">€{cartSubtotal}.00</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to="/user/cart-details">
                <button
                  className="button-77"
                  disabled={cartSubtotal === 0}
                  type="button"
                >
                  Προχωρήστε στο Ταμείο
                </button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* <Col xxl={6} size={50}>
          <ListGroup.Item>
            <div className="maylike-products-wrapper">
              <h2 className="text-center fs-3">
                Προϊόντα Που Μπορεί να Σας Αρέσουν
              </h2>
              <div className="marquee">
                <div className="maylike-products-container"></div>
                <Card border="warning" style={{ width: "15rem" }}>
                  <Card.Img src="/images/tablets-category.png" />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text className="h4">
                      €{price}
                      <LinkContainer to={"/product-list/category/Computers"}>
                        <Button
                          type="submit"
                          className="mb-3 mt-3 ms-2 rounded-pill shadow"
                          variant="warning shadow border-danger"
                        >
                          Δες το Προϊόν
                        </Button>
                      </LinkContainer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </ListGroup.Item>
        </Col> */}
        <Container>
          <Card.Body>
            <ProductTopSalesComponent topSales={topSales} />
          </Card.Body>
        </Container>
      </Row>
      {error}
    </Container>
  );
};

export default CartPageComponent;
