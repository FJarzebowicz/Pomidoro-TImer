import "./App.css";
import "@fontsource/ubuntu";
import { useContext, useEffect, useState } from "react";
import FormContext from "./FormContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";

function MainUi() {
  const formContext = useContext(FormContext);
  const [isPaused, setIsPaused] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(formContext.userTaskTime * 60);
  const [timer, setTimer] = useState();
  const [totalSeconds, setTotalSeconds] = useState(
    formContext.userTaskTime * 60
  );

  const start = () => {
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };

  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer);
    }
    if (isPaused === true) {
      clearInterval(timer);
    }
  }, [secondsLeft, timer, isPaused]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  function StartRunningHandler() {
    formContext.setIsRunning(true);
    setIsPaused(false);
    console.log(formContext.isRunning);
    console.log(isPaused);
    start();
  }
  const StopRunningHandler = () => {
    formContext.setIsRunning(false);
    setIsPaused(true);
    console.log(formContext.isRunning);
    console.log(isPaused);
  };

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  return (
    <div className="MainerAppContainer">
      <div className="MainAppContainer">
        <div className="Activity"> {formContext.userTask}</div>
        <div className="TimeControls">
          <div className="TimeControls2">
            <div className="TimeLeft">
              {" "}
              Czas: {minutes}:{seconds}
            </div>
            <div className="ButtonsContainer">
              <PlayButton onClick={StartRunningHandler} />
              <PauseButton onClick={StopRunningHandler} />
            </div>
          </div>
          <CircularProgressbar
            className="ProgressBar"
            value={percentage}
            text={`${percentage}`}
            styles={buildStyles({
              textColor: "black",
              pathColor: "darkorange",
              tailColor: "rgba(255,255,255,.2)",
            })}
          />
          ;
        </div>
      </div>
    </div>
  );
}
export default MainUi;
