import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import config from "../config";
import "./Metrics.css";

export default class Settings extends Component {
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
      <div className="Metrics">
        <h2>This is where we will put the statistics of the calls texts and emails.</h2><br />
        <h3>Number of communications and their results</h3>
        <ul>
          <li>Total Calls, Texts and Emails</li>
          <li>Answered and confirmed</li>
          <li>Answered and canceled</li>
          <li>left Message</li>
          <li>no answer</li>
          <li>other</li>
        </ul>
      </div>
    );
  }
}