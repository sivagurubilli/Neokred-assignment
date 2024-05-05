//------------------------------------------------------------------------------------------
//---------------------------------------IMPORT START---------------------------------------

import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

import logo from "../Assets/Images/nav-logo.png";
import { BsBriefcaseFill } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { LuChefHat } from "react-icons/lu";
//------------------------------------------------------------------------------------------
//---------------------------------------IMPORT END---------------------------------------

function NavMenu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [navBackground, setNavBackground] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    {
    }
    setInterval(() => {
      const userString = localStorage.getItem("user");
      const user = JSON.parse(userString);
      setUser(user);
    }, []);
  }, 500000);
  const navigate = useNavigate();

  const logout = () => {
    return localStorage.clear();
    navigate("/");
  };
  if (!user) {
    return (
      <>
        {/* web navbar */}

        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
          style={{
            transition: "1s ease",
            color: "black",
            backgroundColor: navBackground ? "white" : "white",
          }}
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                className="me-5"
                height={60}
                width={142}
                alt="app logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <BiMenuAltLeft style={{ fontSize: "32px" }} />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="me-5 navMenu" text-start to="/">
                  Home
                </NavLink>

                <NavLink className="me-4 navMenu"> Contact</NavLink>
              </Nav>

              <Nav>
                <NavLink to="/login">
                  <LuChefHat /> Login
                </NavLink>
              </Nav>
              <Nav>
                <NavLink to="/employer-login" className="nav_login mx-3">
                  <BsBriefcaseFill /> Employer Login
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  if (user) {
    return (
      <>
        {/* web navbar */}

        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
          style={{
            transition: "1s ease",
            color: "black",
            backgroundColor: navBackground ? "white" : "white",
          }}
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                className="me-5"
                height={60}
                width={142}
                alt="app logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <BiMenuAltLeft style={{ fontSize: "32px" }} />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="me-5 navMenu" text-start to="/">
                  Home
                </NavLink>

                <NavLink className="me-4 navMenu"> Contact</NavLink>
              </Nav>

              <Nav>
                <NavLink onClick={logout} className="nav_login mx-3">
                  <BsBriefcaseFill /> Logout
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavMenu;
