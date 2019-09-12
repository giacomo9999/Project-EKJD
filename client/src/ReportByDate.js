import React, { Component } from "react";

class ReportByDate extends Component {
  render() {
    let dateSympReport = this.props.data[this.props.date].reduce(
      (accum, curr) => {
        accum.adhd += curr.adhd;
        accum.depression += curr.depression;
        accum.anxiety += curr.anxiety;
        return accum;
      },
      { adhd: 0, depression: 0, anxiety: 0 }
    );
    return (
      <div className="container-inner">
        <h2>Date: {this.props.date}</h2>
        <h3>{this.props.data[this.props.date].length} Students Present</h3>
        <h3>
          ADHD: {dateSympReport.adhd} of{" "}
          {this.props.data[this.props.date].length} students
        </h3>
        <h3>
          Depression: {dateSympReport.depression} of{" "}
          {this.props.data[this.props.date].length} students
        </h3>
        <h3>
          Anxiety: {dateSympReport.anxiety} of{" "}
          {this.props.data[this.props.date].length} students
        </h3>
      </div>
    );
  }
}

export default ReportByDate;
