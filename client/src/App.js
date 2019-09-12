import React, { Component } from "react";
import Analyzer from "./Analyzer";
import database from "./sample_record2";
import Form from './Form'

import "./App.css";
import "./media-queries.css";

class App extends Component {
  state = database;

  render() {
    return (
      <div className="container-outer">
        <h1>Hello Name Of Teacher</h1>
        <Analyzer data={this.state} currentDate="190913" />
        <Form />
      </div>
    );
  }
}

export default App;
