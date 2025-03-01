import { useState } from "react"

const MonthInput = (props) => {
  
  const [error, setError] = useState("")
  const getMonthInputValue = (event) => {
    if (!event.target.value) {
      setError("empty")
      return
    } else {
      let month = parseInt(event.target.value, 10);
      if (month <= 0 || month > 12) {
        setError("invalid")
      } else {
        setError("");
        props.setMonth(month);
      }
    }
  }
  
  return (
    <div className='month-component'>
      <h2 className="month-title poppins-bold">MONTH</h2>
      <div className="month-number-container">
        <label htmlFor="month-input"></label>
        <input 
          type="number" 
          placeholder="MM"
          className="month-input poppins-bold" 
          id="month-input"
          onChange={event => getMonthInputValue(event)}
        />
      </div>
      <div className="error-container">
        <p className={`error-empty ${error != "empty" && 'hidden'}`}>This field is required</p>
        <p className={`error-invalid ${error != "invalid" && 'hidden'}`}>Must be a valid month</p>
      </div>   
    </div>
  )
}

export default MonthInput
