import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import "./style/App.css";
import "./style/Global/base.css";

const App: React.FC = () => {
  return (
    <div id={"App"}>
      <LandingPage />
    </div>
  );
};

export default App;
