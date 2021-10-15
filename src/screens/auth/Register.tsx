/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImageHorizontal from "../../assets/images/bg_landscape.png";
import backgroundImageVertical from "../../assets/images/bg_portrait.png";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import {
//   registerAsync,
//   selectStateValues,
// } from "../../app/auth-redux/authSlice";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants";
import { Alert } from "@material-ui/lab";

const Register: React.FC = () => {
  // const auth = useAppSelector(selectStateValues);
  // const dispatch = useAppDispatch();
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const history = useHistory();
  const [message, setErrorMessage] = useState<string>("");
  const [showMsg, setMsg] = useState<boolean>(false);
  const [showAlert, setAlert] = useState<boolean>(false);
  const [loading, showLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    async function checkAuth() {
      const userStatus = localStorage.getItem("user-token");
      if (userStatus) {
        history.push("/dashboard");
      }
    }
    checkAuth();
  }, [history]);

  const handleChangeEmail = (text: React.ChangeEvent<HTMLInputElement>) => {
    const email = text.currentTarget.value;
    setEmail(email);
  };

  const handleChangePassword = (text: React.ChangeEvent<HTMLInputElement>) => {
    const password = text.currentTarget.value;
    setPassword(password);
  };

  const handleChangeCP = (text: React.ChangeEvent<HTMLInputElement>) => {
    const password = text.currentTarget.value;
    setConfirmPassword(password);
  };

  const handleChangeName = (
    text: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const name = text.currentTarget.value;
    if (type === "first") {
      setFirstName(name);
      return;
    }
    setLastName(name);
  };

  const handleChangePhone = (text: React.ChangeEvent<HTMLInputElement>) => {
    const name = text.currentTarget.value;
    setPhone(name);
  };

  const registerUser = async () => {
    setMsg(false);
    setErrors([]);
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 8 || confirmPassword.length < 8) {
      alert("Passwords should be 8 characters or more");
      return;
    }
    showLoading(true);

    try {
      const response = await axios.post(`${baseUrl}auth/register/`, {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
      });
      if (response.status === 201) {
        setMsg(true);
        setEmail("");
        setPassword("");
        setPhone("");
        setFirstName("");
        setLastName("");
        setConfirmPassword("");
      } else {
        setErrorMessage("Failed Registration");
      }
      showLoading(false);
    } catch (error: any) {
      console.log(error.response.data.errors);
      if (error.response.data.errors.length > 0) {
        setErrors(error.response.data.errors);
      }
      showLoading(false);
    }
  };

  const resendVerification = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}auth/resend-verification-email/`,
        {
          email,
        }
      );
      if (response.status === 200) {
        setAlert(true);
      } else {
        setErrorMessage("Failed to Send");
      }
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <React.Fragment>
      <section
        className="section_breadcrumb blue_light_bg"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/home_banner_bg.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1
                  // className="animation"
                  // data-animation="fadeInUp"
                  // data-animation-delay="1.1s"
                >
                  Register
                </h1>
                <ul
                  className="breadcrumb bg-transparent justify-content-center m-0 p-0"
                  // data-animation="fadeInUp"
                  // data-animation-delay="1.3s"
                >
                  <li>
                    <Link to={"/"}>Home</Link>{" "}
                  </li>
                  <li>
                    <span>Sign Up</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="authorize_box">
                <div className="title_default_dark title_border text-center">
                  <h4
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    GET STARTED WITH SMARTEDGE
                  </h4>
                  <p
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.4s"
                  >
                    Create your account
                  </p>
                </div>
                <div className="field_form authorize_form">
                  <form method="post">
                    {showMsg && (
                      <div className={classes.lastRow}>
                        <p className={classes.lastRowTextBlack}>
                          Kindly check your email to verify your account
                        </p>
                        <p
                          onClick={() => resendVerification()}
                          className={classes.lastRowTextBlack}
                        >
                          Resend Email?
                        </p>
                      </div>
                    )}
                    {showAlert && (
                      <Alert severity="success">Email sent Successfully</Alert>
                    )}
                    {errors.length > 0 &&
                      errors.map((item: any, i) => (
                        <Alert key={i} severity="warning">
                          {item.message}
                        </Alert>
                      ))}
                    <div className={classes.errorMsg}>
                      <p>{message}</p>
                    </div>
                    {/* <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <input
                        type="text"
                        id="crypto_id"
                        required
                        className="form-control"
                        placeholder="Crypto id"
                        name="crypto_id"
                      />
                    </div> */}

                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.5s"
                    >
                      <input
                        className="form-control"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        onChange={(text) => handleChangeName(text, "first")}
                        value={firstName}
                      />
                    </div>

                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.5s"
                    >
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        placeholder="Last Name"
                        onChange={(text) => handleChangeName(text, "last")}
                        value={lastName}
                      />
                    </div>

                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.5s"
                    >
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="email"
                        placeholder="Email"
                        onChange={(text) => handleChangeEmail(text)}
                        value={email}
                      />
                    </div>
                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.6s"
                    >
                      <input
                        type="email"
                        className="form-control"
                        required
                        name="phone"
                        placeholder="Phone Number"
                        onChange={(text) => handleChangePhone(text)}
                        value={phone}
                      />
                    </div>
                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.7s"
                    >
                      <input
                        type="password"
                        className="form-control"
                        required
                        name="password"
                        placeholder="Password"
                        onChange={(text) => handleChangePassword(text)}
                        value={password}
                      />
                    </div>
                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.8s"
                    >
                      <input
                        type="password"
                        className="form-control"
                        required
                        name="confirm_password"
                        placeholder="Re-type Password"
                        onChange={(text) => handleChangeCP(text)}
                        value={confirmPassword}
                      />
                    </div>
                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.9s"
                    >
                      <div className="checkbox_field d-inline">
                        <input
                          type="checkbox"
                          name="rememberme"
                          id="rememberme"
                          value="rememberme"
                        />
                        <label>
                          I agree with <a href="#">Terms of Services</a>
                        </label>
                      </div>
                    </div>
                    {!loading && (
                      <div
                        className="form-group col-md-12 text-center"
                        // data-animation="fadeInUp"
                        // data-animation-delay="1s"
                      >
                        <button
                          className="btn btn-default btn-radius"
                          name="submit"
                          type="submit"
                          onClick={registerUser}
                        >
                          Submit
                        </button>
                      </div>
                    )}
                    {loading && (
                      <CircularProgress
                        className={classes.progressBar}
                        color="primary"
                      />
                    )}
                  </form>
                </div>
              </div>
              <div className="divider small_divider"></div>
              <div className="text-center">
                <span
                  // className="animation"
                  // data-animation="fadeInUp"
                  // data-animation-delay="1s"
                >
                  Already have an account? <Link to={"/login"}> Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  progressBar: {
    display: "flex",
    margin: "0 auto",
    marginTop: 50,
  },
  lastRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    // paddingBottom: 20,
  },
  lastRowTextColor: {
    color: "#5019EE",
    fontWeight: 600,
    cursor: "pointer",
  },
  lastRowTextBlack: {
    color: "#160547",
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundImage: `url(${backgroundImageHorizontal})`,
    height: "95vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    borderRadius: 15,
    marginLeft: "-30%",
    width: "25%",
  },
  formInputs: {
    marginBottom: "0.5rem",
    width: "100%",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 24,
    paddingTop: 15,
    paddingBottom: 15,
  },
  formInput: {
    display: "block",
    outline: "none",
    height: "40px",
    width: "100%",
    border: "1px solid #8B82A3",
    borderRadius: "10px",
    marginBottom: "20px",
    padding: 10,
  },
  formInputSpan: {
    fontSize: 13,
    cursor: "pointer",
  },
  btmRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topPad: {
    paddingTop: 10,
  },
  authBtn: {
    backgroundColor: "#5019EE",
    display: "flex",
    margin: "0 auto",
    marginTop: 10,
    padding: 15,
    width: "30%",
    borderRadius: 10,
    textTransform: "capitalize",
  },
  errorMsg: {
    color: "red",
    margin: "0 auto",
  },

  "@media (max-width: 768px)": {
    container: {
      backgroundImage: `url(${backgroundImageVertical})`,
      height: "92vh",
      width: "100vw",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding: 10,
    },
    formContainer: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderRadius: 15,
      marginLeft: 0,
      width: "70%",
    },
    formInput: {
      display: "block",
      outline: "none",
      height: "20px",
      width: "90%",
      border: "1px solid #8B82A3",
      borderRadius: "10px",
      marginBottom: "20px",
      //   padding: 10,
    },
    lastRowTextColor: {
      color: "#5019EE",
      fontWeight: 600,
      cursor: "pointer",
      fontSize: 12,
    },
    lastRowTextBlack: {
      color: "#160547",
      fontWeight: 600,
      fontSize: 12,
    },
    header: {
      fontWeight: "bold",
      marginBottom: 20,
      fontSize: 20,
      paddingTop: 30,
      paddingBottom: 30,
    },
    formInputSpan: {
      fontSize: 11,
      cursor: "pointer",
    },
    authBtn: {
      backgroundColor: "#5019EE",
      display: "flex",
      margin: "0 auto",
      marginTop: 30,
      padding: 5,
      width: "35%",
      borderRadius: 10,
      textTransform: "capitalize",
    },
  },
}));

export default Register;
