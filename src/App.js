import React from "react";

import LandingPage from "./components/LandingPage/LandingPage";

import "./style/App.css";
import "./style/Global/base.css";

export default class App extends React.Component {
  render() {
    return (
      <div id={"App"}>
        <LandingPage></LandingPage>
      </div>
    );
  }
}
