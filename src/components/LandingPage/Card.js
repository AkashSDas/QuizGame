import React from "react";

export default (props) => {
  return (
    <div className={"card"} onClick={() => props.togglePopup(props.category)}>
      {props.text}
    </div>
  );
};
