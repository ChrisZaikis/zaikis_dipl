import { Nav, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { logout } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const AdminLinksComponent = () => {
  const dispatch = useDispatch();
  return (
    <Table className="mb-2" bg="light" variant="light">
      <Nav className="flex-column">
        <tr>
          <LinkContainer to="/admin/orders">
            <Nav.Link>Παραγγελίες</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/products">
            <Nav.Link>Προϊόντα</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/users">
            <Nav.Link>Χρήστες</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/chats">
            <Nav.Link>Συνομηλίες</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/analytics">
            <Nav.Link>Αναλυτικά Στοιχεία</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={() => dispatch(logout())}>Αποσύνδεση</Nav.Link>
        </tr>
      </Nav>
    </Table>
  );
};

export default AdminLinksComponent;
