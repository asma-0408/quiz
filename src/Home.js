import React from "react";
import QuizButton from "./QuizButton";

export default function Home() {
  const Buttons = {
    paddingTop: 100,
    marginRight: 50,
    marginLeft: 50,
  };

  const heading = {
    fontWeight: "bold",
    paddingTop: 30,
    fontSize: 70,
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "#f1f1f1"
  };

  const bottomText = {
    paddingTop: 50,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Helvetica",
    color: "#f1f1f1"
  };
  const mainStyle = {
    marginLeft: -10,
    marginRight: -10,
    marginTop: -10,
    marginBottom: 20,
    height: "110vh",
    backgroundImage: "linear-gradient(60deg, #120078, #9d0191)",
    opacity: 0.87
  };
  return (
    <div style={mainStyle}>
      <div style={heading}>
        <text>Quizzler</text>
      </div>
      <div style={Buttons}>
        <QuizButton />
      </div>
      <div style={bottomText}>
        <text>Please select a category to continue</text>
      </div>
    </div>
  );
}
