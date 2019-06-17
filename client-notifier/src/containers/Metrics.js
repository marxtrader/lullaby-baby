import React, { Component } from "react";
//import company from "./mockData/company"
import "./Metrics.css";

export default class Metrics extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
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