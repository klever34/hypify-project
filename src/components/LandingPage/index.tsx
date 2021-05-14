import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Feat1 from "./feat1.png";
import headerBanner from "./headerBanner.png";
import phoneImg from "./phone.png";

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "#ffffff" }} align="center">
      {"Copyright © "}
      <Link color="inherit" href="#!">
        Fpg Technologies and Solution, All rights reserved
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    padding: theme.spacing(6),
  },
}));

const LandingPage: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main style={{ paddingBottom: "100px" }}>
        <div
          style={{
            minHeight: "60vh",
            background: `url(${headerBanner}) no-repeat bottom left/cover`,
          }}
        >
          <div>
            <Container maxWidth="md">
              <Toolbar>
                <Typography variant="h6"></Typography>
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item container justify="flex-end" xs={4} md={2}>
                    <Button variant="contained" color="primary">
                      Sign in
                    </Button>
                  </Grid>
                  <Grid item container xs={4} md={2}>
                    <Button variant="outlined" color="primary">
                      Sign up
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </Container>
          </div>
          <Container maxWidth="md" style={{ display: "flex" }}>
            <Grid container spacing={5} style={{ marginTop: "90px" }}>
              <Grid item container xs={12} md={7}>
                <div>
                  <Box textAlign={{ xs: "center", md: "left" }}>
                    <Typography variant="h1" color="primary" gutterBottom>
                      <Box
                        fontWeight="fontWeightBold"
                        fontSize={{
                          xs: "2rem",
                          md: "3rem",
                          lg: "3rem",
                        }}
                        lineHeight={1.4}
                        color="primary"
                      >
                        Say{" "}
                        <Box component="span" color="primary.light">
                          Goodbye
                        </Box>
                        <br />
                        to the{" "}
                        <Box component="span" color="primary.light">
                          traditional
                        </Box>
                        <br />
                        attendance system.
                      </Box>
                    </Typography>

                    <Box my={3}>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        paragraph
                      >
                        This platform is herewith a smarter solution to replace
                        the paper based attendence at work
                      </Typography>
                    </Box>
                  </Box>
                  <Grid
                    container
                    spacing={5}
                    direction="row"
                    justify="flex-start"
                  >
                    <Grid item container alignItems="center" xs={6} md={5}>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        color="secondary"
                      >
                        Clock In
                      </Button>
                    </Grid>
                    <Grid item container alignItems="center" xs={6} md={5}>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        color="secondary"
                      >
                        Clock Out
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Hidden smDown={true}>
                <Grid item xs={12} md={5}>
                  <Box my="4">
                    <img
                      alt=""
                      src={phoneImg}
                      style={{ width: "100%", marginTop: "0px" }}
                    />
                  </Box>
                </Grid>
              </Hidden>
            </Grid>
          </Container>
        </div>

        <Container maxWidth="md" style={{ marginTop: "100px" }}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <img alt="" src={Feat1} style={{ width: "100%" }} />
            </Grid>
            <Grid
              item
              container
              xs={10}
              md={6}
              alignItems="center"
              style={{ margin: "0 auto" }}
            >
              <div>
                <Typography
                  component="h1"
                  variant="h4"
                  color="primary"
                  gutterBottom
                >
                  Signup and Login
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph>
                  Follow the signup or Login icon in the header above to setup
                  your account and get started.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <hr style={{ margin: "80px" }} />

          <Grid container spacing={10}>
            <Grid
              item
              container
              xs={10}
              md={6}
              alignItems="center"
              style={{ margin: "0 auto" }}
            >
              <div>
                <Typography
                  component="h1"
                  variant="h4"
                  color="primary"
                  gutterBottom
                >
                  Signup and Login
                </Typography>
                <Typography variant="subtitle1" color="textPrimary" paragraph>
                  Follow the signup or Login icon in the header above to setup
                  your account and get started.
                </Typography>
              </div>
            </Grid>

            <Grid item container xs={12} md={6}>
              <img alt="" src={Feat1} style={{ width: "100%" }} />
            </Grid>
          </Grid>

          <hr style={{ margin: "80px" }} />

          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <img alt="" src={Feat1} style={{ width: "100%" }} />
            </Grid>
            <Grid
              item
              container
              xs={10}
              md={6}
              alignItems="center"
              style={{ margin: "0 auto" }}
            >
              <div>
                <Typography
                  component="h1"
                  variant="h4"
                  color="primary"
                  gutterBottom
                >
                  Signup and Login
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph>
                  Follow the signup or Login icon in the header above to setup
                  your account and get started.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default LandingPage;