import React from "react";
import "../../style/Global/Subtitle.css";

interface Props {
  text: string;
}

export default (props: Props) => {
  return (
    <div>
      <h1 className={"subtitle"}>{props.text}</h1>
    </div>
  );
};
