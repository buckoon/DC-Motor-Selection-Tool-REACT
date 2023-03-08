import React from "react";
import "./Motorselect.css";

export default function MotorSelect() {
  const [motorState, setMotorState] = React.useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setMotorState((prevMotorState) => {
      return {
        ...prevMotorState,
        [name]: value,
      };
    });
  }

  return (
    <div className="motorSelect">
      <form>
        <div className="Selection-section">
          <label className="mount-option" htmlFor="mountOption">
            Select your motor
          </label>
          <div>
            <label className="winding">1.Please select a motor size and winding:</label>  
            <select
                
              className="select 1"
              id="windingOption"
              value={motorState.windingOption}
              onChange={handleChange}
              name="windingOption"
            >
              
              <option value="AKM23C">AKM23C</option>
              <option value="AKM23D">AKM23D</option>
            </select>
          </div>
          <div>
          <label className="mount">2.Please select a motor mount:</label> 
            <select
              className="select 1"
              id="mountOption"
              value={motorState.mountOption}
              onChange={handleChange}
              name="mountOption"
            >
              <option value="AC">AC for std nema-mount</option>
              <option value="AN">AN for non-nema</option>
            </select>
          </div>
          <div>
          <label className="mount">3.Please select a motor connector:</label>
            <select
              className="select 1"
              id="connectorOption"
              value={motorState.connectorOption}
              onChange={handleChange}
              name="connectorOption"
            >
              <option value="C">C for dual connector</option>
              <option value="9">9 single connector</option>
            </select>
          </div>

          <div>
          <label className="mount">4. Please select weather your motor has a brake or not:</label>
            <select
              className="select 1"
              id="brakeOption"
              value={motorState.brakeOption}
              onChange={handleChange}
              name="brakeOption"
            >
              <option value="N">N for no brake</option>
              <option value="2">2 for brake</option>
            </select>
          </div>
          <div>
          <label className="mount">5. Please select which feedback your motor has:</label>
            <select
              className="select 1"
              id="feedbackOption"
              value={motorState.feedbackOption}
              onChange={handleChange}
              name="feedbackOption"
            >
              <option value="C">C for hyperface</option>
              <option value="R">R for resolver</option>
            </select>
          </div>
          <div>
          <label className="mount">6. Would you like a shaft seal:</label>
            <select
              className="select 1"
              id="shaftSealOption"
              value={motorState.shaftSealOption}
              onChange={handleChange}
              name="shaftSealOption"
            >
              <option value="00">00 for no shaft seal</option>
              <option value="01">01 for shaft seal</option>
            </select>
          </div>
        </div>
      </form>
      {
        <div className= "result">
          
          {motorState.windingOption}{"-"}
          {motorState.mountOption}{motorState.connectorOption}
          {motorState.brakeOption}{motorState.feedbackOption}{motorState.shaftSealOption}
        </div>
      }
      <div></div>
    </div>
  );
}
