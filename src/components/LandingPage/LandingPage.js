import React from "react";

import QuizGame from "../QuizGame";
import Popup from "./Popup";

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

  categoryChoosedJsx = () => {
    return <QuizGame />;
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
          <div className={"card"} onClick={() => this.togglePopup("gk")}>
            General Knowledge
          </div>
          <div className={"card"} onClick={() => this.togglePopup("sci&nat")}>
            Science & Nature
          </div>
          <div className={"card"} onClick={() => this.togglePopup("comp")}>
            Computers
          </div>
          <div className={"card"} onClick={() => this.togglePopup("math")}>
            Mathematics
          </div>
          <div className={"card"} onClick={() => this.togglePopup("politics")}>
            Politics
          </div>
          <div className={"card"} onClick={() => this.togglePopup("sports")}>
            Sports
          </div>
          <div className={"card"} onClick={() => this.togglePopup("geo")}>
            Geography
          </div>
          <div className={"card"} onClick={() => this.togglePopup("hist")}>
            History
          </div>
          <div className={"card"} onClick={() => this.togglePopup("animals")}>
            Animals
          </div>
          <div className={"card"} onClick={() => this.togglePopup("vehicles")}>
            Vehicles
          </div>
          <div className={"card"} onClick={() => this.togglePopup("comics")}>
            Comics
          </div>
          <div className={"card"} onClick={() => this.togglePopup("ani&manga")}>
            Japanese Anime & Manga
          </div>
          <div
            className={"card"}
            onClick={() => this.togglePopup("cartoon&anim")}
          >
            Cartoon & Animations
          </div>
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
          />
        ) : (
          this.categoryGridsJsx()
        )}
      </div>
    );
  }
}
