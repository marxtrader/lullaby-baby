import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Configure.css";

export default class Configure extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="Configure">
        <LinkContainer to="/configure/voice">
          <LoaderButton
            block
            bsSize="large"
            text="Voice Templates"
          />
        </LinkContainer>
        <LinkContainer to="/configure/text">
          <LoaderButton
            block
            bsSize="large"
            text="Message Templates"
          />
        </LinkContainer>
        <LinkContainer to="./configure/locations">
          <LoaderButton
            block
            bsSize="large"
            text=" Edit Locations"
          />
        </LinkContainer>
        <LinkContainer to="/configure/caregivers">
          <LoaderButton
            block
            bsSize="large"
            text="Edit Care Givers"
          />
        </LinkContainer>
      </div>
    );
  }
}