import React, { Component } from "react";
//import { LinkContainer } from "react-router-bootstrap";
//import LoaderButton from "../components/LoaderButton";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import config from "../config";
import "./Billing.css";

export default class Billing extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  handleFormSubmit = async (storage, { token, error }) => {
    if (error) {
      alert(error);
      return;
    }
  
    this.setState({ isLoading: true });
  
    try {
      await this.billUser({
        storage,
        source: token.id
      });
  
      alert("Your card has been charged successfully!");
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }
  
  render() {
    return (
      <div className="Billing">
        <StripeProvider apiKey={config.STRIPE_KEY}>
          <Elements>
            <BillingForm
              loading={this.state.isLoading}
              onSubmit={this.handleFormSubmit}
            />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}