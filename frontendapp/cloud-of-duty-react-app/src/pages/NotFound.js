import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React, { Component } from "react";

const NotFound = () => {
  return (
    <Container fluid="md" className="mt-5">
      <Row>
        <Col>
          <div className="card">
            <div className="card-header">ERROR!!!!</div>
            <div className="card-body">
              <h5 className="card-title">404 Page Not Found</h5>
              <p className="card-text"></p>
              <LinkContainer to="/">
                <button className="btn btn-primary">
                  Go Back to Home Page
                </button>
              </LinkContainer>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
