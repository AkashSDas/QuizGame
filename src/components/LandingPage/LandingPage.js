import React from "react";

import QuizGame from "../QuizGame";
import Popup from "./Popup";
import Card from "./Card";

import "../../style/LandingPage/LandingPage.css";

export default class LandingPage extends React.Component {
  state = {
    displayQuizGame: false, // No: false, Yes: true
    showPopup: false,
    category: null,
    difficulty: null,
  };

  // Choose difficulty
  togglePopup = (category) => {
    this.setState({
      category: category,
      showPopup: !this.state.showPopup,
    });
  };

  // Show quiz game once the category & difficulty is selected
  showQuizGame = (difficulty) => {
    this.setState({
      difficulty: difficulty,
    });
    if (difficulty) {
      this.setState({
        displayQuizGame: true,
      });
    }
  };

  goBackToMainMenu = () => {
    this.setState({
      showPopup: false,
      displayQuizGame: false,
    });
  };

  categoryGridsJsx = () => {
    return (
      <div>
        {this.state.showPopup ? (
          <Popup
            text={"popup"}
            showQuizGame={this.showQuizGame}
            closePopup={this.togglePopup}
          />
        ) : null}
        <div className={"category-grid"}>
          <Card
            togglePopup={this.togglePopup}
            category={"gk"}
            text={"General Knowledge"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"sci&nat"}
            text={"Science & Nature"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"comp"}
            text={"Computers"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"math"}
            text={"Mathematics"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"politics"}
            text={"Politics"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"sports"}
            text={"Sports"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"geo"}
            text={"Geography"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"hist"}
            text={"History"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"animals"}
            text={"Animals"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"vehicles"}
            text={"Vehicles"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"comics"}
            text={"Comics"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"ani&manga"}
            text={"Japanese Anime & Manga"}
          />
          <Card
            togglePopup={this.togglePopup}
            category={"cartoon&anim"}
            text={"Cartoon & Animations"}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Quiz Game</h1>

        {this.state.displayQuizGame ? (
          <QuizGame
            category={this.state.category}
            difficulty={this.state.difficulty}
            displayQuizGame={this.state.displayQuizGame}
            goBackToMainMenu={this.goBackToMainMenu}
          />
        ) : (
          this.categoryGridsJsx()
        )}
      </div>
    );
  }
}
