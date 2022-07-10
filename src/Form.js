import "./App.css";
import "@fontsource/ubuntu";
import { useContext } from "react";
import FormContext from "./FormContext";
import ReactSlider from "react-slider";
import "./slider.css";

function Form() {
  const formContext = useContext(FormContext);

  const FormHandlerCloser = () => {
    formContext.setShowForm(false);
    formContext.setMainUi(true);
  };

  const handleTaskChange = (e) => {
    formContext.setUserTask(e.target.value);
  };

  const handleTaskTimeChange = (newValue) => {
    formContext.setUserTaskTime(newValue);
  };

  return (
    <>
      <div className="MainFormContainer">
        <div className="SecondInputsContainer">
          <div className="FirstInputContainer">
            <label className="Label">Co robisz ?</label>
            <input className="FormInput" onChange={handleTaskChange} />
          </div>
          <div>
            <label className="Label">
              Ile czasu ci to zajmie ? ({formContext.userTaskTime} minut)
            </label>
            <ReactSlider
              value={formContext.userTaskTime}
              className={"slider"}
              thumbClassName={"thumb"}
              trackClassName={"track"}
              onChange={handleTaskTimeChange}
              min={1}
              max={180}
            />
            <div></div>
          </div>
          <div className="StartFormButtonContainer">
            <button className="StartButton" onClick={FormHandlerCloser}>
              Let's Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
