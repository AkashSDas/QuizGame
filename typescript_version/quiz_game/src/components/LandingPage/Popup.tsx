import React from "react";
import "../../style/LandingPage/Popup.css";

interface Props {
  text: string;
  showPopup: (difficulty: string) => void;
  closePopup: (category: string) => void;
}

const Popup: React.FC<Props> = (props: Props) => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <div>
          <h1>💪 Difficulty</h1>
          <div className="btnGrp">
            <button className="diffcultyBtn" onClick={() => {}}>
              🤓 Easy
            </button>
            <button className={"difficultyBtn"} onClick={() => {}}>
              🧐 Medium
            </button>
            <button className={"difficultyBtn"} onClick={() => {}}>
              😎 Hard
            </button>
          </div>
        </div>
        <button className="closeBtn" onClick={() => {}}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default Popup;
