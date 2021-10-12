import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImageHorizontal from "../../assets/images/bg_landscape.png";
import backgroundImageVertical from "../../assets/images/bg_portrait.png";
import Footer from "../../components/footer/Footer";
import { Box, Typography, Button } from "@material-ui/core";
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
    if (password !== confirmPassword) {
      alert("Passwords do not match");
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
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <form className="form" noValidate>
            <Typography
              variant="h4"
              color="primary"
              align="center"
              className={classes.header}
            >
              <Box color="primary.light">Register</Box>
            </Typography>
            {showMsg && (
              <div className={classes.lastRow}>
                <span className={classes.lastRowTextBlack}>
                  Kindly check your email to verify your account
                </span>
                <span
                  onClick={() => resendVerification()}
                  className={classes.lastRowTextBlack}
                >
                  Resend?
                </span>
              </div>
            )}
            {showAlert && (
              <Alert severity="success">Email sent Successfully</Alert>
            )}
            {errors.length > 0 &&
              errors.map((item: any, i) => (
                <Alert key={i} severity="warning">{item.message}</Alert>
              ))}
            <div className={classes.errorMsg}>
              <p>{message}</p>
            </div>
            <div className={classes.formInputs}>
              <input
                className={classes.formInput}
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={(text) => handleChangeName(text, "first")}
                value={firstName}
              />
              <input
                className={classes.formInput}
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={(text) => handleChangeName(text, "last")}
                value={lastName}
              />
              <input
                className={classes.formInput}
                type="email"
                name="email"
                placeholder="Email"
                onChange={(text) => handleChangeEmail(text)}
                value={email}
              />
              <input
                className={classes.formInput}
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={(text) => handleChangePhone(text)}
                value={phone}
              />
              <input
                className={classes.formInput}
                type="password"
                name="password"
                placeholder="Password"
                onChange={(text) => handleChangePassword(text)}
                value={password}
              />
              <input
                className={classes.formInput}
                type="password"
                name="confirm_password"
                placeholder="Re-type Password"
                onChange={(text) => handleChangeCP(text)}
                value={confirmPassword}
              />
            </div>

            {!loading && (
              <Button
                variant="contained"
                color="primary"
                className={classes.authBtn}
                size={"large"}
                onClick={registerUser}
              >
                Register
              </Button>
            )}
            {loading && (
              <CircularProgress
                className={classes.progressBar}
                color="primary"
              />
            )}
            <div className={classes.lastRow}>
              <span className={classes.lastRowTextBlack}>
                Already have an account?
              </span>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <span className={classes.lastRowTextColor}>LOGIN?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
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
