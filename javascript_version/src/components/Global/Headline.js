import React from "react";

import "../../style/Global/Headline.css";

export default (props) => {
  return (
    <div>
      <h1 className={"headline"}>{props.text}</h1>
    </div>
  );
};
