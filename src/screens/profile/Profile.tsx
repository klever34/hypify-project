import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Header from "../../components/header/NavHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AvatarImg from "../../assets/images/avatar2.png";
import Avatar from "@material-ui/core/Avatar";
import Footer from "../../components/footer/Footer";
import { red, deepPurple } from "@material-ui/core/colors";
// import { useAppSelector } from "../../app/hooks";
// import { selectStateValues } from "../../app/auth-redux/authSlice";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../constants";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) => ({
  large: {
    height: theme.spacing(30),
    width: theme.spacing(30),
    margin: "0 auto",
  },
  resetPasswordBtn: {
    color: theme.palette.getContrastText(red[900]),
    backgroundColor: red[900],
    "&:hover": {
      backgroundColor: red["A700"],
    },
  },
  logoutBtn: {
    color: theme.palette.getContrastText(deepPurple[600]),
    backgroundColor: deepPurple[600],
    "&:hover": {
      backgroundColor: deepPurple[900],
    },
  },
  formInputs: {
    marginBottom: "0.5rem",
    width: "50%",
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
  authBtn: {
    backgroundColor: "#5019EE",
    display: "flex",
    margin: "0 auto",
    marginTop: 10,
    padding: 15,
    width: "30%",
    borderRadius: 10,
    textTransform: "capitalize",
    marginBottom: 100,
  },
  progressBar: {
    display: "flex",
    margin: "0 auto",
    marginTop: 30,
    marginBottom: 30,
  },
}));

const ProfilePage: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  // const [message, setErrorMessage] = useState<string>("");
  const [loading, showLoading] = useState<boolean>(false);
  const [loading2, showLoading2] = useState<boolean>(false);
  const [errors, setErrors] = useState([]);
  const [showMsg, setMsg] = useState<boolean>(false);
  const [showMsg2, setMsg2] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [wallet, setWallet] = useState("");
  // const { userData = false } = useAppSelector(selectStateValues);
  // const logout = () => {
  //   localStorage.clear();
  //   history.push("/login");
  // };

  useEffect(() => {
    async function getDetails() {
      let email = await localStorage.getItem("user-email");
      setUserEmail(email!);
      let name =
        (await localStorage.getItem("user-firstname")) +
        " " +
        (await localStorage.getItem("user-lastname"));
      setUserName(name);
    }
    getDetails();
  });
  const goToResetScreen = () => {
    history.push("/reset-password");
  };

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  const sendInvite = async () => {
    setErrors([]);
    const token = await localStorage.getItem("access-token");
    try {
      showLoading(true);
      const response = await axios.post(
        `${baseUrl}invitation/`,
        {
          email_of_user_to_invite: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      if (response.status === 201) {
        setMsg(true);
        setEmail("");
      } else {
        // setErrorMessage("Failed Authentication");
      }
      showLoading(false);
    } catch (error: any) {
      console.log(error.response.data);
      if (error.response.data.errors.length > 0) {
        setErrors(error.response.data.errors);
      }
      showLoading(false);
    }
  };

  const addWallet = async () => {
    const token = await localStorage.getItem("access-token");
    try {
      showLoading2(true);
      const response = await axios.post(
        `${baseUrl}wallet/add/`,
        {
          wallet_address: wallet,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      if (response.status === 201) {
        setMsg2(true);
        setWallet("");
      } else {
        // setErrorMessage("Failed Authentication");
      }
      showLoading(false);
    } catch (error: any) {
      console.log(error.response.data);
      if (error.response.data.errors.length > 0) {
        setErrors(error.response.data.errors);
      }
      showLoading2(false);
    }
  }

  const handleChangeEmail = (text: React.ChangeEvent<HTMLInputElement>) => {
    const email = text.currentTarget.value;
    setEmail(email);
  };

  const handleChangeWallet = (text: React.ChangeEvent<HTMLInputElement>) => {
    const wallet = text.currentTarget.value;
    setWallet(wallet);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Container style={{ margin: "60px auto" }}>
          <Grid container spacing={10} justify="center">
            <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
              {/* <img alt="" src={AvatarImg} style={{ height: "256px" }} /> */}
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={<i className="fas fa-2x fa-camera"></i>}
              >
                <Avatar
                  alt="avatar"
                  src={AvatarImg}
                  className={classes.large}
                />
              </Badge>
              {/* <Avatar alt="" src={AvatarImg} className={classes.large} /> */}
            </Grid>
          </Grid>
          <Grid
            container
            spacing={5}
            direction="row"
            justify="center"
            style={{ margin: "30px  0px" }}
          >
            <Grid item container alignItems="center" xs={12} md={5}>
              <div>
                <Box component="span" mr={4}>
                  <Typography
                    component="span"
                    variant="h5"
                    color="primary"
                    gutterBottom
                  >
                    Name:
                  </Typography>
                </Box>

                <Typography
                  component="span"
                  variant="subtitle1"
                  color="textSecondary"
                  paragraph
                >
                  {userName}
                </Typography>
              </div>
            </Grid>
            <Grid item container alignItems="center" xs={12} md={5}>
              <div>
                <Box component="span" mr={4}>
                  <Typography
                    component="span"
                    variant="h5"
                    color="primary"
                    gutterBottom
                  >
                    Email:
                  </Typography>
                </Box>

                <Typography
                  component="span"
                  variant="subtitle1"
                  color="textSecondary"
                  paragraph
                >
                  {userEmail}
                </Typography>
              </div>
            </Grid>
          </Grid>
          <p style={{margin: 40}}>
          {errors.length > 0 &&
            errors.map((item: any, i) => (
              <Alert key={i} severity="warning">
                {item.message}
              </Alert>
            ))}
            </p>
          {showMsg && (
            <Alert severity="success">
              Invitation has been created successfully
            </Alert>
          )}
          <Grid spacing={5} direction="row" justify="center">
            <div>
              <input
                className={classes.formInput}
                type="email"
                name="email"
                placeholder="Email"
                onChange={(text) => handleChangeEmail(text)}
                value={email}
              />

              {!loading && (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.authBtn}
                  size={"small"}
                  onClick={sendInvite}
                >
                  Invite User
                </Button>
              )}
              {loading && (
                <CircularProgress
                  className={classes.progressBar}
                  color="primary"
                />
              )}
            </div>
          </Grid>
          {showMsg2 && (
            <Alert severity="success">
              Your tron wallet address has been added successfully
            </Alert>
          )}
          <Grid spacing={5} direction="row" justify="center">
            <div>
              <input
                className={classes.formInput}
                type="text"
                name="wallet"
                placeholder="Wallet"
                onChange={(text) => handleChangeWallet(text)}
                value={wallet}
              />

              {!loading2 && (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.authBtn}
                  size={"small"}
                  onClick={addWallet}
                >
                  Add Wallet
                </Button>
              )}
              {loading2 && (
                <CircularProgress
                  className={classes.progressBar}
                  color="primary"
                />
              )}
            </div>
          </Grid>
          <Grid container spacing={5} direction="row" justify="center">
            <Grid item container alignItems="center" xs={10} md={3}>
              <Button
                onClick={goToResetScreen}
                variant="contained"
                size="large"
                fullWidth
                color="primary"
                className={classes.resetPasswordBtn}
              >
                Reset Password
              </Button>
            </Grid>
            <Grid item container alignItems="center" xs={10} md={3}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                color="primary"
                className={classes.logoutBtn}
                onClick={() => logout()}
              >
                Log Out
              </Button>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ProfilePage;
