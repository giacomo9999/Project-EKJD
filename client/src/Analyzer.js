import React, { Component } from "react";

class Analyzer extends Component {
  render() {
    const studentsOnDate = this.props.data[this.props.currentDate].map(
      entry => {
        return <li key={entry.id}>{entry.student_name}</li>;
      }
    );
    console.log(this.props.data);
    return (
      <div className="container-inner">
        <h2>I Am The Data Analyzer</h2>
        {studentsOnDate}
      </div>
    );
  }
}

export default Analyzer;
