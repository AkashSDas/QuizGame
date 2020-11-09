import React from "react";
import "../../style/QuizGame/QuizGameBoard.css";
import "../../style/QuizGame/ScoreBoard.css";

const getEmoji = (questionCorrectlySolved: number): string => {
  let emoji = "🐵";

  if (questionCorrectlySolved === 0) {
    emoji = "🤢🤮";
  } else if (questionCorrectlySolved === 1) {
    emoji = "🥺";
  } else if (questionCorrectlySolved === 2) {
    emoji = "😶";
  } else if (questionCorrectlySolved === 3) {
    emoji = "🙄🥱";
  } else if (questionCorrectlySolved === 4) {
    emoji = "🤔";
  } else if (questionCorrectlySolved === 5) {
    emoji = "😵🥴";
  } else if (questionCorrectlySolved === 6) {
    emoji = "🙃🐒";
  } else if (questionCorrectlySolved === 7) {
    emoji = "🤓🤭";
  } else if (questionCorrectlySolved === 8) {
    emoji = "😉🤩";
  } else if (questionCorrectlySolved === 9) {
    emoji = "🤑🐱‍🏍";
  } else if (questionCorrectlySolved === 10) {
    emoji = "😱🦄😎";
  }
  return emoji;
};

interface Props {
  questionCorrectlySolved: number;
  questionsSolved: number;
  refresh: () => void;
  goBackToMainMenu: () => void;
}

export default (props: Props) => {
  const emoji = getEmoji(props.questionCorrectlySolved);

  return (
    <div>
      <div className="score">
        Score: {emoji} {props.questionCorrectlySolved}/{props.questionsSolved}
      </div>

      <div className="quizGameBtnGrp">
        <button className="submitBtn" onClick={props.refresh}>
          👍 Play Again
        </button>
        <button className="submitBtn" onClick={props.goBackToMainMenu}>
          🚁 Main Menu
        </button>
      </div>
    </div>
  );
};
