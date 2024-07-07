import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  DropdownButton,
  Dropdown,
  Button,
  InputGroup,
} from "react-bootstrap";
import logo from "../components/assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import "../index.css";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../redux/actions/categoryActions";
import socketIOClient from "socket.io-client";
import {
  setChatRooms,
  setSocket,
  setMessageReceived,
  removeChatRoom,
} from "../redux/actions/chatActions";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import "../burgermenu.css";

function HeaderComponent() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);
  const itemsCount = useSelector((state) => state.cart.itemsCount);
  const { categories } = useSelector((state) => state.getCategories);
  const { messageReceived } = useSelector((state) => state.adminChat);
  const [searchCategoryToggle, setSearchCategoryToggle] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [fixNavbar, setFixNavar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const submitHandler = (e) => {
    if (e.keyCode && e.keyCode !== 13) return;
    e.preventDefault();
    if (searchQuery.trim()) {
      if (searchCategoryToggle === "All") {
        navigate(`/product-list/search/${searchQuery}`);
      } else {
        navigate(
          `/product-list/category/${searchCategoryToggle.replace(
            /\//g,
            ","
          )}/search/${searchQuery}`
        );
      }
    } else if (searchCategoryToggle !== "All") {
      navigate(
        `/product-list/category/${searchCategoryToggle.replace(/\//g, ",")}`
      );
    } else {
      navigate("/product-list");
    }
  };

  useEffect(() => {
    if (userInfo.isAdmin) {
      var audio = new Audio("/audio/chat-msg.mp3");
      const socket = socketIOClient();
      socket.emit(
        "admin connected with server",
        "Admin" + Math.floor(Math.random() * 1000000000000)
      );
      socket.on(
        "server sends message from client to admin",
        ({ user, message }) => {
          dispatch(setSocket(socket));
          //   let chatRooms = {
          //     fddf54gfgfSocketID: [{ "client": "dsfdf" }, { "client": "dsfdf" }, { "admin": "dsfdf" }],
          //   };
          dispatch(setChatRooms(user, message));
          dispatch(setMessageReceived(true));
          audio.play();
        }
      );
      socket.on("disconnected", ({ reason, socketId }) => {
        //   console.log(socketId, reason)
        dispatch(removeChatRoom(socketId));
      });
      return () => socket.disconnect();
    }
  }, [userInfo.isAdmin]);

  const setFixedNavbar = () => {
    if (window.scrollY > 20) {
      setFixNavar(true);
    } else {
      setFixNavar(false);
    }
  };
  window.addEventListener("scroll", setFixedNavbar);

  return (
    <Navbar
      // className="navbar active"
      className={fixNavbar ? "navbar active " : "navbar"}
      // className="p-1 bg-gradient bg-opacity-85"
      collapseOnSelect
      expand="sm"
      bg="primary "
      variant="dark"
    >
      <Navbar.Brand href="/">
        <img className="logo-scale" src={logo} alt="logo" />
      </Navbar.Brand>
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbarside mt-1">
            <Link
              to="#"
              className="menu-bars p d-flex flex-column align-items-center justify-content-end "
            >
              <RxHamburgerMenu
                className="burger-menu p-1 menu-wrapper  "
                onClick={showSidebar}
              />

              <i className="text-info  small-text mt-3 mt-auto">ΜΕΝΟΥ</i>
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <IoMdClose className="burger-menu menu-wrapper " />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className="spanside">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/" className="col-md-1"></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton
                variant="secondary text-black"
                id="dropdown-basic"
                menuVariant="dark"
                title={searchCategoryToggle}
              >
                <Dropdown.Item onClick={() => setSearchCategoryToggle("All")}>
                  Όλα
                </Dropdown.Item>
                {categories.map((category, id) => (
                  <Dropdown.Item
                    key={id}
                    onClick={() => setSearchCategoryToggle(category.name)}
                  >
                    {category.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>

              <Form.Control
                className=" container justify-content-center  mr-sm-2 form-control-lg neon-search"
                onKeyUp={submitHandler}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Αναζήτηση ανά προϊόν, μάρκα ή κατηγορία ..."
                style={{ width: "600px" }}
              />
              <Button onClick={submitHandler} variant="warning search-button ">
                <BsSearch
                  size={25}
                  className="bi bi-search text-dark "
                ></BsSearch>
              </Button>
            </InputGroup>
          </Nav>
          <Nav className="ms-auto p-3 ">
            {userInfo.isAdmin ? (
              <LinkContainer to="/admin/orders">
                <Nav.Link>
                  Διαχειριστής
                  {messageReceived && (
                    <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                  )}
                </Nav.Link>
              </LinkContainer>
            ) : userInfo.name && !userInfo.isAdmin ? (
              <NavDropdown
                title={`${userInfo.name} ${userInfo.lastName}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  eventKey="/user/my-orders"
                  as={Link}
                  to="/user/my-orders"
                >
                  Οι Παραγγελίες μου
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                  Το Προφίλ μου
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => dispatch(logout())}>
                  Αποσύνδεση
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaRegUser className="fs-1 " to="/login" />
                  </Nav.Link>
                </LinkContainer>
              </>
            )}

            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge
                  pill
                  bg=" position-absolute start-10 ms-5  translate-middle badge border border-danger rounded-circle bg-warning text-black"
                >
                  {itemsCount === 0 ? "" : itemsCount}
                </Badge>
                <BsCart3 className="fs-1 " />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
