import React from "react";
import shortid from "shortid";
import Loader from "react-loader-spinner";

import shuffle from "../utils/shuffle";

import QuizGameBoard from "./QuizGameBoard";
import ScoreBoard from "./ScoreBoard";

export default class QuizGame extends React.Component {
  state = {
    isLoading: true,
    quizQuestion: "",
    quizAnswers: [],
    correctAnswer: "",
    questionsSolved: 0,
    questionCorrectlySolved: 0,
    borderColorOnClick: "#9932cc",
    canClickOnAnswer: true,
  };

  async componentDidMount() {
    const url =
      "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple";
    const response = await fetch(url);
    const data = await response.json();

    let answersArr = data["results"][0]["incorrect_answers"];
    answersArr.push(data["results"][0]["correct_answer"]);

    this.setState({
      correctAnswer: data["results"][0]["correct_answer"],
    });

    // Shuffling the answerArr
    answersArr = shuffle(answersArr);

    // Generating id: {id, answer}
    for (let i = 0; i < answersArr.length; i++) {
      answersArr[i] = {
        id: shortid.generate(),
        answer: answersArr[i],
      };
    }

    this.setState({
      isLoading: false,
      quizQuestion: data.results[0].question.replace(/&quot;/g, '\\"'),
      quizAnswers: answersArr,
    });
  }

  refresh = () => {
    if (this.state.questionsSolved >= 10) {
      this.setState({
        isLoading: true,
        questionsSolved: 0,
        borderColorOnClick: "#9932cc",
        canClickOnAnswer: true,
      });
    } else {
      this.setState({
        isLoading: true,
        questionsSolved: this.state.questionsSolved + 1,
        borderColorOnClick: "#9932cc",
        canClickOnAnswer: true,
      });
    }
    this.componentDidMount();
  };

  checkAnswer = (answer) => {
    if (this.state.canClickOnAnswer) {
      if (this.state.correctAnswer === answer) {
        this.setState({
          questionCorrectlySolved: this.state.questionCorrectlySolved + 1,
          borderColorOnClick: "#00ff00",
          canClickOnAnswer: false,
        });
      } else {
        this.setState({
          borderColorOnClick: "#ff3333",
          canClickOnAnswer: false,
        });
      }
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div
          style={{
            marginTop: "10rem",
          }}
        >
          <Loader type="TailSpin" color="#FF5733" height={90} width={90} />
        </div>
      );
    }

    return (
      <div>
        {this.state.questionsSolved < 10 ? (
          <QuizGameBoard
            questionsSolved={this.state.questionsSolved}
            quizQuestion={this.state.quizQuestion}
            quizAnswers={this.state.quizAnswers}
            refresh={this.refresh}
            checkAnswer={this.checkAnswer}
            borderColorOnClick={this.state.borderColorOnClick}
          />
        ) : (
          <ScoreBoard
            refresh={this.refresh}
            questionCorrectlySolved={this.state.questionCorrectlySolved}
            questionsSolved={this.state.questionsSolved}
          />
        )}
      </div>
    );
  }
}
