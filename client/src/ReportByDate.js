import React, { Component } from "react";

class ReportByDate extends Component {
  convertDatetoMonthDay = dateIn => {
    const monthsArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    // console.log(dateIn.slice(2, 4), dateIn.slice(4));
    return monthsArr[Number(dateIn.slice(2, 4)) - 1] + " " + dateIn.slice(4);
  };
  render() {
    let dateSympReport = this.props.data[this.props.date].reduce(
      (accum, curr) => {
        accum.adhd += curr.adhd === "true";
        accum.depression += curr.depression === "true";
        accum.anxiety += curr.anxiety === "true";
        return accum;
      },
      { adhd: 0, depression: 0, anxiety: 0 }
    );
    return (
      <div className="container-inner">
        <h2>Class Date: </h2>
        <h1 className="bold">{this.convertDatetoMonthDay(this.props.date)}</h1>
        <p>{this.props.data[this.props.date].length} Students Present</p>
        <p>
          ADHD: {dateSympReport.adhd} of{" "}
          {this.props.data[this.props.date].length} students
        </p>
        <p>
          Depression: {dateSympReport.depression} of{" "}
          {this.props.data[this.props.date].length} students
        </p>
        <p>
          Anxiety: {dateSympReport.anxiety} of{" "}
          {this.props.data[this.props.date].length} students
        </p>
      </div>
    );
  }
}

export default ReportByDate;
