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
          studentReport.adhd += student.adhd;
          studentReport.depression += student.depression;
          studentReport.anxiety += student.anxiety;
        }
      })
    );
    return (
      <div className="container-inner">
        <h2>Student Name: {this.props.name}</h2>
        <h3>
          ADHD: {studentReport.adhd} of {studentReport.daysPresent} days present
        </h3>
        <h3>
          Depression: {studentReport.depression} of {studentReport.daysPresent}{" "}
          days present
        </h3>
        <h3>
          Anxiety: {studentReport.anxiety} of {studentReport.daysPresent} days
          present
        </h3>
      </div>
    );
  }
}

export default reportByStudent;
