import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const RegisterPageComponent = ({
  registerUserApiRequest,
  reduxDispatch,
  setReduxUserState,
}) => {
  const [validated, setValidated] = useState(false);
  const [registerUserResponseState, setRegisterUserResponseState] = useState({
    success: "",
    error: "",
    loading: false,
  });
  const [passwordsMatchState, setPasswordsMatchState] = useState(true);

  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const confirmPassword = document.querySelector(
      "input[name=confirmPassword]"
    );
    if (confirmPassword.value === password.value) {
      setPasswordsMatchState(true);
    } else {
      setPasswordsMatchState(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget.elements;
    const email = form.email.value;
    const name = form.name.value;
    const lastName = form.lastName.value;
    const password = form.password.value;
    if (
      event.currentTarget.checkValidity() === true &&
      email &&
      password &&
      name &&
      lastName &&
      form.password.value === form.confirmPassword.value
    ) {
      setRegisterUserResponseState({ loading: true });
      registerUserApiRequest(name, lastName, email, password)
        .then((data) => {
          setRegisterUserResponseState({
            success: data.success,
            loading: false,
          });
          reduxDispatch(setReduxUserState(data.userCreated));
        })
        .catch((er) =>
          setRegisterUserResponseState({
            error: er.response.data.message
              ? er.response.data.message
              : er.response.data,
          })
        );
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Εγγραφή</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Όνομα*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="
                Εισάγετε το όνομά σας"
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Εισαγάγετε ένα Όνομα
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Επώνυμο*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="
                Εισαγάγετε το επώνυμό σας"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Παρακαλώ εισάγετε το επώνυμό σας
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Διεύθυνση Email*</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="email"
              />
              <Form.Control.Feedback type="invalid">
                Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Κωδικός πρόσβασης*</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Κωδικός πρόσβασης"
                minLength={6}
                onChange={onChange}
                isInvalid={!passwordsMatchState}
              />
              <Form.Control.Feedback type="invalid">
                Παρακαλώ εισάγετε έναν έγκυρο κωδικό πρόσβασης
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Ο κωδικός πρόσβασης πρέπει να έχει τουλάχιστον 6 χαρακτήρες
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Επαναλάβετε τον κωδικό πρόσβασης*</Form.Label>
              <Form.Control
                name="confirmPassword"
                required
                type="password"
                placeholder="Επαναλάβετε τον κωδικό πρόσβασης"
                minLength={6}
                onChange={onChange}
                isInvalid={!passwordsMatchState}
              />
              <Form.Control.Feedback type="invalid">
                Και οι δύο κωδικοί πρέπει να ταιριάζουν
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="pb-2">
              <Col>
                Έχετε ήδη λογαριασμό;
                <Link to={"/login"}>Σύνδεση</Link>
              </Col>
            </Row>

            <button
              className="button-77"
              type="submit"
              variant="warning shadow border-danger"
            >
              {registerUserResponseState &&
              registerUserResponseState.loading === true ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                ""
              )}
              Υποβάλλω
            </button>
            <Alert
              show={
                registerUserResponseState &&
                registerUserResponseState.error === "user exists"
              }
              variant="danger"
            >
              Ο χρήστης με αυτό το email υπάρχει ήδη!
            </Alert>
            <Alert
              show={
                registerUserResponseState &&
                registerUserResponseState.success === "User created"
              }
              variant="info"
            >
              Ο χρήστης δημιουργήθηκε
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPageComponent;
