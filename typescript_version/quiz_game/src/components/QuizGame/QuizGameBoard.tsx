import React from "react";
import "../../style/QuizGame/QuizGameBoard.css";

interface Props {
  questionsSolved: number;
  quizQuestion: string;
  // make sure to pass quizAnswers of type below rather than
  // of type string[] | { id: string; answer: string }[]
  quizAnswers: string[] | { id: string; answer: string }[];
  borderColorOnClick: string;
  goBackToMainMenu: () => void;
  refresh: () => void;
  checkAnswer: (answer: string) => void;
}

const QuizGameBoard: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div className="gameboard">
        <div className="question">📢 Question: {props.quizQuestion}</div>
        <div className="answersContainer">
          {(props.quizAnswers as { id: string; answer: string }[]).map(
            (answer: { id: string; answer: string }) => (
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
            )
          )}
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

export default QuizGameBoard;
