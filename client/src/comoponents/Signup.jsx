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

function Signup() {
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");
  const [password,setPassword] = useState();
  const [confirmPassword,setConfirmPassword] = useState()
  const [dateofbirth,setDateofbirth] = useState()
  const [phonenumber,setPhonenumber] = useState()
  const [address,setAddress] = useState()
  const [securityQuestion,setSecurityQuestion] = useState()
  const [securityAnswer,setSecurityAnswer] = useState()
  const [city,setCity] = useState()
const [state,setState] = useState()
const [pincode,setPincode] = useState()
const [country,setCountry] = useState()
  const [showpassword,setShowpassword] = useState(false)
  const [showConfirmpassword,setShowConfirmpassword] = useState(false)
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const validationErrors = { ...errors };
    const { name, value, checked } = e.target;

    switch (name) {
      case "fullName":
        setfullName(value);
        validationErrors[name] =
          value.trim() === ""
            ? "Please enter your fullName "
            : "";
        if (value.trim() !== "") {
          validationErrors[name] = "";
        }
        break;

      case "email":
        setemail(value);
        validationErrors[name] =
          value.trim() === "" ? "Please enter your email" : "";
        if (value.trim() !== "") {
          validationErrors[name] = "";
        }
        break;
        case "dateofbirth":
            setDateofbirth(value);
            validationErrors[name] =
              value.trim() === "" ? "Please enter your date of birth" : "";
            if (value.trim() !== "") {
              validationErrors[name] = "";
            }
            break;
            case "password":
                setPassword(value);
                validationErrors[name] =
                  value.trim() === "" ? "Please enter your password": "";
                if (value.trim() !== "") {
                  validationErrors[name] = "";
                }
                break;
                case "phonenumber":
                    setPhonenumber(value);
                    validationErrors[name] =
                      value.trim() === "" ? "Please enter your phone number": "";
                    if (value.trim() !== "") {
                      validationErrors[name] = "";
                    }
                    break;
                    case "confirmPassword":
                    setConfirmPassword(value);
                    validationErrors[name] =
                      value.trim() === "" ? "Password doesnt matched with your password": "";
                    if (value.trim() !== "") {
                      validationErrors[name] = "";
                    }
                    break;

                    case "securityQuestion":
                        setSecurityQuestion(value);
                        validationErrors[name] =
                          value.trim() === "" ? "Please select security question": "";
                        if (value.trim() !== "") {
                          validationErrors[name] = "";
                        }
                        break;

                        case "securityAnswer":
                            setSecurityAnswer(value);
                            validationErrors[name] =
                              value.trim() === "" ? "Please enter security Answer": "";
                            if (value.trim() !== "") {
                              validationErrors[name] = "";
                            }
                            break;

                            case "city":
                                setCity(value);
                                validationErrors[name] =
                                  value.trim() === "" ? "Please enter your City": "";
                                if (value.trim() !== "") {
                                  validationErrors[name] = "";
                                }
                                break;          
                                case "country":
                                    setCountry(value);
                                    validationErrors[name] =
                                      value.trim() === "" ? "Please enter your Country": "";
                                    if (value.trim() !== "") {
                                      validationErrors[name] = "";
                                    }
                                    break; 
                                    case "state":
                                        setState(value);
                                        validationErrors[name] =
                                          value.trim() === "" ? "Please enter your State": "";
                                        if (value.trim() !== "") {
                                          validationErrors[name] = "";
                                        }
                                        break;               
                                        case "pincode":
                                            setPincode(value);
                                            validationErrors[name] =
                                              value.trim() === "" ? "Please enter your Pincode": "";
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
    if (!fullName.trim()) {
      validationErrors.fullName =
        "Please enter your registered fullName";
    }

    if (!email.trim()) {
      validationErrors.email = "Please enter your email";
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
            justifyContent: "left",
            alignItems: "left",
           
          }}
        >
          <Col lg={4} className="d-none d-lg-block Registerbanner"  >

             <img src={navlogo} style={{padding:"20px"}} />
          </Col>
          <Col
            className=" d-flex justify-content-left align-items-left flex-column"
            lg={7}
            xs={11}
            md={7}
            xl={7}
            style={{
              backgroundColor: "white",
              height: "80vh",
              marginLeft:"30px",
              paddingLeft:"20px",
            }}>
             <h9 className="align-left "> Welcome</h9>
            <h2 className="h3 align-left"> Sign up</h2>
            <Form
              noValidate
              autoComplete="off"
              onSubmit={signIn}
              className="text-left mt-3"
              style={{
                height: "100%",
                width: "100%",
              }}>
        <Row >
         <Col lg={6} className="p-1">
              <Form.Group >
              <label className="mb-1">Full name </label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={fullName}
                  onChange={handleChange}
                  isInvalid={!!errors.fullName}
                  placeholder="Enter  fullName"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>
              </Col>
              <Col lg={6} className="p-1">
              <Form.Group>
              <label className="mb-1">Email</label>

                <Form.Control
                  name="email"
                  onChange={handleChange}
                  value={email}
                  isInvalid={!!errors.email}
                  type={ "text"}
                  placeholder="Enter email"
                />
               
               

                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.email}
                </Form.Control.Feedback>
              
              </Form.Group>
            </Col>
            </Row>
            <Row >
         <Col lg={6} className="p-1">
              <Form.Group className="">
              <label className="mb-1">Date of Birth </label>
                <Form.Control
                  type="date"
                  name="dateofbirth"
                  value={dateofbirth}
                  onChange={handleChange}
                  isInvalid={!!errors.dateofbirth}
                  placeholder="Enter Date of birth"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.dateofbirth}
                </Form.Control.Feedback>
              </Form.Group>
              </Col>
              <Col lg={6} className="p-1">
              <Form.Group className=" position-relative">
              <label className="mb-1">Password</label>

                <Form.Control
                  name="password"
                  onChange={handleChange}
                  value={password}
                  isInvalid={!!errors.password}
                  type={showpassword ? "text" : "password"}
                  placeholder="Enter password"
                />
                <span
                  style={{
                    position: "absolute",
                    right: "30px",
                    top: "60%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowpassword(!showpassword)}>
                  {showpassword ? (
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
              
              </Form.Group>
            </Col>

            
            </Row>
            <Row >
         <Col lg={6} className="p-1">
              <Form.Group className="">
              <label className="mb-1">Phone Number </label>
                <Form.Control
                  type="text"
                  name="phonenumber"
                  value={phonenumber}
                  onChange={handleChange}
                  isInvalid={!!errors.phonenumber}
                  placeholder="Enter Phone Number"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.phonenumber}
                </Form.Control.Feedback>
              </Form.Group>
              </Col>
              <Col lg={6} className="p-1">
              <Form.Group className=" position-relative">
              <label className="mb-1">Confirm Password</label>

                <Form.Control
                  name="confirmPassword"
                  onChange={handleChange}
                  value={confirmPassword}
                  isInvalid={!!errors.confirmPassword}
                  type={showpassword ? "text" : "password"}
                  placeholder="confirm your Password"
                />
                <span
                  style={{
                    position: "absolute",
                    right: "30px",
                    top: "60%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowpassword(!showpassword)}>
                  {showpassword ? (
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
                  {errors.confirmpassword}
                </Form.Control.Feedback>
              
              </Form.Group>
            </Col>
            
            <Col lg={6} className="p-1">
              <Form.Group className="">
              <label className="mb-1">Security Question </label>
                <Form.Control
                  as="select"
                  name="securityQuestion"
                  value={securityQuestion}
                  onChange={handleChange}
                  isInvalid={!!errors.securityQuestion}
                  placeholder="Enter security question"
                >
                    <option value="">Select</option>
                    <option value="What is your school name?">What is your school name?</option>
                    <option value="What is your fovourite tourist place?">What is your fovourite tourist place?</option>
                    <option value="Who is your best friend">Who is your best friend?</option>
                    <option value="What is your pet name?">What is your pet name?</option>
                    </Form.Control>
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.securityQuestion}
                </Form.Control.Feedback>
              </Form.Group>
              </Col>

              <Col lg={6} className="p-1">
              <Form.Group className="">
              <label className="mb-1">Security Answer </label>
                <Form.Control
                  type="text"
                  name="securityAnswer"
                  value={securityAnswer}
                  onChange={handleChange}
                  isInvalid={!!errors.securityAnswer}
                  placeholder="Enter security Answer"
                />
                      
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.securityAnswer}
                </Form.Control.Feedback>
              </Form.Group>
              </Col>
              <Col lg={12} className="p-1">
              <Form.Group className="">
              <label className="mb-1">Address </label>
                <Form.Control
                  type="text"
                  name="address"
                  value={address}
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                  placeholder="Enter your address"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
              </Col>
              <Row>
              <Col lg={3} className="p-1">
              <Form.Group className="">
              <label className="mb-1">city </label>
                <Form.Control
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                  placeholder="Enter city"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              </Col>
              <Col lg={3} className="p-1">
              <Form.Group className="">
              <label className="mb-1">State</label>
                <Form.Control
                  type="text"
                  name="state"
                  value={state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                  placeholder="Enter State"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              </Col>
              <Col lg={3} className="p-1">
              <Form.Group className="">
              <label className="mb-1">Country</label>
                <Form.Control
                  type="text"
                  name="country"
                  value={country}
                  onChange={handleChange}
                  isInvalid={!!errors.country}
                  placeholder="Enter country"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>
              </Col>
              <Col lg={3} className="p-1">
              <Form.Group className="">
              <label className="mb-1">Pincode</label>
                <Form.Control
                  type="text"
                  name="pincode"
                  value={pincode}
                  onChange={handleChange}
                  isInvalid={!!errors.pincode}
                  placeholder="Enter pincode"
                />
                <Form.Control.Feedback type="invalid" className="text-start">
                  {errors.pincode}
                </Form.Control.Feedback>
              </Form.Group>
              </Col>
              </Row>
            
            </Row>

            </Form>
              <Button className="mb-1 mt-3 login_btn" onClick={signIn}>
                Sign up
              </Button>
              <p className="text-muted mt-2">
               Already have an account?{" "}
                <NavLink to="/login">
                  <span className="forgot_email ml-2">Login</span>
                </NavLink>
              </p>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
