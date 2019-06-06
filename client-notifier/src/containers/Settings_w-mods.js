import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import config from "../config";
import "./Settings.css";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="Settings">
        <LinkContainer to="/settings/email">
          <LoaderButton
            block
            bsSize="large"
            text="Change Email"
          />
        </LinkContainer>
        <LinkContainer to="/settings/password">
          <LoaderButton
            block
            bsSize="large"
            text="Change Password"
          />
        </LinkContainer>
        <LinkContainer to="/settings/billing">
          <LoaderButton
            block
            bsSize="large"
            text="Billing"
          />
        </LinkContainer>
      </div>
    );
  }
}