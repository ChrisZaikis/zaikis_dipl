import { Button } from "react-bootstrap";

const RemoveFromCartComponent = ({
  productID,
  orderCreated,
  quantity,
  price,
  removeFromCartHandler = false,
}) => {
  return (
    <Button
      disabled={orderCreated}
      type="button"
      variant="warning shadow border-danger"
      onClick={
        removeFromCartHandler
          ? () => removeFromCartHandler(productID, quantity, price)
          : undefined
      }
    >
      <i className="bi bi-trash"></i>
    </Button>
  );
};

export default RemoveFromCartComponent;
