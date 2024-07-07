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
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

const UserOrderDetailsPageComponent = ({
  userInfo,
  getUser,
  getOrder,
  loadPayPalScript,
}) => {
  const [userAddress, setUserAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [isDelivered, setIsDelivered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const paypalContainer = useRef();

  const { id } = useParams();

  useEffect(() => {
    getUser()
      .then((data) => {
        setUserAddress({
          address: data.address,
          city: data.city,
          country: data.country,
          zipCode: data.zipCode,
          state: data.state,
          phoneNumber: data.phoneNumber,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getOrder(id)
      .then((data) => {
        setPaymentMethod(data.paymentMethod);
        setCartItems(data.cartItems);
        setCartSubtotal(data.orderTotal.cartSubtotal);
        data.isDelivered
          ? setIsDelivered(data.deliveredAt)
          : setIsDelivered(false);
        data.isPaid ? setIsPaid(data.paidAt) : setIsPaid(false);
        if (data.isPaid) {
          setOrderButtonMessage("Η παραγγελία σας ολοκληρώθηκε");
          setButtonDisabled(true);
        } else {
          if (data.paymentMethod === "PayPal") {
            setOrderButtonMessage("Πληρώστε την παραγγελία σας");
          } else if (data.paymentMethod === "ΑΝΤΙΚΑΤΑΒΟΛΗ") {
            setButtonDisabled(true);
            setOrderButtonMessage(
              "Περιμένετε την παραγγελία σας. Πληρώνετε κατά την παράδοση"
            );
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const orderHandler = () => {
    setButtonDisabled(true);
    if (paymentMethod === "PayPal") {
      setOrderButtonMessage(
        "Για να πληρώσετε για την παραγγελία σας κάντε κλικ σε ένα από τα παρακάτω κουμπιά"
      );
      if (!isPaid) {
        loadPayPalScript(cartSubtotal, cartItems, id, updateStateAfterOrder);
      }
    } else {
      setOrderButtonMessage("Η παραγγελία σας έγινε. Ευχαριστώ");
    }
  };

  const updateStateAfterOrder = (paidAt) => {
    setOrderButtonMessage("Ευχαριστούμε για την πληρωμή σου!");
    setIsPaid(paidAt);
    setButtonDisabled(true);

    paypalContainer.current.style = "display: none";
  };

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
              <b>Διεύθυνση</b>: {userAddress.address} {userAddress.city}{" "}
              {userAddress.state} {userAddress.zipCode} <br />
              <b>Τηλέφωνο</b>: {userAddress.phoneNumber}
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
          <ListGroup className="shadow p-3 mb-5 bg-white rounded">
            {cartItems.map((item, idx) => (
              <CartItemComponent item={item} key={idx} orderCreated={true} />
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
                <Button
                  size="lg"
                  onClick={orderHandler}
                  variant="danger shadow"
                  type="button"
                  disabled={buttonDisabled}
                >
                  {orderButtonMessage}
                </Button>
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div ref={paypalContainer} id="paypal-container-element"></div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrderDetailsPageComponent;
