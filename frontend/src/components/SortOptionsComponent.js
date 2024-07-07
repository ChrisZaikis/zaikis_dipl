import { Form } from "react-bootstrap";

const SortOptionsComponent = ({ setSortOption }) => {
  return (
    <Form.Select
      onChange={(e) => setSortOption(e.target.value)}
      aria-label="Default select example"
    >
      <option>Ταξινόμιση</option>
      <option value="price_1">Τιμή: Χαμηλή στην Υψηλή</option>
      <option value="price_-1">Τιμή: Υψηλή στην Χαμηλή</option>
      <option value="rating_-1">Αξιολόγηση Πελατών</option>
      <option value="name_1">Όνομα A-Ω</option>
      <option value="name_-1">Όνομα Ω-Α</option>
    </Form.Select>
  );
};

export default SortOptionsComponent;
