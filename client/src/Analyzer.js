import React, { Component } from "react";
import ReportByStudent from "./ReportByStudent";
import ReportByDate from "./ReportByDate";
import ByNameSelector from "./ByNameSelector";

class Analyzer extends Component {
  state = {
    reports: [
      { reportId: 1, reportType: "student", reportParam: "Irena J. Davis" },
      { reportId: 2, reportType: "date", reportParam: "190913" },
      { reportId: 3, reportType: "student", reportParam: "Caleb S. Sun" }
    ]
  };

  addNewName = newName => {
    const newNameObj = {
      reportId: this.state.reports.length,
      reportType: "student",
      reportParam: newName
    };
    this.setState({ reports: [...this.state.reports, newNameObj] });
  };

  render() {
    // extract student names from this.props.data
    let keysObj = Object.keys(this.props.data)[0];
    const nameArr = this.props.data[keysObj].map((entry, index) => {
      return (
        <option key={entry.id} value={entry.student_name}>
          {entry.student_name}
        </option>
      );
    });
    const reportsList = this.state.reports.map((entry, index) => {
      if (entry.reportType === "student") {
        return (
          <ReportByStudent
            key={index}
            data={this.props.data}
            name={entry.reportParam}
          />
        );
      } else
        return (
          <ReportByDate
            key={index}
            data={this.props.data}
            date={entry.reportParam}
          />
        );
    });

    return (
      <div>
        {reportsList}
        <ByNameSelector names={nameArr} addName={this.addNewName} />
      </div>
    );
  }
}

export default Analyzer;
