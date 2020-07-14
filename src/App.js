import React from "react";

import Header from "./components/Header";
import QuizGame from "./components/QuizGame";

import "./style/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div id={"App"}>
        <Header />
        <QuizGame />
      </div>
    );
  }
}
