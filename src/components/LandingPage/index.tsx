/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LandingPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    async function checkAuth() {
      const userStatus = localStorage.getItem("access-token");
      if (userStatus) {
        history.push("/dashboard");
      }
    }
    checkAuth();
  }, [history]);

  return (
    <React.Fragment>
      <CssBaseline />
      <div id="loader-wrapper">
        <div id="loading-center-absolute">
          <div className="object" id="object_four"></div>
          <div className="object" id="object_three"></div>
          <div className="object" id="object_two"></div>
          <div className="object" id="object_one"></div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>

      <header className="header_wrap fixed-top">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand animation"
              href="#"
              data-animation="fadeInDown"
              data-animation-delay="1s"
            >
              <img className="logo_light" src="assets/images/" alt="logo" />
              <img
                className="logo_dark"
                src="assets/images/logo_dark.png"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler animation"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-animation="fadeInDown"
              data-animation-delay="1.1s"
            >
              <span className="ion-android-menu"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li
                  className="dropdown animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.1s"
                >
                  <a data-toggle="dropdown" className="nav-link" href="#">
                    Home
                  </a>
                  <div className="dropdown-menu">
                    <ul className="list_none"></ul>
                  </div>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.2s"
                >
                  <a className="nav-link nav_item" href="#">
                    About
                  </a>
                </li>

                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.5s"
                >
                  <a className="nav-link nav_item" href="#">
                    Faq's
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.8s"
                >
                  <a className="nav-link nav_item" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav nav_btn align-items-center">
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.9s"
                >
                  <div className="lng_dropdown">
                    <select name="countries" id="lng_select">
                      <option
                        value="en"
                        data-image="assets/images/eng.png"
                        data-title="English"
                      >
                        EN
                      </option>
                      <option
                        value="fn"
                        data-image="assets/images/fn.png"
                        data-title="France"
                      >
                        FN
                      </option>
                      <option
                        value="us"
                        data-image="assets/images/us.png"
                        data-title="United States"
                      >
                        US
                      </option>
                    </select>
                  </div>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="2s"
                >
                  <Link
                    to={"/login"}
                    className="btn btn-default btn-radius nav_item"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section
        id="home_section"
        className="section_banner section_gradiant"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/banner_bg3.png"
      >
        <div id="banner_bg_effect" className="banner_effect"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-sm-12 order-lg-first">
              <div className="banner_text text_md_center">
                <h1
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.1s"
                >
                  The Number of SmatEdge Contracts Keeps Rising
                </h1>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.3s"
                >
                  The smart contracts starts immediately after confirmed
                  payment.{" "}
                </p>
                <div
                  className="btn_group animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.4s"
                >
                  <a
                    href="#whitepaper"
                    className="btn btn-default page-scroll btn-radius nav-link"
                  >
                    Deposit to account{" "}
                    <i className="ion-ios-arrow-thin-right"></i>
                  </a>
                  <a href="#" className="btn btn-default btn-radius">
                    Buy Tron<i className="ion-ios-arrow-thin-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 order-first">
              <div className="banner_inner res_md_mb_50 res_xs_mb_30">
                <div
                  className="tk_countdown box_shadow_none text-center animation"
                  data-animation="fadeIn"
                  data-animation-delay="1.1s"
                >
                  <div className="banner_text tk_counter_inner">
                    <div
                      className="tk_countdown_time border-0 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.2s"
                      data-time="2019/02/06 00:00:00"
                    ></div>
                    <div
                      className="progress animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.3s"
                    >
                      <div
                        className="progress-bar progress-bar-striped gradient"
                        role="progressbar"
                        aria-valuenow={46}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "36%" }}
                      >
                        <p> 36% </p>
                      </div>
                      {/* <!-- <span className="progress_label bg-white" style="left: 30%"> <strong> 46 Smatedge </strong></span>
                                <span className="progress_label bg-white" style="left: 75%"> <strong> 90, </strong></span>
                                <span className="progress_min_val">Sale Raised</span>
                                <span className="progress_max_val">Soft-caps</span>--> */}
                    </div>
                    <span
                      className="tk_ending_txt animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.4s"
                    >
                      Deposit also through this channel
                    </span>
                    <ul className="icon_list list_none d-flex justify-content-center">
                      <li
                        className="animation"
                        data-animation="fadeInUp"
                        data-animation-delay="1.5s"
                      >
                        <i className="fa fa-cc-visa"></i>
                      </li>
                      <li
                        className="animation"
                        data-animation="fadeInUp"
                        data-animation-delay="1.6s"
                      >
                        <i className="fa fa-cc-mastercard"></i>
                      </li>
                      <li
                        className="animation"
                        data-animation="fadeInUp"
                        data-animation-delay="1.7s"
                      >
                        <i className="fa fa-bitcoin"></i>
                      </li>
                      <li
                        className="animation"
                        data-animation="fadeInUp"
                        data-animation-delay="1.8s"
                      >
                        <i className="fa fa-paypal"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1">
              <ul className="list_none social_icon banner_vr_social text-center res_md_mt_20">
                <li
                  className="animation"
                  data-animation="fadeInRight"
                  data-animation-delay="0.3s"
                >
                  <a href="#">
                    <i className=" fa fa-send"></i>
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInRight"
                  data-animation-delay="0.4s"
                >
                  <a href="#">
                    <i className=" fa fa-facebook"></i>
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInRight"
                  data-animation-delay="0.5s"
                >
                  <a href="#">
                    <i className=" fa fa-twitter"></i>
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInRight"
                  data-animation-delay="0.6s"
                >
                  <a href="#">
                    <i className=" fa fa-google-plus"></i>
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInRight"
                  data-animation-delay="0.7s"
                >
                  <a href="#">
                    <i className=" fa fa-pinterest"></i>
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInRight"
                  data-animation-delay="0.8s"
                >
                  <a href="#">
                    <i className=" fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="divider large_divider"></div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3">
              <h5
                className="rate_title text_md_center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Smartedge Rating Review :
              </h5>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="review_box animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <div className="review_icon">
                  <i className="fa fa-bar-chart"></i>
                </div>
                <div className="review_info">
                  <h6>Investment rating</h6>
                  <span className="rating">
                    4.5 <small>/ 5</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="review_box animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <div className="review_icon">
                  <i className="fa fa-users"></i>
                </div>
                <div className="review_info">
                  <h6>Testimonial Total Rating</h6>
                  <span className="rating">
                    4.3 <small>/ 5</small>
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-4 col-sm-6">
            	<!--<div className="review_box animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                	<div className="review_icon">
                    	<i className="fa fa-snowflake-o"></i>
                    </div> -->
                   <!-- <div className="review_info">
                    	<h6>ICO Benc</h6>
                        <span className="rating">4.7 <small>/ 5</small></span>
                    </div> -->
                </div>-->
            </div> */}
          </div>
        </div>
      </section>

      <section id="about" className="small_pt small_pb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-center">
                <img
                  // className="animation"
                  // data-animation="zoomIn"
                  // data-animation-delay="0.2s"
                  src="assets/images/about_img3.png"
                  alt="aboutimg3"
                />
              </div>
              <div className="chart_icon text-center">
                <img
                  // className="animation"
                  // data-animation="zoomIn"
                  // data-animation-delay="0.2s"
                  src="assets/images/chart_icon.png"
                  alt="aboutimg3"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
              <div className="title_border">
                <h4
                  // className="animation"
                  // data-animation="fadeInUp"
                  // data-animation-delay="0.2s"
                >
                  What is SmartContract
                </h4>
                <p
                  // className="animation"
                  // data-animation="fadeInUp"
                  // data-animation-delay="0.4s"
                >
                  {" "}
                  A smart contract is an agreement between two people in the
                  form of computer code.They run on the blockchain, so they are
                  stored on a public database and cannot be changed.The
                  transaction that happened in a small contract are processed by
                  the blockchain, which menans they can be sent automatically
                  without third party.{" "}
                </p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=ZE2HxTmxfrI"
                className="btn btn-default btn-radius video"
                // data-animation="fadeInUp"
                // data-animation-delay="1s"
              >
                Know More <i className="ion-ios-arrow-thin-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="small_pb small_pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="text-center">
                <h4
                  // className="animation"
                  // data-animation="fadeInUp"
                  // data-animation-delay="0.2s"
                >
                  Have Any Questions?
                </h4>
                <p
                  // className="animation"
                  // data-animation="fadeInUp"
                  // data-animation-delay="0.4s"
                >
                  Frequently asked questions (FAQ) or Questions and Answers
                  (Q&A), are listed questions and answers, all supposed to be
                  commonly asked in some context
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="tab_content">
                <ul
                  className="nav nav-pills tab_nav_s6 animation"
                  id="pills-tab"
                  role="tablist"
                  data-animation="fadeInUp"
                  data-animation-delay="0.5s"
                >
                  <li
                    // className="nav-item animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.5s"
                  >
                    <a className="active" data-toggle="tab" href="#tab1" style={{color: '#000000'}}>
                      General
                    </a>
                  </li>
                  <li
                    // className="nav-item animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.6s"
                  >
                    <a data-toggle="tab" style={{color: '#000000'}} href="#tab2">
                      Pre-ICO & ICC{" "}
                    </a>
                  </li>
                  <li
                    // className="nav-item animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.7s"
                  >
                    <a data-toggle="tab" href="#tab3" style={{color: '#000000'}}>
                      ICO Tokens
                    </a>
                  </li>
                  <li
                    // className="nav-item animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.8s"
                  >
                    <a data-toggle="tab" href="#tab4" style={{color: '#000000'}}>
                      Legal
                    </a>
                  </li>
                </ul>
                <div className="tab-content half_tab">
                  <div
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div id="accordion1" className="faq_content2">
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.4s"
                          >
                            <div className="card-header" id="headingOne">
                              <h6 className="mb-0" >
                                {" "}
                                <a
                                  data-toggle="collapse"
                                  href="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                  style={{color: '#000000'}}
                                >
                                  What is SmartEdge?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseOne"
                              className="collapse show"
                              aria-labelledby="headingOne"
                              data-parent="#accordion1"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                SmartEdge can be divided into 2 concepts: First
                                - Is a smart contract or application running on
                                a cryptocurrency network Tron. The application
                                code is programmed to distribute incoming
                                transfers among participants according to a
                                specific algorithm. Second - Is the site itself,
                                providing an interface for the convenience of
                                working with a smart contract
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.6s"
                          >
                            <div className="card-header" id="headingTwo">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                  style={{color: '#000000'}}
                                >
                                  Who is the Project Administrator?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseTwo"
                              className="collapse"
                              aria-labelledby="headingTwo"
                              data-parent="#accordion1"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                In a project like SmartEdge there is no
                                administrator. There is a creator who uploaded
                                the contract code to the cryptocurrency
                                blockchain Tron. After that, the smart contract
                                has been part of the overall network, which is
                                supported by miners. No one has the right to
                                affect the operation of a smart contract, delete
                                it or stop it. Any attempt to make unauthorised
                                changes will be rejected due to inconsistency
                                with previous copies in the block chain..
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.8s"
                          >
                            <div className="card-header" id="headingThree">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                  style={{color: '#000000'}}
                                >
                                  Can a transaction remain on the balance of a
                                  smart contract?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseThree"
                              className="collapse"
                              aria-labelledby="headingThree"
                              data-parent="#accordion1"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                NO! The contract is programmed to not accumulate
                                funds, but to serve only as a transmitter. The
                                balance of the contract is always zero, anyone
                                can verify this. It simply lacks the function of
                                taking funds from your balance. Any transaction
                                will reach the desired goal safe and sound..{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="1s"
                          >
                            <div className="card-header" id="headingFour">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseFour"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                  style={{color: '#000000'}}
                                >
                                  What is mode of payment in SmartEdge?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseFour"
                              className="collapse"
                              aria-labelledby="headingFour"
                              data-parent="#accordion1"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                Since the smart contract is published Tron
                                Blockchain, so participation in the project is
                                possible only with this TRX digital currency{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div id="accordion2" className="faq_content2">
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.4s"
                          >
                            <div className="card-header" id="headingFive">
                              <h6 className="mb-0" style={{color: '#000000'}}>
                                {" "}
                                <a
                                  data-toggle="collapse"
                                  href="#collapseFive"
                                  aria-expanded="true"
                                  aria-controls="collapseFive"
                                  style={{color: '#000000'}}
                                >
                                  What I need to Join SmartEdge?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseFive"
                              className="collapse show"
                              aria-labelledby="headingFive"
                              data-parent="#accordion2"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                It is enough to have a computer or smartphone
                                with Tron wallet. We also recommend installing
                                Telegram instant messenger for the convenience
                                of communication with other participants as well
                                as official chats!
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.6s"
                          >
                            <div className="card-header" id="headingSix">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseSix"
                                  aria-expanded="false"
                                  aria-controls="collapseSix"
                                  style={{color: '#000000'}}
                                >
                                  And if the project collapses, will I lose
                                  money?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseSix"
                              className="collapse"
                              aria-labelledby="headingSix"
                              data-parent="#accordion2"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                Again NO! The smart contract is absolutely
                                transparent, all data is recorded in the
                                blockchain chain. No scam or fraud. The project
                                cannot fail. It will work as long as the
                                blockchain exists, even if the site is closed.{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.8s"
                          >
                            <div className="card-header" style={{color: '#000000'}} id="headingSeven">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseSeven"
                                  aria-expanded="false"
                                  aria-controls="collapseSeven"
                                  style={{color: '#000000'}}
                                >
                                  How can I be sure that my wallet will not be
                                  blocked?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseSeven"
                              className="collapse"
                              aria-labelledby="headingSeven"
                              data-parent="#accordion2"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                In the cryptocurrency industry, there is no such
                                thing as wallet blocking. This is technically
                                impossible even by the creators of Tron Created
                                by you the TRX-wallet belongs only to you.
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="1s"
                          >
                            <div className="card-header" id="headingEight">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseEight"
                                  aria-expanded="false"
                                  aria-controls="collapseEight"
                                  style={{color: '#000000'}}
                                >
                                  Are there any fees or charges in SmartEdge?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseEight"
                              className="collapse"
                              aria-labelledby="headingEight"
                              data-parent="#accordion2"
                              style={{color: '#000000'}}
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                While registering or upgrading the User need to
                                pay only the amount mentioned for the Level.
                                Then the profit is sent to the uplines after
                                deducting the admin fees. The admin fees consist
                                of 10% operations fees and 6% BTT Token Fees.
                                The BTT token is airdropped to your wallet
                                automatically with each registration and upgrade
                                transaction.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab2" role="tabpanel">
                    <div className="row">
                      <div className="col-md-6">
                        <div id="accordion3" className="faq_content2">
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.4s"
                          >
                            <div className="card-header" id="headingNine">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  data-toggle="collapse"
                                  href="#collapseNine"
                                  aria-expanded="true"
                                  aria-controls="collapseNine"
                                  style={{color: '#000000'}}
                                >
                                  How to register in SmartEdge?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseNine"
                              className="collapse show"
                              aria-labelledby="headingNine"
                              data-parent="#accordion3"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                To do registration, you simply need to make
                                payment of the first level. To do this, Click on
                                'Register' and follow further instructions.
                                After successful payment, you take a position in
                                the structure and are considered a full member.
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.6s"
                          >
                            <div className="card-header" id="headingTen">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseTen"
                                  aria-expanded="false"
                                  aria-controls="collapseTen"
                                  style={{color: '#000000'}}
                                >
                                  Is it possible to earn passively?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseTen"
                              className="collapse"
                              aria-labelledby="headingTen"
                              data-parent="#accordion3"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                In addition to personal invitations, partners
                                can appear in your structure in two ways: These
                                are “Overflows” and “Free Partners”. Therefore,
                                it can be argued that the system has the
                                possibility of passive earnings. But this does
                                not guarantee you a quick decent income, which
                                other successful participants who are active can
                                receive
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.8s"
                          >
                            <div className="card-header" id="headingEleven">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseEleven"
                                  aria-expanded="false"
                                  aria-controls="collapseEleven"
                                  style={{color: '#000000'}}
                                >
                                  What are overflows?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseEleven"
                              className="collapse"
                              aria-labelledby="headingEleven"
                              data-parent="#accordion3"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                Overflow is a process that occurs when a
                                participant registers for an upline, in which
                                the first level is filled by two participants.
                                The next new member falls into the structure of
                                this upline below, in the nearest free place..
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="1s"
                          >
                            <div className="card-header" id="headingTwelve" style={{color: '#000000'}}>
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseTwelve"
                                  aria-expanded="false"
                                  aria-controls="collapseTwelve"
                                  style={{color: '#000000'}}
                                >
                                  How to add funds to my TRX wallet?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseTwelve"
                              className="collapse"
                              aria-labelledby="headingTwelve"
                              data-parent="#accordion3"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                There are many exchangers. Reliable and proven
                                exchangers can be found on the Google. If this
                                is your first time making an exchange, follow
                                these instructions.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div id="accordion4" className="faq_content2">
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.4s"
                          >
                            <div className="card-header" id="headingThirteen">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  data-toggle="collapse"
                                  href="#collapseThirteen"
                                  aria-expanded="true"
                                  aria-controls="collapseThirteen"
                                  style={{color: '#000000'}}
                                >
                                  What are Levels?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseThirteen"
                              className="collapse show"
                              aria-labelledby="headingThirteen"
                              data-parent="#accordion4"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                Level is a status that gives the right to
                                receive remuneration from a partner in its
                                structure of the relevant lines..
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.6s"
                          >
                            <div className="card-header" id="headingFourteen">
                              <h6 className="mb-0" style={{color: '#000000'}}>
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseFourteen"
                                  aria-expanded="false"
                                  aria-controls="collapseFourteen"
                                  style={{color: '#000000'}}
                                >
                                  If I have an 2 level, can I immediately buy
                                  the 4 level without having the 3 level?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseFourteen"
                              className="collapse"
                              aria-labelledby="headingFourteen"
                              data-parent="#accordion4"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                Levels are bought only sequentially and in
                                order. If you try to buy the 4 level without the
                                3 level, the smart contract will not process
                                such a transfer. Money will not go anywhere and
                                will remain with you.
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.8s"
                          >
                            <div className="card-header" id="headingFifteen">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseFifteen"
                                  aria-expanded="false"
                                  aria-controls="collapseFifteen"
                                  style={{color: '#000000'}}
                                >
                                  What happens if my partner buys a level before
                                  me?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseFifteen"
                              className="collapse"
                              aria-labelledby="headingFifteen"
                              data-parent="#accordion4"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                The money will be redirected to your upline of
                                the same line as your partner. If you buy levels
                                on time, this will not happen. If this happened,
                                it’s not scary. If you find this in time, then
                                after activating the level, continue to receive
                                the remaining transfers for this level
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="1s"
                          >
                            <div className="card-header" id="headingSixteen">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseSixteen"
                                  aria-expanded="false"
                                  aria-controls="collapseSixteen"
                                  style={{color: '#000000'}}
                                >
                                  Why do I need to renew levels every 45 days?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseSixteen"
                              className="collapse"
                              aria-labelledby="headingSixteen"
                              data-parent="#accordion4"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                Thanks to this rule, your profit will be
                                repeated every 45 days, since after your
                                extension the partners in your structure will do
                                the same.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab3" role="tabpanel">
                    <div className="row">
                      <div className="col-md-6">
                        <div id="accordion5" className="faq_content2">
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.4s"
                          >
                            <div className="card-header" id="headingSeventeen">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  data-toggle="collapse"
                                  href="#collapseSeventeen"
                                  aria-expanded="true"
                                  aria-controls="collapseSeventeen"
                                  style={{color: '#000000'}}
                                >
                                  What will happen if you do not extend the
                                  level and it is deactivated?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseSeventeen"
                              className="collapse show"
                              aria-labelledby="headingSeventeen"
                              data-parent="#accordion5"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                New bitcoins are generated by a competitive and
                                decentralized process called "mining". This
                                process involves that individuals are rewarded
                                by the network for their services. Bitcoin
                                miners are processing transactions and securing
                                the network using specialized hardware and are
                                collecting new bitcoins in exchange.
                              </div>
                            </div>
                          </div>
                          {/* <!-- <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                          <div className="card-header" id="headingEighteen">
                                            <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">Why do bitcoins have value?</a> </h6>
                                          </div>
                                          <div id="collapseEighteen" className="collapse" aria-labelledby="headingEighteen" data-parent="#accordion5">
                                            <div className="card-body">Bitcoins have value because they are useful as a form of money. Bitcoin has the characteristics of money (durability, portability, fungibility, scarcity, divisibility, and recognizability) based on the properties of mathematics rather than relying on physical properties (like gold and silver) or trust in central authorities (like fiat currencies). In short, Bitcoin is backed by mathematics. </div>
                                          </div>
                                        </div>  --> */}
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.8s"
                          >
                            <div className="card-header" id="headingNineteen">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseNineteen"
                                  aria-expanded="false"
                                  aria-controls="collapseNineteen"
                                  style={{color: '#000000'}}
                                >
                                  What determines bitcoin's price?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseNineteen"
                              className="collapse"
                              aria-labelledby="headingNineteen"
                              data-parent="#accordion5"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                The price of a bitcoin is determined by supply
                                and demand. When demand for bitcoins increases,
                                the price increases, and when demand falls, the
                                price falls. There is only a limited number of
                                bitcoins in circulation and new bitcoins are
                                created at a predictable and decreasing rate
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="1s"
                          >
                            <div className="card-header" id="headingTwenty">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapseTwenty"
                                  aria-expanded="false"
                                  aria-controls="collapseTwenty"
                                  style={{color: '#000000'}}
                                >
                                  Can bitcoins become worthless?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapseTwenty"
                              className="collapse"
                              aria-labelledby="headingTwenty"
                              data-parent="#accordion5"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                Yes. History is littered with currencies that
                                failed and are no longer used, such as the
                                German Mark during the Weimar Republic and, more
                                recently, the Zimbabwean dollar.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div id="accordion6" className="faq_content2">
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.4s"
                          >
                            <div className="card-header" id="headingNine">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  data-toggle="collapse"
                                  href="#collapse21"
                                  aria-expanded="true"
                                  aria-controls="collapse21"
                                  style={{color: '#000000'}}
                                >
                                  How are bitcoins created?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse21"
                              className="collapse show"
                              aria-labelledby="heading21"
                              data-parent="#accordion6"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                New bitcoins are generated by a competitive and
                                decentralized process called "mining". This
                                process involves that individuals are rewarded
                                by the network for their services. Bitcoin
                                miners are processing transactions and securing
                                the network using specialized hardware and are
                                collecting new bitcoins in exchange.
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.6s"
                          >
                            <div className="card-header" id="heading22">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse22"
                                  aria-expanded="false"
                                  aria-controls="collapse22"
                                  style={{color: '#000000'}}
                                >
                                  Why do bitcoins have value?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse22"
                              className="collapse"
                              aria-labelledby="heading22"
                              data-parent="#accordion6"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                Bitcoins have value because they are useful as a
                                form of money. Bitcoin has the characteristics
                                of money (durability, portability, fungibility,
                                scarcity, divisibility, and recognizability)
                                based on the properties of mathematics rather
                                than relying on physical properties (like gold
                                and silver) or trust in central authorities
                                (like fiat currencies). In short, Bitcoin is
                                backed by mathematics.{" "}
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.8s"
                          >
                            <div className="card-header" id="heading23">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse23"
                                  aria-expanded="false"
                                  aria-controls="collapse23"
                                  style={{color: '#000000'}}
                                >
                                  What determines bitcoin's price?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse23"
                              className="collapse"
                              aria-labelledby="heading23"
                              data-parent="#accordion6"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                The price of a bitcoin is determined by supply
                                and demand. When demand for bitcoins increases,
                                the price increases, and when demand falls, the
                                price falls. There is only a limited number of
                                bitcoins in circulation and new bitcoins are
                                created at a predictable and decreasing rate
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="1s"
                          >
                            <div className="card-header" id="heading24">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse24"
                                  aria-expanded="false"
                                  aria-controls="collapse24"
                                  style={{color: '#000000'}}
                                >
                                  Can bitcoins become worthless?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse24"
                              className="collapse"
                              aria-labelledby="heading24"
                              data-parent="#accordion6"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                Yes. History is littered with currencies that
                                failed and are no longer used, such as the
                                German Mark during the Weimar Republic and, more
                                recently, the Zimbabwean dollar.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab4" role="tabpanel">
                    <div className="row">
                      <div className="col-md-6">
                        <div id="accordion7" className="faq_content2">
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.4s"
                          >
                            <div className="card-header" id="heading25">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  data-toggle="collapse"
                                  href="#collapse25"
                                  aria-expanded="true"
                                  aria-controls="collapse25"
                                  style={{color: '#000000'}}
                                >
                                  Is Bitcoin legal?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse25"
                              className="collapse show"
                              aria-labelledby="heading25"
                              data-parent="#accordion7"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                To the best of our knowledge, Bitcoin has not
                                been made illegal by legislation in most
                                jurisdictions. However, some jurisdictions (such
                                as Argentina and Russia) severely restrict or
                                ban foreign currencies. Other jurisdictions
                                (such as Thailand) may limit the licensing of
                                certain entities such as Bitcoin exchanges.
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.6s"
                          >
                            <div className="card-header" id="heading26">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse26"
                                  aria-expanded="false"
                                  aria-controls="collapse26"
                                  style={{color: '#000000'}}
                                >
                                  Is Bitcoin useful for illegal activities?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse26"
                              className="collapse"
                              aria-labelledby="heading26"
                              data-parent="#accordion7"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                Bitcoin is money, and money has always been used
                                both for legal and illegal purposes. Cash,
                                credit cards and current banking systems widely
                                surpass Bitcoin in terms of their use to finance
                                crime. Bitcoin can bring significant innovation
                                in payment systems and the benefits of such
                                innovation are often considered to be far beyond
                                their potential drawbacks.
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.8s"
                          >
                            <div className="card-header" id="heading27">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse27"
                                  aria-expanded="false"
                                  aria-controls="collapse27"
                                  style={{color: '#000000'}}
                                >
                                  Can Bitcoin be regulated?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse27"
                              className="collapse"
                              aria-labelledby="heading27"
                              data-parent="#accordion7"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                The Bitcoin protocol itself cannot be modified
                                without the cooperation of nearly all its users,
                                who choose what software they use. Attempting to
                                assign special rights to a local authority in
                                the rules of the global Bitcoin network is not a
                                practical possibility.
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="1s"
                          >
                            <div className="card-header" id="heading28">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse28"
                                  aria-expanded="false"
                                  aria-controls="collapse28"
                                  style={{color: '#000000'}}
                                >
                                  What about Bitcoin and taxes?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse28"
                              className="collapse"
                              aria-labelledby="heading28"
                              data-parent="#accordion7"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                Bitcoin is not a fiat currency with legal tender
                                status in any jurisdiction, but often tax
                                liability accrues regardless of the medium used.
                                There is a wide variety of legislation in many
                                different jurisdictions which could cause
                                income, sales, payroll, capital gains, or some
                                other form of tax liability to arise with
                                Bitcoin.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div id="accordion8" className="faq_content2">
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.4s"
                          >
                            <div className="card-header" id="heading29">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  data-toggle="collapse"
                                  href="#collapse29"
                                  aria-expanded="true"
                                  aria-controls="collapse29"
                                  style={{color: '#000000'}}
                                >
                                  Is Bitcoin legal?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse29"
                              className="collapse show"
                              aria-labelledby="heading29"
                              data-parent="#accordion8"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                To the best of our knowledge, Bitcoin has not
                                been made illegal by legislation in most
                                jurisdictions. However, some jurisdictions (such
                                as Argentina and Russia) severely restrict or
                                ban foreign currencies. Other jurisdictions
                                (such as Thailand) may limit the licensing of
                                certain entities such as Bitcoin exchanges.
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.6s"
                          >
                            <div className="card-header" id="heading30">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse30"
                                  aria-expanded="false"
                                  aria-controls="collapse30"
                                  style={{color: '#000000'}}
                                >
                                  Is Bitcoin useful for illegal activities?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse30"
                              className="collapse"
                              aria-labelledby="heading30"
                              data-parent="#accordion8"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                Bitcoin is money, and money has always been used
                                both for legal and illegal purposes. Cash,
                                credit cards and current banking systems widely
                                surpass Bitcoin in terms of their use to finance
                                crime. Bitcoin can bring significant innovation
                                in payment systems and the benefits of such
                                innovation are often considered to be far beyond
                                their potential drawbacks.
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="0.8s"
                          >
                            <div className="card-header" id="heading31">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse31"
                                  aria-expanded="false"
                                  aria-controls="collapse31"
                                  style={{color: '#000000'}}
                                >
                                  Can Bitcoin be regulated?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse31"
                              className="collapse"
                              aria-labelledby="heading31"
                              data-parent="#accordion8"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                The Bitcoin protocol itself cannot be modified
                                without the cooperation of nearly all its users,
                                who choose what software they use. Attempting to
                                assign special rights to a local authority in
                                the rules of the global Bitcoin network is not a
                                practical possibility.
                              </div>
                            </div>
                          </div>
                          <div
                            className="card"
                            // data-animation="fadeInUp"
                            // data-animation-delay="1s"
                          >
                            <div className="card-header" id="heading32">
                              <h6 className="mb-0">
                                {" "}
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse32"
                                  aria-expanded="false"
                                  aria-controls="collapse32"
                                  style={{color: '#000000'}}
                                >
                                  What about Bitcoin and taxes?
                                </a>{" "}
                              </h6>
                            </div>
                            <div
                              id="collapse32"
                              className="collapse"
                              aria-labelledby="heading32"
                              data-parent="#accordion8"
                            >
                              <div className="card-body" style={{color: '#000000'}}>
                                {" "}
                                Bitcoin is not a fiat currency with legal tender
                                status in any jurisdiction, but often tax
                                liability accrues regardless of the medium used.
                                There is a wide variety of legislation in many
                                different jurisdictions which could cause
                                income, sales, payroll, capital gains, or some
                                other form of tax liability to arise with
                                Bitcoin.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact_section small_pt small_pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_border text-center">
                <h4
                  // className="animation"
                  // data-animation="fadeInUp"
                  // data-animation-delay="0.2s"
                >
                  Get In Touch With Smart Support!
                </h4>
              </div>
            </div>
          </div>
          <div className="row align-items-center small_space">
            <div className="col-lg-4 col-md-6 offset-lg-2">
              <div
                className="bg_navy_blue_dark contact_box_s2"
                // data-animation="fadeInLeft"
                // data-animation-delay="0.1s"
              >
                <div className="contact_title">
                  <h5
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    Contact With Us
                  </h5>
                  <p
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.4s"
                  >
                    Our office is located in a beautiful building and garden
                  </p>
                </div>
                <ul className="list_none contact_info mt-margin">
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.4s"
                  >
                    <i className="ion-ios-location"></i>
                    <div className="contact_detail">
                      {" "}
                      <span>Address</span>
                      <p>22 International Division Via G.B. Pirelli</p>
                    </div>
                  </li>
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.5s"
                  >
                    <i className="ion-android-call"></i>
                    <div className="contact_detail">
                      {" "}
                      <span>Phone</span>
                      <p>+23 0123 4567</p>
                    </div>
                  </li>
                  <li
                    // className="animation"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.6s"
                  >
                    <i className="ion-ios-email"></i>
                    <div className="contact_detail">
                      {" "}
                      <span>Email-id</span>
                      <p>Yourmail@gmail.com</p>
                    </div>
                  </li>
                </ul>
                <div className="contct_follow pt-2 pt-md-4">
                  <span
                    className="text-uppercase"
                    // data-animation="fadeInUp"
                    // data-animation-delay="0.2s"
                  >
                    Follow Us
                  </span>
                  <ul className="list_none social_icon">
                    <li
                      // className="animation"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.4s"
                    >
                      <a href="#">
                        <i className=" fa fa-facebook"></i>
                      </a>
                    </li>
                    <li
                      // className="animation"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.5s"
                    >
                      <a href="#">
                        <i className=" fa fa-twitter"></i>
                      </a>
                    </li>
                    <li
                      // className="animation"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.6s"
                    >
                      <a href="#">
                        <i className=" fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li
                      // className="animation"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.7s"
                    >
                      <a href="#">
                        <i className=" fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li
                      // className="animation"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.8s"
                    >
                      <a href="#">
                        <i className=" fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div
                className="pt-4 pt-md-0"
                // data-animation="fadeInRight"
                // data-animation-delay="0.1s"
              >
                <form method="post" name="enq" className="field_form">
                  <div className="row">
                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.4s"
                    >
                      <input
                        type="text"
                        required
                        placeholder="Enter Name *"
                        id="first-name"
                        className="form-control"
                        name="name"
                      />
                    </div>
                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.6s"
                    >
                      <input
                        type="email"
                        required
                        placeholder="Enter Email *"
                        id="email"
                        className="form-control"
                        name="email"
                      />
                    </div>
                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="0.8s"
                    >
                      <input
                        type="text"
                        required
                        placeholder="Enter Subject"
                        id="subject"
                        className="form-control"
                        name="subject"
                      />
                    </div>
                    <div
                      className="form-group col-md-12"
                      // data-animation="fadeInUp"
                      // data-animation-delay="1s"
                    >
                      <textarea
                        required
                        placeholder="Message *"
                        id="description"
                        className="form-control"
                        name="message"
                      ></textarea>
                    </div>
                    <div
                      className="col-md-12 text-center"
                      // data-animation="fadeInUp"
                      // data-animation-delay="1.2s"
                    >
                      <button
                        type="submit"
                        title="Submit Your Message!"
                        className="btn btn-default btn-radius btn-block"
                        id="submitButton"
                        name="submit"
                        value="Submit"
                      >
                        Submit <i className="ion-ios-arrow-thin-right"></i>
                      </button>
                    </div>
                    <div className="col-md-12">
                      <div
                        id="alert-msg"
                        className="alert-msg text-center"
                      ></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
