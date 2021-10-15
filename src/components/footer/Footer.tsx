/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles, Theme } from "@material-ui/core/styles";
// import Link from "@material-ui/core/Link";

// const useStyles = makeStyles((theme: Theme) => ({
//   footer: {
//     backgroundColor: theme.palette.primary.main,
//     color: "#ffffff",
//     paddingTop: theme.spacing(3),
//     paddingBottom: theme.spacing(3),

//     alignItems: "center",
//     justifyContent: "center",
//     bottom: 0,
//     width: "100vW",
//   },
//   footerText: {
//     color: "#ffffff",
//     fontSize: 18,
//   },

//   "@media (max-width: 768px)": {
//     footerText: {
//       color: "#ffffff",
//       fontSize: 10,
//     },
//   },
// }));

const Footer: React.FC = () => {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <footer>
        <div
          className="top_footer blue_light_bg"
          data-z-index="1"
          data-parallax="scroll"
          data-image-src="assets/images/footer_bg.png"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="newsletter_form">
                  <h4
                    className="footer_title border_title"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.2s"
                  >
                    Newsletter
                  </h4>
                  <p
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.4s"
                  >
                    By subscribing to our mailing list you will always be update
                    with the latest news from us.
                  </p>
                  <form
                    // className="subscribe_form animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.4s"
                  >
                    <input
                      className="input-rounded"
                      type="text"
                      required
                      placeholder="Enter Email Address"
                    />
                    <button
                      type="submit"
                      title="Subscribe"
                      className="btn-info"
                      name="submit"
                      value="Submit"
                    >
                      {" "}
                      Subscribe{" "}
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-8 res_md_mt_30 res_sm_mt_20">
                <h4
                  className="footer_title border_title"
                  // data-animation="fadeInUp"
                  // data-animation-delay="0.2s"
                >
                  Quick Links
                </h4>
                <ul className="footer_link half_link list_none">
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.3s"
                  >
                    <a href="#">Team</a>
                  </li>
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.3s"
                  >
                    <a href="#">How It Works</a>
                  </li>
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.5s"
                  >
                    <a href="#">FAQ</a>
                  </li>
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.3s"
                  >
                    <a href="#">Road map</a>
                  </li>
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.6s"
                  >
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-4 res_md_mt_30 res_sm_mt_20">
                <h4
                  className="footer_title border_title"
                  // data-animation="fadeInUp"
                  // data-animation-delay="0.2s"
                >
                  Social
                </h4>
                <ul className="footer_social list_none">
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.2s"
                  >
                    <a href="#">
                      <i className="ion-social-facebook"></i> Facebook
                    </a>
                  </li>
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.3s"
                  >
                    <a href="#">
                      <i className="ion-social-twitter"></i> Twitter
                    </a>
                  </li>
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.4s"
                  >
                    <a href="#">
                      <i className="ion-social-googleplus"></i> Google Plus
                    </a>
                  </li>
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.5s"
                  >
                    <a href="#">
                      <i className="ion-social-pinterest"></i> Pintrest
                    </a>
                  </li>
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.6s"
                  >
                    <a href="#">
                      <i className="ion-social-instagram-outline"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="copyright">
                  Copyright &copy; SmartEdge 2021 All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6">
                <ul className="list_none footer_menu">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
