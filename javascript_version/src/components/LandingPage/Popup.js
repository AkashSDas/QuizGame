import React from "react";

import "../../style/LandingPage/Popup.css";

export default class Popup extends React.Component {
  render() {
    return (
      <div className={"popup"}>
        <div className={"popup_inner"}>
          <div>
            <h1>💪 Difficulty</h1>
            <div className={"btnGrp"}>
              <button
                className={"difficultyBtn"}
                onClick={() => this.props.showQuizGame("easy")}
              >
                🤓Easy
              </button>
              <button
                className={"difficultyBtn"}
                onClick={() => this.props.showQuizGame("medium")}
              >
                🧐Medium
              </button>
              <button
                className={"difficultyBtn"}
                onClick={() => this.props.showQuizGame("hard")}
              >
                😎Hard
              </button>
            </div>
          </div>
          <button
            className={"closeBtn"}
            onClick={() => this.props.closePopup("")}
          >
            ❌
          </button>
        </div>
      </div>
    );
  }
}
