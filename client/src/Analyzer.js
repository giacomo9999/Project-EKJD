import React, { Component } from "react";

class Analyzer extends Component {
  showStudentsOnDate = dateIn => {
    const studentsPresent = this.props.data[dateIn].map(entry => {
      return <li key={entry.id}>{entry.student_name}</li>;
    });
    return studentsPresent;
  };
  render() {
    console.log(this.props.data);
    return (
      <div className="container-inner">
        <h2>I Am The Data Analyzer</h2>
        {this.showStudentsOnDate(190912)}
      </div>
    );
  }
}

export default Analyzer;
