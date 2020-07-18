import React from "react";

import "../../style/LandingPage/Card.css";

export default (props) => {
  return (
    <div className={"card"} onClick={() => props.togglePopup(props.category)}>
      {props.text}
    </div>
  );
};
