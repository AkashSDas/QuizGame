import React, { ReactElement, useState } from "react";
import "../../style/LandingPage/LandingPage.css";
import Headline from "../Global/Headline";
import Subtitle from "../Global/Subtitle";
import QuizGame from "../QuizGame/QuizGame";
import Card from "./Card";
import Popup from "./Popup";

interface State {
  displayQuizGame: boolean;
  showPopup: boolean;
  category: string | null;
  difficulty: string | null;
}

const LandingPage: React.FC = () => {
  const [state, setState] = useState<State>({
    displayQuizGame: false, // No: false, Yes: true
    showPopup: false,
    category: null,
    difficulty: null,
  });

  // Choose difficulty
  const togglePopup = (category: string): void => {
    setState({ ...state, category: category, showPopup: !state.showPopup });
  };

  // Show quiz game once the category & difficulty is selected
  const showQuizGame = (difficulty: string): void => {
    setState({ ...state, difficulty: difficulty });
    if (state.difficulty) {
      setState({ ...state, displayQuizGame: true });
    }
  };

  const goBackToMainMenu = (): void => {
    setState({ ...state, showPopup: false, displayQuizGame: false });
  };

  const categoryGridsJsx = (): ReactElement => {
    return (
      <div>
        <Subtitle
          text={
            "Choose quiz questions category from a 🔥 variety of categories"
          }
        />

        <hr />

        {state.showPopup ? (
          <Popup
            text={"popup"}
            showPopup={showQuizGame}
            closePopup={togglePopup}
            showQuizGame={showQuizGame}
          />
        ) : null}
        <div className="category-grid">
          <Card
            togglePopup={togglePopup}
            category={"gk"}
            text={"📚 General Knowledge"}
          />
          <Card
            togglePopup={togglePopup}
            category={"sci&nat"}
            text={"🧪 Science & Nature"}
          />
          <Card
            togglePopup={togglePopup}
            category={"comp"}
            text={"💻 Computers"}
          />
          <Card
            togglePopup={togglePopup}
            category={"math"}
            text={"📐 Mathematics"}
          />
          <Card
            togglePopup={togglePopup}
            category={"politics"}
            text={"👨‍⚖️ Politics"}
          />
          <Card
            togglePopup={togglePopup}
            category={"sports"}
            text={"⚽ Sports"}
          />
          <Card
            togglePopup={togglePopup}
            category={"geo"}
            text={"🌎 Geography"}
          />
          <Card
            togglePopup={togglePopup}
            category={"hist"}
            text={"👴 History"}
          />
          <Card
            togglePopup={togglePopup}
            category={"animals"}
            text={"🐶 Animals"}
          />
          <Card
            togglePopup={togglePopup}
            category={"vehicles"}
            text={"🚗 Vehicles"}
          />
          <Card
            togglePopup={togglePopup}
            category={"comics"}
            text={"🦸‍♂️ Comics"}
          />
          <Card
            togglePopup={togglePopup}
            category={"ani&manga"}
            text={"🐱‍👤 Japanese Anime & Manga"}
          />
          <Card
            togglePopup={togglePopup}
            category={"cartoon&anim"}
            text={"👻 Cartoon & Animations"}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.displayQuizGame ? null : <Headline text={"🤑 Quiz Game 🤑"} />}

      {state.displayQuizGame ? (
        <QuizGame
          category={state.category as string}
          difficulty={state.difficulty as string}
          displayQuizGame={state.displayQuizGame}
          goBackToMainMenu={goBackToMainMenu}
        />
      ) : (
        categoryGridsJsx()
      )}
    </div>
  );
};

export default LandingPage;
