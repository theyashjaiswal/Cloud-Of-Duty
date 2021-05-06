import Meta from "../components/Meta";
import Hero from "../components/Hero";
import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import HomePageImage1 from "../images/homepage_1.png";
import HomePageImage2 from "../images/homepage_2.png";
import ProfileImage1 from "../images/team_robinder.jpeg";
import ProfileImage2 from "../images/team_vishal.jpeg";
import ProfileImage3 from "../images/team_yash.jpg";

const Home = () => {
  return (
    <div>
      <Meta title={"Cloud of Duty"} />
      <Hero
        heading="Welcome to Cloud Of Duty"
        paragraph="Upload Your Favourite Song to seperate vocals from the Audio Track."
        button="Get
      Started"
      />
      <Menu></Menu>

      <hr />
      <Container>
        <Header head={"How it Works?"} description={""} />
        <Row>
          <Col lg="7">
            <h2 className="mt-5">
              Step1. <br></br>
              <span className="text-muted">
                Enter your email address and upload the audio file.
              </span>
            </h2>
            {/* <p className="lead">text here</p> */}
          </Col>
          <Col lg="5">
            <Image fluid src={HomePageImage1} />
          </Col>
        </Row>
        <Row>
          <Col lg="7" className="order-lg-2">
            <h2 className="mt-5">
              Step2. <br></br>
              <span className="text-muted">
                The link for the processed files will be sent to your email.
              </span>
            </h2>
            {/* <p className="lead">
              The link for the processed files will be sent to your email.
            </p> */}
          </Col>
          <Col lg="5" className="order-lg-1">
            <Image fluid src={HomePageImage2} />
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <Header head={"Meet Our Team"} description={""} />
        <Row>
          <Col lg="4" className="text-center">
            <Image
              fluid
              roundedCircle
              src={ProfileImage1}
              style={{ width: "160px", height: "160px" }}
            />
            <h3>Robinder Dhillon</h3>
            <p>Developer</p>
          </Col>
          <Col lg="4" className="text-center">
            <Image
              fluid
              roundedCircle
              src={ProfileImage2}
              style={{ width: "160px", height: "160px" }}
            />
            <h3>Vishal Sancheti</h3>
            <p>Developer</p>
          </Col>
          <Col lg="4" className="text-center">
            <Image
              fluid
              roundedCircle
              src={ProfileImage3}
              style={{ width: "160px", height: "160px" }}
            />
            <h3>Yash Jaiswal</h3>
            <p>Developer</p>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Home;
