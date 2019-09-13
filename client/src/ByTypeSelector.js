import React, { Component } from "react";

class ByTypeSelector extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    let capReportType =
      this.props.reportType.charAt(0).toUpperCase() +
      this.props.reportType.slice(1);
    return (
      <div className="container-inner">
        <h3>Show Symptoms by {capReportType}</h3>
        <select value={this.state.value} onChange={this.handleChange}>
          {this.props.data}
        </select>
        <div className="spacer10" />
        <button
          onClick={() =>
            this.props.addNew(this.state.value, this.props.reportType)
          }
        >
          Submit
        </button>
      </div>
    );
  }
}

export default ByTypeSelector;
