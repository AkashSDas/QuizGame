import React from "react";

interface Props {
  completed: number; // % of questions completed
}

const ProgressBar: React.FC<Props> = ({ completed }: Props) => {
  let bgcolor: string;

  if (completed <= 20) {
    bgcolor = "#ff0000";
  } else if (completed > 20 && completed <= 50) {
    bgcolor = "#ff4500";
  } else if (completed > 50 && completed <= 70) {
    bgcolor = "#ffa500";
  } else if (completed > 70 && completed <= 90) {
    bgcolor = "#0be586";
  } else {
    bgcolor = "#00ff00";
  }

  const containerStyles: React.CSSProperties = {
    height: "1.5rem",
    width: "30rem",
    backgroundColor: "#e0e0de",
    borderRadius: "1rem",
    margin: ".3rem",
  };

  const fillerStyles: React.CSSProperties = {
    height: "inherit",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
  };

  const labelStyles: React.CSSProperties = {
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
