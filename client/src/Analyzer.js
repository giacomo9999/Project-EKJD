import React, { Component } from "react";

class Analyzer extends Component {
  showStudentsOnDate = dateIn => {
    // const studentsPresent = this.props.data[dateIn].map(entry => {
    //   return <li key={entry.id}>{entry.student_name}</li>;
    // });
    // return studentsPresent;

    let studentSympReport = this.props.data[dateIn].reduce(
      (accum, curr, index) => {
        accum.adhd += curr.adhd;
        accum.depression += curr.depression;
        accum.anxiety += curr.anxiety;
        return accum;
      },
      { adhd: 0, depression: 0, anxiety: 0 }
    );
    return (
      <div>
        <h2>{dateIn}</h2>
        <h3>
          ADHD: {studentSympReport.adhd} of {this.props.data[dateIn].length}
        </h3>
        <h3>
          Depression: {studentSympReport.depression} of{" "}
          {this.props.data[dateIn].length}
        </h3>
        <h3>
          Anxiety: {studentSympReport.anxiety} of{" "}
          {this.props.data[dateIn].length}
        </h3>
      </div>
    );
  };
  render() {
    console.log(this.props.data);
    return (
      <div className="container-inner">
        {/* <h2>I Am The Data Analyzer</h2> */}
        {this.showStudentsOnDate(190912)}
      </div>
    );
  }
}

export default Analyzer;
