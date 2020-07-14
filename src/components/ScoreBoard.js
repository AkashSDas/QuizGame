import React from "react";

import ProgressBar from "./ProgressBar";

import "../style/ScoreBoard.css";
import "../style/QuizGameBoard.css";

function getEmoji(props) {
  let emoji = null;
  if (props.questionCorrectlySolved === 0) {
    emoji = "🤢🤮";
  } else if (props.questionCorrectlySolved === 1) {
    emoji = "🥺";
  } else if (props.questionCorrectlySolved === 2) {
    emoji = "😶";
  } else if (props.questionCorrectlySolved === 3) {
    emoji = "🙄🥱";
  } else if (props.questionCorrectlySolved === 4) {
    emoji = "🤔";
  } else if (props.questionCorrectlySolved === 5) {
    emoji = "😵🥴";
  } else if (props.questionCorrectlySolved === 6) {
    emoji = "🙃🐒";
  } else if (props.questionCorrectlySolved === 7) {
    emoji = "🤓🤭";
  } else if (props.questionCorrectlySolved === 8) {
    emoji = "😉🤩";
  } else if (props.questionCorrectlySolved === 9) {
    emoji = "🤑🐱‍🏍";
  } else if (props.questionCorrectlySolved === 10) {
    emoji = "😱🦄😎";
  }
  return emoji;
}

export default (props) => {
  const emoji = getEmoji(props);

  return (
    <div>
      <ProgressBar completed={props.questionsSolved * 10} />
      <div className={"score"}>
        Score: {emoji} {props.questionCorrectlySolved}/{props.questionsSolved}
      </div>
      <div>
        <button className={"submitBtn"} onClick={props.refresh}>
          👍 Play Again
        </button>
      </div>
    </div>
  );
};
