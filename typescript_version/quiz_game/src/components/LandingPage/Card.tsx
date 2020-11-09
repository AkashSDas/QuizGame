import React from "react";
import "../../style/LandingPage/Card.css";

interface Props {
  text: string;
}

export default (props: Props) => {
  return (
    <div className={"card"} onClick={() => {}}>
      {props.text}
    </div>
  );
};
