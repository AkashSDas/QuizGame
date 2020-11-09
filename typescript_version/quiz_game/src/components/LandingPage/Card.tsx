import React from "react";
import "../../style/LandingPage/Card.css";

interface Props {
  text: string;
  category: string;
  togglePopup: (category: string) => void;
}

export default (props: Props) => {
  return (
    <div
      className={"card"}
      onClick={() => {
        props.togglePopup(props.category);
      }}
    >
      {props.text}
    </div>
  );
};
