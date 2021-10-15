/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImageHorizontal from "../../assets/images/bg_landscape.png";
import backgroundImageVertical from "../../assets/images/bg_portrait.png";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
// import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import {selectStateValues } from "../../app/auth-redux/authSlice";
// import { getUserActivitiesAsync } from "../../app/activity-redux/activitySlice";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../constants";
import axios from "axios";

const Login: React.FC = () => {
  // const auth = useAppSelector(selectStateValues);
  // const dispatch = useAppDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setErrorMessage] = useState<string>("");
  const [loading, showLoading] = useState<boolean>(false);
  // const [errors,  setErrors] = useState();

  useEffect(() => {
    async function checkAuth() {
      const userStatus = localStorage.getItem("access-token");
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

  const loginUser = async () => {
    // const result = await dispatch(loginAsync({ email, password }));
    // console.log("result");
    // console.log(result);
    // if (result.payload.payload.auth) {
    //   history.push("/dashboard");
    //   dispatch(getUserActivitiesAsync());
    // } else {
    //   setErrorMessage("Failed Authentication");
    // }
    try {
      showLoading(true);
      const response = await axios.post(`${baseUrl}auth/login/`, {
        email,
        password,
      });
      if (response.status === 200) {
        // console.log(response);
        // return;
        localStorage.setItem("access-token", response.data.data.tokens.access);
        localStorage.setItem(
          "refresh-token",
          response.data.data.tokens.refresh
        );
        localStorage.setItem(
          "user-email",
          response.data.data.basic_user_info.email
        );
        localStorage.setItem(
          "user-firstname",
          response.data.data.basic_user_info.first_name
        );
        localStorage.setItem(
          "user-lastname",
          response.data.data.basic_user_info.last_name
        );
        localStorage.setItem(
          "user-id",
          response.data.data.basic_user_info.user_id
        );
        history.push("/profile");
      } else {
        setErrorMessage("Failed Authentication");
      }
      showLoading(false);
    } catch (error: any) {
      showLoading(false);
      console.log(error.response.data);
      setErrorMessage(error.response.data.message);
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
                  Login
                </h1>
                <ul
                  className="breadcrumb bg-transparent justify-content-center animation m-0 p-0"
                  data-animation="fadeInUp"
                  data-animation-delay="1.3s"
                >
                  <li>
                    <Link to={"/"}>Home</Link>{" "}
                  </li>
                  <li>
                    <span>Login</span>
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
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.2s"
                  >
                    Welcome
                  </h4>
                  <p
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.4s"
                  >
                    Sign in to your account
                  </p>
                </div>
                <div className="field_form authorize_form">
                  <form method="post">
                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.6s"
                    >
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="Email"
                        name="email"
                        onChange={(text) => handleChangeEmail(text)}
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
                        placeholder="Password"
                        name="password"
                        onChange={(text) => handleChangePassword(text)}
                      />
                    </div>
                    {!loading && (
                      <div
                        className="form-group col-md-12 text-center"
                        // data-animation="fadeInUp"
                        // data-animation-delay="0.8s"
                      >
                        <button
                          className="btn btn-default btn-radius"
                          name="submit"
                          type="submit"
                          onClick={loginUser}
                        >
                          Login
                        </button>
                      </div>
                    )}
                    {loading && (
                      <CircularProgress
                        className={classes.progressBar}
                        color="primary"
                      />
                    )}

                    <div
                      className="form-group col-md-12 text-center"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.9s"
                    >
                      <a className="forgot_pass" href="#">
                        Forgot Password?
                      </a>
                    </div>
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
                  New here?<Link to={"/register"}> Register</Link>
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
    paddingTop: 60,
    paddingBottom: 60,
  },
  lastRowTextColor: {
    color: "#5019EE",
    fontWeight: 600,
    cursor: "pointer",
  },
  lastRowTextBlack: {
    color: "#160547",
    fontWeight: 600,
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
    paddingTop: 60,
    paddingBottom: 60,
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
    marginTop: 50,
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

export default Login;
