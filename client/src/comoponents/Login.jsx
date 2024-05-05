//------------------------------------------------------------------------------------------
//---------------------------------------IMPORT START---------------------------------------
import React, { useState } from "react";
import { Col, Container, Row, Image, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import navlogo from "../Assets/Images/nav-logo.png"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
//------------------------------------------------------------------------------------------
//---------------------------------------IMPORT END---------------------------------------

function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const validationErrors = { ...errors };
    const { name, value, checked } = e.target;

    switch (name) {
      case "email":
        setemail(value);
        validationErrors[name] =
          value.trim() === ""
            ? "Please enter your registered email or mobile number"
            : "";
        if (value.trim() !== "") {
          validationErrors[name] = "";
        }
        break;

      case "password":
        setPassword(value);
        validationErrors[name] =
          value.trim() === "" ? "Password enter your password" : "";
        if (value.trim() !== "") {
          validationErrors[name] = "";
        }
        break;

      default:
        break;
    }
    setErrors(validationErrors);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate("");

  async function signIn(e) {
    e.preventDefault();
    const validationErrors = {};
    if (!email.trim()) {
      validationErrors.email =
        "Please enter your registered email";
    }

    if (!password.trim()) {
      validationErrors.password = "Please enter your password";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      

    //   dispatch(cooklogin(item))
    //     .unwrap()
    //     .then(() => {
    //       navigate("/cook/dashboard");
    //     })
    //     .catch(({ message }) => {
    //       alert(message);
    //     });
    }
  }

  return (
    <>
      <Container className="mt-5">
        <Row
          className="mt-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <Col lg={6} className="d-none d-lg-block Loginbanner" >

             <img src={navlogo} style={{padding:"20px"}} />
          </Col>
          <Col
          
            className="mt-5 d-flex justify-content-left align-items-left flex-column"
            lg={5}
            xs={11}
            md={5}
            xl={5}
            style={{
              backgroundColor: "white",
              height: "70vh",
              marginLeft:"50px",
              padding:"50px"
            }}
          >
             <h9 className="align-left "> Welcome</h9>
            <h2 className="h3 align-left"> Login</h2>
            <Form
              noValidate
              autoComplete="off"
              onSubmit={signIn}
              className="text-left mt-3"
              style={{
                height: "100%",
                width: "80%",
              }}
            >
              <Form.Group className="mb-4">
              <label className="mb-2">Email </label>

                <Form.Control
                 
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  placeholder="Enter registered email"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4 position-relative">
              <label className="mb-2">Password</label>

                <Form.Control
                  name="password"
                  onChange={handleChange}
                  value={FormData.password}
                  isInvalid={!!errors.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />
                <span
                  style={{
                    position: "absolute",
                    right: "30px",
                    top: "45%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEye
                      style={{ fontSize: "18px", cursor: "pointer" }}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      style={{ fontSize: "18px", cursor: "pointer" }}
                    />
                  )}
                </span>

                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.password}
                </Form.Control.Feedback>
                <p className="text-end forgot_password mt-3">
                  Forgot password?
                </p>
              </Form.Group>
              <Button className="mb-2 mt-2 login_btn" type="submit">
                Login
              </Button>
              <p className="text-muted mt-2">
                Don't have an account?{" "}
                <NavLink to="/signup">
                  <span className="forgot_password ml-2">Signup</span>
                </NavLink>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
