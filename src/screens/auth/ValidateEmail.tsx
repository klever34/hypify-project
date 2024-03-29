import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import backgroundImageHorizontal from "../../assets/images/bg_landscape.png";
// import backgroundImageVertical from "../../assets/images/bg_portrait.png";
// import Footer from "../../components/footer/Footer";
import { Box, Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { baseUrl } from "../../constants";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import { Alert } from "@material-ui/lab";

const ValidateEmail: React.FC = () => {
//   const [code, ] = useState<string>("");
//   const [, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const classes = useStyles();
  const { search } = useLocation();
  const [showAlert, setAlert] = useState<boolean>(false);
  const { key } = queryString.parse(search);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMsg] = useState<string>("");

  useEffect(() => {
    async function validateToken() {
      try {
        const response = await axios.post(`${baseUrl}auth/validate-email/`, {
          key,
        });
        console.log(response.data)
        if (response.data.status === 200) {
          setAlert(true);
          setTimeout(() => {
              history.push('/login');
          }, 3000)
        }
      } catch (error: any) {
        console.log(error.response);
      if (error.response.data.error?.length > 0) {
        setErrors(error.response.data.errors);
      }
      else{
        setMsg(error.response.data.message)
      }
      setLoading(false);
      }
    }
    validateToken();
  }, [history, key]);

//   const authUser = async () => {
//     if (code === "") {
//       alert("Code field is required!");
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await axios.post(`${baseUrl}/validate-email/`, {
//         key: code,
//       });
//       console.log(response.data);
//       setLoading(false);
//       //   if (!response.data.payload.error) {
//       //     console.log(response.data.payload.message);
//       //     setSentView(true);
//       //     // history.push("/login");
//       //   }
//     } catch (error: any) {
//       setLoading(false);
//       if (error.response.data.payload?.error) {
//         alert(error.response.data.payload.message);
//       }
//     }
//   };

//   const handleChangeEmail = (text: React.ChangeEvent<HTMLInputElement>) => {
//     const email = text.currentTarget.value;
//     setCode(email);
//   };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className="authorize_box">
          <form className="form" noValidate>
                    {errors.length > 0 &&
                      errors.map((item: any, i) => (
                        <Alert key={i} severity="warning">
                          {item.message}
                        </Alert>
                      ))}
            {showAlert && (
              <Alert severity="success">
                Email Confirmed Successfully
              </Alert>
            )}
            {message && (
              <Alert severity="warning">
                {message}
              </Alert>
            )}
            {loading && <CircularProgress className={classes.progressBar} color="primary" />}
            <Typography
              variant="h4"
              color="primary"
              align="center"
              className={classes.header}
            >
              <Box color="primary.light">Validating Your Email</Box>
            </Typography>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  progressBar: {
    display: "flex",
    margin: "0 auto",
    marginTop: 50,
    marginBottom: 50,
    color: 'blue'
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
    // backgroundImage: `url(${backgroundImageHorizontal})`,
    height: "92vh",
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
    height: "60%",
  },
  formInputs: {
    marginBottom: "0.5rem",
    width: "100%",
  },
  header: {
    fontWeight: "bold",
    // marginBottom: 20,
    fontSize: 24,
    marginTop: 60,
    marginBottom: 10,
  },
  subHeader: {
    textAlign: "center",
    marginBottom: 50,
    marginTop: 20,
    color: "#000000",
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
    marginBottom: 50,
    padding: 15,
    width: "30%",
    borderRadius: 5,
    textTransform: "capitalize",
  },

  "@media (max-width: 768px)": {
    container: {
      // backgroundImage: `url(${backgroundImageVertical})`,
      height: "95vh",
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
      //   marginBottom: 20,
      fontSize: 20,
      paddingTop: 30,
      //   paddingBottom: 30,
    },
    formInputSpan: {
      fontSize: 11,
      cursor: "pointer",
    },
    authBtn: {
      backgroundColor: "#5019EE",
      display: "flex",
      margin: "0 auto",
      marginTop: 50,
      padding: 5,
      width: "35%",
      borderRadius: 5,
      textTransform: "capitalize",
    },
    subHeader: {
      textAlign: "center",
      marginBottom: 50,
      color: "#000",
      fontSize: 12,
      paddingRight: 30,
      paddingLeft: 30,
    },
  },
}));

export default ValidateEmail;
