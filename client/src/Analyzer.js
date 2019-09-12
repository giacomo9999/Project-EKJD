import React, { Component } from "react";
import ReportByStudent from "./ReportByStudent";
import ReportByDate from "./ReportByDate";

class Analyzer extends Component {
  state = { value: "" };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  handleNameSubmit = event => {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  };

  render() {
    // extract student names from this.props.data
    let keysObj = Object.keys(this.props.data)[0];
    const nameArr = this.props.data[keysObj].map((entry, index) => {
      return (
        <option key={entry.id} value={entry.student_name}>
          {entry.student_name}
        </option>
      );
    });

    return (
      <div>
        <ReportByStudent data={this.props.data} name="Irena J. Davis" />
        <ReportByDate data={this.props.data} date="190913" />

        <select value={this.state.value} onChange={this.handleChange}>
          {nameArr}
        </select>

        <div className="spacer10" />
        <button onClick={this.handleNameSubmit}>Submit</button>
      </div>
    );
  }
}

export default Analyzer;
