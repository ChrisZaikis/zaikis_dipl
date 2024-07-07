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

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { logout } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import "../../../scss/button.scss";

const OrderDetailsPageComponent = ({ getOrder, markAsDelivered }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] = useState(
    "Επισήμανση όπως παραδόθηκε"
  );
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getOrder(id)
      .then((order) => {
        setUserInfo(order.user);
        setPaymentMethod(order.paymentMethod);
        order.isPaid ? setIsPaid(order.paidAt) : setIsPaid(false);
        order.isDelivered
          ? setIsDelivered(order.deliveredAt)
          : setIsDelivered(false);
        setCartSubtotal(order.orderTotal.cartSubtotal);
        if (order.isDelivered) {
          setOrderButtonMessage("Η παραγγελία ολοκληρώθηκε");
          setButtonDisabled(true);
        }
        setCartItems(order.cartItems);
      })
      .catch(
        (er) => dispatch(logout())
        // console.log(
        //   er.response.data.message ? er.response.data.message : er.response.data
        // )
      );
  }, [isDelivered, id]);
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Λεπτομέρειες Παραγγελίας</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Αποστολή</h2>
              <b>Όνομα</b>: {userInfo.name} {userInfo.lastName} <br />
              <b>Διεύθυνση</b>: {userInfo.address} {userInfo.city}{" "}
              {userInfo.state} {userInfo.zipCode} <br />
              <b>Τηλέφωνο</b>: {userInfo.phoneNumber}
            </Col>
            <Col md={6}>
              <h2>Μέθοδος πληρωμής</h2>
              <Form.Select value={paymentMethod} disabled={true}>
                <option value="PayPal">PayPal</option>
                <option value="ΑΝΤΙΚΑΤΑΒΟΛΗ">
                  Αντικαταβολή (η παράδοση ενδέχεται να καθυστερήσει)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert
                  className="mt-3"
                  variant={isDelivered ? "success" : "danger"}
                >
                  {isDelivered ? (
                    <>Παραδόθηκε στις {isDelivered}</>
                  ) : (
                    <>Δεν έχει παραδωθεί</>
                  )}
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant={isPaid ? "success" : "danger"}>
                  {isPaid ? (
                    <>Πληρώθηκε {isPaid}</>
                  ) : (
                    <>Δεν έχει πληρωθεί ακόμα</>
                  )}
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Παραγγείλατε είδη</h2>
          <ListGroup>
            {cartItems.map((item, idx) => (
              <CartItemComponent key={idx} item={item} orderCreated={true} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Περίληψη παραγγελίας</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Αξία προϊόντων / υπηρεσιών:{" "}
              <span className="fw-bold">€{cartSubtotal}.00</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Κόστος Mεταφορικών: <span className="fw-bold">ΔΩΡΕΑΝ</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Σύνολο ΦΠΑ(24%): <span className="fw-bold"> περιλαμβάνεται</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Σύνολο: <span className="fw-bold">€{cartSubtotal}.00</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <button
                  className="button-77"
                  size="lg"
                  onClick={() =>
                    markAsDelivered(id)
                      .then((res) => {
                        if (res) {
                          setIsDelivered(true);
                        }
                      })
                      .catch((er) =>
                        console.log(
                          er.response.data.message
                            ? er.response.data.message
                            : er.response.data
                        )
                      )
                  }
                  disabled={buttonDisabled}
                  variant="warning  border-danger"
                  type="button"
                >
                  {orderButtonMessage}
                </button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetailsPageComponent;
