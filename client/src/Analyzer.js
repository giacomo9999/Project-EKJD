import React, { Component } from "react";

class Analyzer extends Component {
  reportByDate = dateIn => {
    let dateSympReport = this.props.data[dateIn].reduce(
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
        <h2>Date: {dateIn}</h2>
        <h3>{this.props.data[dateIn].length} Students Present</h3>
        <h3>
          ADHD: {dateSympReport.adhd} of {this.props.data[dateIn].length}{" "}
          students
        </h3>
        <h3>
          Depression: {dateSympReport.depression} of{" "}
          {this.props.data[dateIn].length} students
        </h3>
        <h3>
          Anxiety: {dateSympReport.anxiety} of {this.props.data[dateIn].length}{" "}
          students
        </h3>
      </div>
    );
  };

  reportByStudent = studentName => {
    const studentReport = {
      daysPresent: 0,
      adhd: 0,
      depression: 0,
      anxiety: 0
    };
    Object.keys(this.props.data).forEach(date =>
      this.props.data[date].forEach(student => {
        if (student.student_name === studentName) {
          studentReport.daysPresent += 1;
          studentReport.adhd += student.adhd;
          studentReport.depression += student.depression;
          studentReport.anxiety += student.anxiety;
        }
      })
    );
    return (
      <div className="container-inner">
        <h2>Student Name: {studentName}</h2>
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
  };
  render() {
    console.log(this.props.data);
    return (
      <div>
        {/* <h2>I Am The Data Analyzer</h2> */}
        {this.reportByDate(190912)}
        {this.reportByStudent("Jeff L. Fletcher")}
      </div>
    );
  }
}

export default Analyzer;
