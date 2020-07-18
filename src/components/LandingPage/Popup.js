import React from "react";

import "../../style/LandingPage/Popup.css";

export default class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div>
            <h1>Difficulty</h1>
            <button onClick={() => this.props.showQuizGame("easy")}>
              Easy
            </button>
            <button onClick={() => this.props.showQuizGame("medium")}>
              Medium
            </button>
            <button onClick={() => this.props.showQuizGame("hard")}>
              Hard
            </button>
          </div>
          <button onClick={() => this.props.closePopup("")}>close me</button>
        </div>
      </div>
    );
  }
}
