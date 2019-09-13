import React, { Component } from "react";
import ReportByStudent from "./ReportByStudent";
import ReportByDate from "./ReportByDate";
import ByTypeSelector from "./ByTypeSelector";

class Analyzer extends Component {
  state = {
    reports: []
  };

  addNewReport = (newParam, reportTypeIn) => {
    const newReportObj = {
      reportId: this.state.reports.length,
      reportType: reportTypeIn,
      reportParam: newParam
    };
    this.setState({ reports: [...this.state.reports, newReportObj] });
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

    // determine report type
    const reportsList = this.state.reports.map((entry, index) => {
      if (entry.reportType === "name") {
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
        <ByTypeSelector
          data={nameArr}
          addNew={this.addNewReport}
          reportType={"name"}
        />
        <ByTypeSelector
          data={dateArr}
          addNew={this.addNewReport}
          reportType={"date"}
        />
      </div>
    );
  }
}

export default Analyzer;
