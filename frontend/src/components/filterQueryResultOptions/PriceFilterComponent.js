import { Form } from "react-bootstrap";

const PriceFilterComponent = ({ price, setPrice }) => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Τιμή όχι μεγαλύτερη από:</span> €{price}.00
      </Form.Label>
      <Form.Range
        min={10}
        max={1000}
        step={10}
        onChange={(e) => setPrice(e.target.value)}
      />
    </>
  );
};

export default PriceFilterComponent;
