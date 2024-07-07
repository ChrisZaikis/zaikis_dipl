import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../../components/CartItemComponent";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import "../../../scss/button.scss";

const UserCartDetailsPageComponent = ({
  cartItems,
  itemsCount,
  cartSubtotal,
  userInfo,
  addToCart,
  removeFromCart,
  reduxDispatch,
  getUser,
  createOrder,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [userAddress, setUserAddress] = useState(false);
  const [missingAddress, setMissingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const navigate = useNavigate();

  const changeCount = (productID, count) => {
    reduxDispatch(addToCart(productID, count));
  };

  const removeFromCartHandler = (productID, quantity, price) => {
    if (window.confirm("Είσαι σίγουρος?")) {
      reduxDispatch(removeFromCart(productID, quantity, price));
    }
  };

  useEffect(() => {
    getUser()
      .then((data) => {
        if (
          !data.address ||
          !data.city ||
          !data.country ||
          !data.zipCode ||
          !data.state ||
          !data.phoneNumber
        ) {
          setButtonDisabled(true);
          setMissingAddress(
            " .Για να κάνετε παραγγελία συμπληρώστε το προφίλ σας με σωστή διεύθυνση, πόλη κ.λπ."
          );
        } else {
          setUserAddress({
            address: data.address,
            city: data.city,
            country: data.country,
            zipCode: data.zipCode,
            state: data.state,
            phoneNumber: data.phoneNumber,
          });
          setMissingAddress(false);
        }
      })
      .catch((er) =>
        console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        )
      );
  }, [userInfo._id]);

  const orderHandler = () => {
    const orderData = {
      orderTotal: {
        itemsCount: itemsCount,
        cartSubtotal: cartSubtotal,
      },
      cartItems: cartItems.map((item) => {
        return {
          productID: item.productID,
          name: item.name,
          price: item.price,
          image: { path: item.image ? item.image.path ?? null : null },
          quantity: item.quantity,
          count: item.count,
        };
      }),
      paymentMethod: paymentMethod,
    };
    createOrder(orderData)
      .then((data) => {
        if (data) {
          navigate("/user/order-details/" + data._id);
        }
      })
      .catch((err) => console.log(err));
  };

  const choosePayment = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Στοιχεία Καλαθιού</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Αποστολή</h2>
              <b>Όνομα</b>: {userInfo.name} {userInfo.lastName} <br />
              <b>Διεύθυνση</b>: {userAddress.address} {userAddress.city}{" "}
              {userAddress.state} {userAddress.zipCode} <br />
              <b>Τηλέφωνο</b>: {userAddress.phoneNumber}
            </Col>
            <Col md={6}>
              <h2>Μέθοδος πληρωμής</h2>
              <Form.Select onChange={choosePayment}>
                <option value="PayPal">PayPal</option>
                <option value="ΑΝΤΙΚΑΤΑΒΟΛΗ">
                  Αντικαταβολή (η παράδοση ενδέχεται να καθυστερήσει)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Δεν έχει παραδωθεί
                  {missingAddress}
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Δεν έχει πληρωθεί ακόμα
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Παραγγείλατε είδη</h2>
          <ListGroup className="shadow p-3 mb-5  rounded">
            {cartItems.map((item, idx) => (
              <CartItemComponent
                item={item}
                key={idx}
                removeFromCartHandler={removeFromCartHandler}
                changeCount={changeCount}
              />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup className="shadow p-3 mb-5 bg-white rounded">
            <ListGroup.Item>
              <h3>Περίληψη παραγγελίας</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Αξία προϊόντων / υπηρεσιών :{" "}
              <span className="fw-bold">€{cartSubtotal}.00</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Κόστος Μεταφορικών: <span className="fw-bold">ΔΩΡΕΑΝ</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Σύνολο ΦΠΑ (24%): <span className="fw-bold"> Περιλαμβάνεται</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Σύνολο: <span className="fw-bold">€{cartSubtotal}.00</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <buton
                  className="button-77"
                  onClick={orderHandler}
                  type="button"
                  disabled={buttonDisabled}
                >
                  Παραγγέλνω
                </buton>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCartDetailsPageComponent;
