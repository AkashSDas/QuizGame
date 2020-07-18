import React from "react";

import "../../style/Global/Subtitle.css";

export default (props) => {
  return (
    <div>
      <h1 className={"subtitle"}>{props.text}</h1>
    </div>
  );
};
