import React from "react";
import { Button } from "@material-ui/core";
import data from "./sports.json";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Timer from "react-compound-timer";
import { useHistory } from "react-router-dom";
import { getPoints } from "./Results.js";

const questions_all = data["questions"];

//pass the number of questions wanted here instead of 5
var questions = getRandom(questions_all, 5);

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len) throw new RangeError("not enough questions");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "relative",
    margin: "auto",
  },
});

export default function Sports() {
  const history = useHistory();
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [questionNO, setQuestionnNo] = React.useState(0);
  const [points, increasePoints] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState("");

  const showResults = () => {
    if (selectedAnswer === questions[questionNO].correctAnswer) {
      getPoints(points + 1, "./Sports");
    } else {
      getPoints(points, "./Sports");
    }

    history.push("./Results");
  };
  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };
  const CheckAnswer = () => {
    if (selectedAnswer === questions[questionNO].correctAnswer) {
      increasePoints(points + 1);
    }
    nextQuestion();
  };
  const nextQuestion = () => {
    if (questionNO === 4) {
      setProgress((questionNO + 1) * 20);
      showResults();
    } else {
      setQuestionnNo(questionNO + 1);
      setProgress((questionNO + 1) * 20);
      setSelectedAnswer("");
    }
  };

  const confirmButton = {
    paddingTop: 50,
    margin: "auto",
    textAlign: "center",
    width: 300,
  };
  const progressBar = {
    position: "relative",
    margin: "auto",
    width: 500,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Helvetica",
    paddingTop: 80,
    color: "#f1f1f1",
  };

  const radioButtons = {
    position: "relative",
    margin: "auto",
    textAlign: "left",
    fontFamily: "Helvetica",
    fontSize: 25,
    color: "#ffe5b9",
    paddingRight: 50,
    fontWeight: 'bold'
  };

  const questionStyle = {
    paddingTop: 20,
    paddingLeft: 70,
    textAlign: "left",
    fontFamily: "Helvetica",
    fontSize: 30,
  };

  const timerStyle = {
    textAlign: "right",
    fontFamily: "Helvetica",
    fontSize: 30,
    color: "#f1f1f1",
    // fontWeight: "bold",
    marginTop: -862,
    marginRight: 30
  };

  const mainStyle = {
    marginLeft: -10,
    marginRight: -10,
    marginTop: -10,
    marginBottom: 20,
    height: "110vh",
    backgroundImage: "linear-gradient(60deg, #120078, #9d0191)",
    opacity: 0.8
  };

  const headingQuestion = {
    color: "#f1f1f1",
    maxwidth: 700,
    position: "relative",
    margin: 'auto',
    fontWeight: "bold",

  }

  return (
    <div style={mainStyle}>
      <div style={questionStyle}>
        <div style={headingQuestion}>
          <text>Question: {questionNO + 1}</text>
          <h4>{questions[questionNO].question}</h4>
        </div>
        <br></br>
        <div style={radioButtons}>
          <input
            type="radio"
            name="option"
            id={questions[questionNO].option1}
            value={questions[questionNO].option1}
            onChange={handleChange}
            style={{ color: "#fecd1a" }}
          />
          <label for={questions[questionNO].option1}>
            {questions[questionNO].option1}
          </label>
          <br></br>
          <br></br>
          <input
            type="radio"
            name="option"
            id={questions[questionNO].option2}
            value={questions[questionNO].option2}
            onChange={handleChange}
          />
          <label for={questions[questionNO].option2}>
            {questions[questionNO].option2}
          </label>
          <br></br>
          <br></br>
          <input
            type="radio"
            name="option"
            id={questions[questionNO].option3}
            value={questions[questionNO].option3}
            onChange={handleChange}
          />
          <label for={questions[questionNO].option3}>
            {questions[questionNO].option3}
          </label>
          <br></br>
          <br></br>
          <input
            type="radio"
            name="option"
            id={questions[questionNO].option4}
            value={questions[questionNO].option4}
            onChange={handleChange}
          />
          <label for={questions[questionNO].option4}>
            {questions[questionNO].option4}
          </label>
          <br></br>
          <br></br>
        </div>
      </div>
      <div style={confirmButton}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth="True"
          onClick={CheckAnswer}
        >
          Confirm
        </Button>
        <br></br>
      </div>

      <div style={progressBar}>
        <LinearProgress variant="determinate" value={progress} color="secondary"/>
        <br></br>
        {questionNO + 1}/5
        <br></br>
        <br></br>
        <h1> Points Scored: </h1>
        <text style={{fontSize: 80}}>{points}</text>
      </div>
      <div style={timerStyle}>
        <text style = {{fontSize: 30, fontWeight: 'normal'}}>Time Left:</text><br></br>
        <Timer
          initialTime={100000}
          direction="backward"
          checkpoints={[
            {
              time: 0,
              callback: () => {
                alert("Time Up!");
                showResults();
              },
            },
          ]}
        >
          {() => (
            <React.Fragment>
              <Timer.Minutes />:
              <Timer.Seconds /> secs
            </React.Fragment>
          )}
        </Timer>
      </div>
    </div>
  );
}
