import React, { Component } from "react";

class ByDateSelector extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="container-inner">
        <select value={this.state.value} onChange={this.handleChange}>
          {this.props.dates}
        </select>
        <div className="spacer10" />
        <button onClick={() => this.props.addDate(this.state.value)}>
          Submit
        </button>
      </div>
    );
  }
}

export default ByDateSelector;
