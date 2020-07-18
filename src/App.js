import React from "react";

// import Header from "./components/Header";
// import QuizGame from "./components/QuizGame";

import LandingPage from "./components/LandingPage/LandingPage";

import "./style/App.css";
import "./style/base.css";

export default class App extends React.Component {
  render() {
    return (
      <div id={"App"}>
        <LandingPage></LandingPage>
      </div>
    );
  }
}
