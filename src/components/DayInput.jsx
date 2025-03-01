import { useState } from "react";

const DayInput = (props) => { 
  
  const [error, setError] = useState("")
  const getDayInputValue = (event) => {
    
    if (!event.target.value) {
      setError("empty");
      return
    } else {
      let day = parseInt(event.target.value, 10);
      if (day <= 0 || day > 31) {
        setError("invalid");
      } else {
        setError("");
        props.setDay(day);
      }
    }
  }
  
  return (
    <div className='day-component'>
      <h2 className= "day-title poppins-bold">DAY</h2>
      <div className="day-number-container">
        <label htmlFor="day-input"></label>
        <input 
          type="number" 
          placeholder="DD"
          className="day-input poppins-bold" 
          id="day-input"
          onChange={(event) => getDayInputValue(event)}
        />
      </div>
      <div className="error-container">
        <p className={`error-empty ${error != "empty" && 'hidden'}`}>This field is required</p>
        <p className={`error-invalid ${error != "invalid" && 'hidden'}`}>Must be a valid day</p>
      </div>
    </div>
  )
}

export default DayInput
