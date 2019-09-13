import React, { Component } from "react";

class reportByStudent extends Component {
  render() {
    const studentReport = {
      daysPresent: 0,
      adhd: 0,
      depression: 0,
      anxiety: 0
    };

    Object.keys(this.props.data).forEach(date =>
      this.props.data[date].forEach(student => {
        if (student.student_name === this.props.name) {
          studentReport.daysPresent += 1;
          studentReport.adhd += student.adhd === "true";
          studentReport.depression += student.depression === "true";
          studentReport.anxiety += student.anxiety === "true";
        }
      })
    );
    return (
      <div className="container-inner">
        <h2>
          Student Name: <h2 className="bold">{this.props.name}</h2>
        </h2>
        <p>
          ADHD: {studentReport.adhd} of {studentReport.daysPresent} days present
        </p>
        <p>
          Depression: {studentReport.depression} of {studentReport.daysPresent}{" "}
          days present
        </p>
        <p>
          Anxiety: {studentReport.anxiety} of {studentReport.daysPresent} days
          present
        </p>
      </div>
    );
  }
}

export default reportByStudent;
