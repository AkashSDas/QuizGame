import React from "react";
import shortid from "shortid";
import Loader from "react-loader-spinner";

import shuffle from "../utils/shuffle";

import QuizGameBoard from "./QuizGameBoard";
import ScoreBoard from "./ScoreBoard";

function getCategoryNum(category) {
  if (category === "gk") {
    return 9;
  }
  if (category === "sci&nat") {
    return 17;
  }
  if (category === "comp") {
    return 18;
  }
  if (category === "math") {
    return 19;
  }
  if (category === "politics") {
    return 24;
  }
  if (category === "sports") {
    return 21;
  }
  if (category === "geo") {
    return 22;
  }
  if (category === "hist") {
    return 23;
  }
  if (category === "animals") {
    return 27;
  }
  if (category === "vehicles") {
    return 28;
  }
  if (category === "comics") {
    return 29;
  }
  if (category === "cartoon&anim") {
    return 31;
  }
  if (category === "ani&manga") {
    return 31;
  }
}

async function getQAndA(category, difficulty) {
  const categoryNum = getCategoryNum(category);
  const url = `https://opentdb.com/api.php?amount=1&category=${categoryNum}&difficulty=${difficulty}&type=multiple`;
  const response = await fetch(url);
  const data = await response.json();

  let quizQuestion = data.results[0].question.replace(/&quot;/g, '\\"');

  let answersArr = data["results"][0]["incorrect_answers"];
  answersArr.push(data["results"][0]["correct_answer"]);
  answersArr = shuffle(answersArr); // Shuffling the answerArr

  // Generating id: {id, answer}
  for (let i = 0; i < answersArr.length; i++) {
    answersArr[i] = {
      id: shortid.generate(),
      answer: answersArr[i],
    };
  }

  let correctAnswer = data["results"][0]["correct_answer"];

  return {
    quizQuestion: quizQuestion,
    answersArr: answersArr,
    correctAnswer: correctAnswer,
  };
}

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

    category: this.props.category,
    difficulty: this.props.difficulty,
  };

  async getQuizGame() {
    const results = await getQAndA(this.state.category, this.state.difficulty);

    this.setState({
      isLoading: false,
      quizQuestion: results.quizQuestion,
      quizAnswers: results.answersArr,
      correctAnswer: results.correctAnswer,
    });
  }

  async componentDidMount() {
    this.getQuizGame();
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
    this.getQuizGame();
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
