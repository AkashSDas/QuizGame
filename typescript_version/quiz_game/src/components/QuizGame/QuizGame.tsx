import React from "react";
import Loader from "react-loader-spinner";
import Subtitle from "../Global/Subtitle";
import ProgressBar from "./ProgressBar";
import QuizGameBoard from "./QuizGameBoard";
import { getQAndA } from "./QuizGameHelper";
import ScoreBoard from "./ScoreBoard";

interface Props {
  category: string;
  difficulty: string;
  goBackToMainMenu: () => void;
  displayQuizGame: boolean;
}

interface State {
  isLoading: boolean;
  quizQuestion: string;
  quizAnswers: string[] | { id: string; answer: string }[];
  correctAnswer: string;
  questionsSolved: number;
  questionsCorrectlySolved: number;
  borderColorOnClick: string;
  canClickOnAnswer: boolean;
  category: string;
  difficulty: string;
}

const QuizGame: React.FC<Props> = ({
  category,
  difficulty,
  goBackToMainMenu,
}: Props) => {
  const [state, setState] = React.useState<State>({
    isLoading: true,
    quizQuestion: "",
    quizAnswers: [],
    correctAnswer: "",
    questionsSolved: 0,
    questionsCorrectlySolved: 0,
    borderColorOnClick: "#9932cc",
    canClickOnAnswer: true,
    category: category,
    difficulty: difficulty,
  });

  const getQuizGame = React.useCallback(async () => {
    const results = await getQAndA(state.category, state.difficulty);
    setState((currentState: State) => ({
      ...currentState,
      isLoading: false,
      quizQuestion: results.quizQuestion,
      quizAnswers: results.answersArr,
      correctAnswer: results.correctAnswer,
    }));
  }, [state.category, state.difficulty]);

  // getting quiz Q and A's as component mounts
  React.useEffect(() => {
    (async () => {
      getQuizGame();
    })();
  }, [getQuizGame]);

  const refresh = (): void => {
    if (state.questionsSolved >= 10) {
      // one round of quiz will contain 10 questions
      // after resetting all states to its initial values
      setState((currentState: State) => ({
        ...currentState,
        isLoading: true,
        questionsSolved: 0,
        borderColorOnClick: "#9932cc",
        canClickOnAnswer: true,
      }));
    } else {
      setState((currentState: State) => ({
        ...currentState,
        isLoading: true,
        questionsSolved: state.questionsSolved + 1,
        borderColorOnClick: "#9932cc",
        canClickOnAnswer: true,
      }));
    }

    // getting new Q and A's
    getQuizGame();
  };

  const checkAnswer = (answer: string): void => {
    if (state.canClickOnAnswer) {
      if (state.correctAnswer === answer) {
        setState((currentState: State) => ({
          ...currentState,
          questionsCorrectlySolved: state.questionsCorrectlySolved + 1,
          borderColorOnClick: "#00ff00",
          canClickOnAnswer: false,
        }));
      } else {
        setState((currentState: State) => ({
          ...currentState,
          borderColorOnClick: "#ff3333",
          canClickOnAnswer: false,
        }));
      }
    }
  };

  return (
    <div>
      {state.isLoading ? (
        <div>
          <ProgressBar completed={state.questionsSolved * 10} />

          <div style={{ marginTop: "10rem" }}>
            <Subtitle text={"🐱‍🏍 Getting questions..."} />
            <br />
            <Loader type="TailSpin" color="#7d4bc3" height={90} width={90} />
          </div>
        </div>
      ) : (
        <div>
          <ProgressBar completed={state.questionsSolved * 10} />

          {state.questionsSolved < 10 ? (
            <QuizGameBoard
              questionsSolved={state.questionsSolved}
              quizQuestion={state.quizQuestion}
              quizAnswers={state.quizAnswers}
              refresh={refresh}
              checkAnswer={checkAnswer}
              borderColorOnClick={state.borderColorOnClick}
              goBackToMainMenu={goBackToMainMenu}
            />
          ) : (
            <ScoreBoard
              refresh={refresh}
              questionCorrectlySolved={state.questionsCorrectlySolved}
              questionsSolved={state.questionsSolved}
              goBackToMainMenu={goBackToMainMenu}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default QuizGame;
