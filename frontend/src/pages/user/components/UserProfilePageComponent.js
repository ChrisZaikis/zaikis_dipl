import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

const UserProfilePageComponent = ({
  updateUserApiRequest,
  fetchUser,
  userInfoFromRedux,
  setReduxUserState,
  reduxDispatch,
  localStorage,
  sessionStorage,
}) => {
  const [validated, setValidated] = useState(false);
  const [updateUserResponseState, setUpdateUserResponseState] = useState({
    success: "",
    error: "",
  });
  const [passwordsMatchState, setPasswordsMatchState] = useState(true);
  const [user, setUser] = useState({});
  const userInfo = userInfoFromRedux;

  useEffect(() => {
    fetchUser(userInfo._id)
      .then((data) => setUser(data))
      .catch((er) => console.log(er));
  }, [userInfo._id]);

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

    const name = form.name.value;
    const lastName = form.lastName.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form.address.value;
    const country = form.country.value;
    const zipCode = form.zipCode.value;
    const city = form.city.value;
    const state = form.state.value;
    const password = form.password.value;

    if (
      event.currentTarget.checkValidity() === true &&
      form.password.value === form.confirmPassword.value
    ) {
      updateUserApiRequest(
        name,
        lastName,
        phoneNumber,
        address,
        country,
        zipCode,
        city,
        state,
        password
      )
        .then((data) => {
          setUpdateUserResponseState({ success: data.success, error: "" });
          reduxDispatch(
            setReduxUserState({
              doNotLogout: userInfo.doNotLogout,
              ...data.userUpdated,
            })
          );
          if (userInfo.doNotLogout)
            localStorage.setItem(
              "userInfo",
              JSON.stringify({ doNotLogout: true, ...data.userUpdated })
            );
          else
            sessionStorage.setItem(
              "userInfo",
              JSON.stringify({ doNotLogout: false, ...data.userUpdated })
            );
        })
        .catch((er) =>
          setUpdateUserResponseState({
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
        <Col md={9}>
          <h1>Αλλάξτε το προφίλ σας</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Όνομα*</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue={user.name}
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Εισαγάγετε ένα όνομα
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Επώνημο*</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue={user.lastName}
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Παρακαλώ εισάγετε το Επώνυμό σας
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Διεύθυση Email* </Form.Label>
              <Form.Control
                disabled
                value={
                  user.email +
                  "   Εάν θέλετε να αλλάξετε το email, αφαιρέστε λογαριασμό και δημιουργήστε νέο με νέα διεύθυνση email"
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Τηλεφωνο*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Πληκτρολόγησε τον αριθμό του τηλεφώνου σου"
                defaultValue={user.phoneNumber}
                name="phoneNumber"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Διεύθυνση*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Εισαγάγετε το όνομα της οδού και τον αριθμό του σπιτιού σας"
                defaultValue={user.address}
                name="address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Χώρα*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Εισαγάγετε τη χώρα σας"
                defaultValue={user.country}
                name="country"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicZip">
              <Form.Label>Ταχυδρομικός Κώδικας*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Εισαγάγετε τον ταχυδρομικό σας κώδικα"
                defaultValue={user.zipCode}
                name="zipCode"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>Πόλη*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Εισαγάγετε την Πόλη σας"
                defaultValue={user.city}
                name="city"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label>Περιφέρεια*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Εισαγάγετε την Περιφέρεια σας"
                defaultValue={user.state}
                name="state"
              />
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
              <Form.Label>Επαναλάβετε τον Κωδικό πρόσβασης*</Form.Label>
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

            <Button variant="warning shadow border-danger" type="submit">
              Ενημέρωση
            </Button>
            <Alert
              show={
                updateUserResponseState && updateUserResponseState.error !== ""
              }
              variant="danger"
            >
              Κάτι πήγε στραβά
            </Alert>
            <Alert
              show={
                updateUserResponseState &&
                updateUserResponseState.success === "user updated"
              }
              variant="info"
            >
              Ο Χρήστης Ενημερώθηκε
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePageComponent;
