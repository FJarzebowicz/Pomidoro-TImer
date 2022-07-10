import "./App.css";
import "@fontsource/ubuntu";
import { useState } from "react";
import Form from "./Form";
import MainUi from "./MainUi";
import FormContext from "./FormContext";

function App({ setElapsedTimeInSeconds }) {
  const [ShowForm, setShowForm] = useState(true);
  const [ShowMainUi, setMainUi] = useState(false);

  const [userTask, setUserTask] = useState("");
  const [userTaskTime, setUserTaskTime] = useState("");

  const [isRunning, setIsRunning] = useState("false");

  const ShowFormHandler = () => {
    setShowForm(true);
    setMainUi(false);

    setUserTask("");
    setUserTaskTime("");
  };
  return (
    <>
      <FormContext.Provider
        value={{
          ShowForm,
          setShowForm,
          ShowMainUi,
          setMainUi,
          userTask,
          setUserTask,
          userTaskTime,
          setUserTaskTime,
          isRunning,
          setIsRunning,
        }}
      >
        <div className="UtlityMainContainer">
          <div className="HeaderTextContainer">
            <h1>Pomodoro Technique</h1>
          </div>
          <div className="ButtonNewOneContainer">
            <button className="NewOneButton" onClick={ShowFormHandler}>
              {" "}
              New One
            </button>
          </div>
        </div>
        {ShowForm && (
          <Form
            setShowForm={setShowForm}
            setMainUi={setMainUi}
            userTask={userTask}
            userTaskTime={userTaskTime}
            setUserTask={setUserTask}
            setUserTaskTime={setUserTaskTime}
          />
        )}
        {ShowMainUi && (
          <MainUi
            setShowForm={setShowForm}
            setMainUi={setMainUi}
            userTask={userTask}
            userTaskTime={userTaskTime}
            setUserTask={setUserTask}
            setUserTaskTime={setUserTaskTime}
          />
        )}
      </FormContext.Provider>
    </>
  );
}

export default App;
