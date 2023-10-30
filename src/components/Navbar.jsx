import { Button, Container, Nav, Navbar as NavBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCartContext } from "../context/ChoppingCartContext";
const Navbar = () => {
  const { openCart , cartQuantity} = useShoppingCartContext()

  return (
    <NavBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle"
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          onClick={openCart}
        >
          <i className="bi bi-cart3"></i>
          <div
            className="bg-danger d-felx justify-content-center align-itmes-center rounded-circle"
            style={{
              position: "absolute",
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              bottom: 0,
              right: 0,
              transform: "translate(25% , 20%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavBS>
  );
};

export default Navbar;
