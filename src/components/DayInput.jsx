import { useState } from "react";

const DayInput = (props) => { 
  
  const [error, setError] = useState(false)
  const getDayInputValue = (event) => {
    let day = parseInt(event.target.value, 10);
    if ( day > 0 && day <= 31) {
      props.setDay(day);
    } else {
      alert("Invalid Day");
    }
  }
  
  return (
    <div className='day-component'>
      <h2 className="day-title poppins-bold">DAY</h2>
      <div className="day-number-container">
        <label htmlFor="day-input"></label>
        <input 
          type="number" 
          className="day-input poppins-bold" 
          id="day-input"
          onChange={(event) => getDayInputValue(event)}
        />
      </div>
      <p className="error-empty hidden">This field is required</p>
      <p className="error-invalid hidden">Must be a valid day</p>
    </div>
  )
}

export default DayInput
