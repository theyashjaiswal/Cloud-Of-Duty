import Meta from "../components/Meta";
import Hero from "../components/Hero";
import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/MenuUpload";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import axios from "axios";

class Upload extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      files: {
        label: "only .mp3 files are supported!!",
        selectedFiles: null,
        loaded: 0,
      },
    };
  }

  onFileUploadChange = (event) => {
    event.preventDefault();
    var filename = event.target.files[0].name;

    this.setState({
      files: {
        label: filename,
        selectedFiles: event.target.files,
        loaded: 1,
      },
    });
  };

  uploadFile = (event) => {
    event.preventDefault();
    console.table(event.target);
    const formData = new FormData(event.target);
    const conf = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const confOne = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        AuthorizationToken: "Y2xvdWRvZmR1dHk=",
      },
    };
    axios
      .get(
        "https://7fvj26m2nb.execute-api.us-east-1.amazonaws.com/lambdaAuthPy",
        confOne
      )
      .then((response) => {
        const responseObj = response;
        if (responseObj.data.success == true) {
          console.log(responseObj.data.api_url);
          axios
            .post(responseObj.data.api_url, formData, conf)
            .then((response) => {
              var responseUpload = response;
              console.log("resbody" + responseUpload.data.id);
              console.log("email" + responseUpload.data.email);
              let timerInterval;
              Swal.fire({
                title: "Please Wait",
                html: "Your Request is Processing!!!! <b></b> milliseconds.",
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                  timerInterval = setInterval(() => {
                    const content = Swal.getContent();
                    if (content) {
                      const b = content.querySelector("b");
                      if (b) {
                        b.textContent = Swal.getTimerLeft();
                      }
                    }
                  }, 100);
                },
                willClose: () => {
                  clearInterval(timerInterval);
                },
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log("I was closed by the timer");
                }
                this.props.history.push({
                  pathname: "/confirmation",
                  data: {
                    email: responseUpload.data.email,
                    confirmationid: responseUpload.data.id,
                  },
                });
              });
            })
            .catch((error) => {
              Swal.fire("Your request failed!! Please try later!!!!");
            });
        }
      })
      .catch((error) => {
        Swal.fire("Your request failed!! Please try later!!!!");
      });

    //add alert if any error from API
  };

  render() {
    return (
      <div>
        <Meta title="Cloud of Duty" />
        <Menu></Menu>
        <Container fluid className="pt-5 mt-5" style={{ minHeight: "85vh" }}>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={this.uploadFile}>
                <Card>
                  <Card.Header>
                    {" "}
                    <h4>Upload your audio file </h4>
                  </Card.Header>
                  <Card.Body>
                    <Form.Group as={Row} controlId="email">
                      <Form.Label column md={2}>
                        {" "}
                        Email
                      </Form.Label>
                      <Col md={10}>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email here.."
                          name="email"
                          required
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="uploadFile">
                      <Form.Label column md={2}>
                        Audio File
                      </Form.Label>
                      <Col md={10}>
                        <Form.File
                          type="file"
                          id="file"
                          name="file"
                          label={this.state.files.label}
                          custom
                          accept=".mp3"
                          onChange={this.onFileUploadChange}
                          value={this.state.selectedFiles}
                          required
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group id="agreeTermsAndConditions">
                      <Form.Check
                        type="checkbox"
                        label="By selecting this checkbox, you agree that we upload this file to our servers for processing."
                        required
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ float: "right" }}
                    >
                      Submit
                    </Button>
                  </Card.Body>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default Upload;
