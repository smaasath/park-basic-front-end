import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import CommonButton from "../common/CommonButton/CommonButton.js";
import parklogo from "../../assests/pictures/park-basic-logo.png";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../redux/actions/UserActions.js";
import ProfileIcon from "../../assests/pictures/profile-icon.png";

function NavBar({ isAdmin }) {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      dispatch(
        Login(null, (res) => {
          console.log(res);
        })
      );
    }
  }, [token]);

  const navigate = useNavigate();

  function navigatePage(page) {
    navigate(page);
  }

  console.log(userData);

  return (
    <>
      <Navbar sticky="top" expand={"sm"} className="bg-dark">
        <Container fluid className="ps-4 pe-4">
          {isAdmin ? null : (
            <Navbar.Brand onClick={() => navigatePage("/")}>
              <img src={parklogo} style={{ width: "70%" }} />
            </Navbar.Brand>
          )}

          <Navbar.Toggle
            className="navbar-expand-toggle"
            aria-controls={`offcanvasNavbar-expand-sm`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header className="text-white bg-dark" closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-sm`}
              ></Offcanvas.Title>
            </Offcanvas.Header>
            {isAdmin ? (
              <Nav.Link
                className="d-flex align-items-center justify-content-end"
                onClick={() => navigate("/profile")}
              >
                <div className="d-flex-column me-3">
                  <div>
                    <h6 className="ms-3 nav-profile-name">
                      {userData != null ? userData.user.first_name : null}
                    </h6>
                  </div>
                  <div>
                    <h6 className="ms-3 text-white navbar-admin">Admin</h6>
                  </div>
                </div>
                <img src={ProfileIcon} className="nav-profile-icon" />
              </Nav.Link>
            ) : (
              <Offcanvas.Body className="justify-content-center align-items-center bg-dark">
                <Nav className="justify-content-center flex-grow-1 pe-3 gap-5">
                  <Nav.Link
                    onClick={() => navigatePage("/")}
                    className="text-white"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigatePage("/Booking")}
                    className="text-white"
                  >
                    Booking
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigatePage("/action")}
                    className="text-white"
                  >
                    About us
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-center">
                  {!token ? (
                    <Nav.Link onClick={() => navigate("/signin")}>
                      <CommonButton ButtonText={"Sign In"} />
                    </Nav.Link>
                  ) : (
                    <Nav.Link
                      className="d-flex"
                      onClick={() => navigate("/profile")}
                    >
                      <img src={ProfileIcon} className="nav-profile-icon" />

                      <h4 className="ms-3 nav-profile-name">
                        {userData != null ? userData.user.last_name : null}
                      </h4>
                    </Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            )}
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
