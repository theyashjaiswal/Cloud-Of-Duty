import React, { Component } from "react";

class Hero extends Component {
  render() {
    const { heading, paragraph, button } = this.props;
    return (
      <div class="bg-dark text-secondary px-4 py-5 text-center">
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">{heading}</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4" style={{ color: "white" }}>
              {paragraph}
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a
                type="button"
                class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                href="/upload"
              >
                {button}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
