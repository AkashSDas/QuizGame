import React from "react";
import "../../style/Global/Headline.css";

interface Props {
  text: string;
}

export default (props: Props) => {
  return (
    <div>
      <h1 className={"headline"}>{props.text}</h1>
    </div>
  );
};
