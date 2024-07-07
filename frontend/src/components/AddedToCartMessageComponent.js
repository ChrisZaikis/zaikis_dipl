import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../scss/button.scss";

const AddedToCartMessageComponent = ({
  showCartMessage,
  setShowCartMessage,
}) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Alert
      show={showCartMessage}
      variant="success"
      onClose={() => setShowCartMessage(false)}
      dismissible
    >
      <Alert.Heading>Το προϊόν προστέθηκε στο καλάθι σας!</Alert.Heading>
      <p>
        <button className="button-77" onClick={goBack}>
          Πήγαινε πίσω
        </button>{" "}
        <Link to="/cart">
          <button className="button-77">Πηγαίνετε στο καλάθι</button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
