import React from "react";
import "../../style/QuizGame/QuizGameBoard.css";

interface Props {}

export default (props: Props) => {
  return (
    <div>
      <div className="gameboard">
        <div className="question">📢 Question: {props.quizQuestion}</div>
        <div className="answersContainer">
          {props.quizAnswers.map((answer) => (
            <div
              onClick={() => props.checkAnswer(answer.answer)}
              style={{
                borderColor: props.borderColorOnClick
                  ? props.borderColorOnClick
                  : "#9932cc",
              }}
              className="answers"
              key={answer.id}
            >
              {answer.answer}
            </div>
          ))}
        </div>

        <div className="quizGameBtnGrp">
          <button className="submitBtn" onClick={props.refresh}>
            🚀 Submit
          </button>
          <button className="submitBtn" onClick={props.goBackToMainMenu}>
            🚁 Main Menu
          </button>
        </div>
      </div>
    </div>
  );
};
