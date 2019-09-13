import React, { Component } from "react";
import ReportByStudent from "./ReportByStudent";
import ReportByDate from "./ReportByDate";
import ByNameSelector from "./ByNameSelector";
import ByDateSelector from "./ByDateSelector";

class Analyzer extends Component {
  state = {
    reports: []
  };

  addNewNameReport = newName => {
    const newNameObj = {
      reportId: this.state.reports.length,
      reportType: "student",
      reportParam: newName
    };
    this.setState({ reports: [...this.state.reports, newNameObj] });
  };

  addNewDateReport = newDate => {
    const newDateObj = {
      reportId: this.state.reports.length,
      reportType: "date",
      reportParam: newDate
    };
    this.setState({ reports: [...this.state.reports, newDateObj] });
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

    //extract valid class dates from this.props.data
    let datesObj = Object.keys(this.props.data);
    const dateArr = datesObj.map((entry, index) => {
      return (
        <option key={entry.id} value={entry}>
          {entry}
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
        <ByNameSelector names={nameArr} addName={this.addNewNameReport} />
        <ByDateSelector dates={dateArr} addDate={this.addNewDateReport} />
      </div>
    );
  }
}

export default Analyzer;
