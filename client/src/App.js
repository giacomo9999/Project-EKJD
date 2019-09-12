import React, { Component } from "react";
import Analyzer from "./Analyzer";

import "./App.css";
import "./media-queries.css";

class App extends Component {
  state = {
    190912: [
      {
        id: 1,
        student_name: "John Doe",
        adhd: true,
        depression: false,
        anxiety: true
      },
      {
        id: 2,
        student_name: "Jane Smith",
        adhd: true,
        depression: false,
        anxiety: true
      },
      {
        id: 3,
        student_name: "Julio Iglesias",
        adhd: true,
        depression: false,
        anxiety: true
      }
    ],
    190913: [
      {
        id: 1,
        student_name: "John Doe",
        adhd: true,
        depression: false,
        anxiety: true
      },
      {
        id: 2,
        student_name: "Jane Smith",
        adhd: true,
        depression: false,
        anxiety: true
      },
      {
        id: 3,
        student_name: "Julio Iglesias",
        adhd: true,
        depression: false,
        anxiety: true
      }
    ]
  };

  render() {
    return (
      <div className="container-outer">
        <h1>Hello Name Of Teacher</h1>
        <Analyzer data={this.state} currentDate="190913" />
      </div>
    );
  }
}

export default App;
