import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {Pie} from 'react-chartjs-2';

var pointsScored = 0;
var quiz = "";
var message = ""
export function getPoints(points, sender) {
  pointsScored = points;
  quiz = sender;
  console.log(pointsScored);
  
}
export default function Results() {
  const history = useHistory();
  const confirmButton = {
    paddingTop: 50,
    margin: "auto",
    textAlign: "center",
    width: 300,
  };
  const mainStyle = {
    marginLeft: -10,
    marginRight: -10,
    marginTop: -25,
    marginBottom: -20,
    height: "130vh",
    backgroundImage: "linear-gradient(60deg, #120078, #9d0191)",
    opacity: 0.8
  };
  const heading = {
    paddingTop: 50,
    fontSize: 50,
    color: "#f1f1f1",
    textAlign: "center",
    fontFamily: "Helvetica",
  };
  const pointsSt = {
    textAlign: "center",
    fontSize: 200,
    color: "#f1f1f1",
    fontFamily: "Helvetica",
  };

  const messageStyle = {
    color: '#f1f1f1',
    textAlign: "center",
    fontFamily: "Helvetica",
    fontSize: 30
  }
  const data = {
    labels: ["Correct", "Wrong"],
    datasets: [
      {
        data: [pointsScored, 10-pointsScored],
        backgroundColor: ["#fd3a69", "#fecd1a"],
        hoverBackgroundColor: ["#fd3a69", "#fecd1a"],
      },
    ],
  };
  function Get_message(){
    if (pointsScored < 5){
      message = `Just ${pointsScored} points? You need to brush up your GK!`
    }
    else if(pointsScored >= 5 && pointsScored < 8){
      message = `You scored ${pointsScored}! Not bad!`
    }
    else{
      message = `WOW! ${pointsScored} points, Guess someone is a Know It All!`
    }
  }
  Get_message()
  return (
    <div style={mainStyle}>
      <div style={heading}>
        <text>Here are your results:</text>
      </div>
      <div style={pointsSt}>
        <text>{pointsScored}/10</text>
      </div>
      <div style = {messageStyle}>
        <text>{message}</text>
      </div>
      <div style = {{width: 800, height: 450, margin: 'auto', position: 'relative', paddingTop: 50}}>
        <Pie data={data} legend={false}/>
      </div>
      <div style={confirmButton}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth="True"
          onClick={() => history.push(quiz)}
        >
          Retake
        </Button>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          fullWidth="True"
          onClick={() => history.push("./")}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
