import { useState } from "react"

const YearInput = (props) => {
  
  const currentYear = new Date().getFullYear()
  const [error, setError] = useState("")

  const getYearInputValue = (event) => {

    if (!event.target.value) {
      setError("empty");
      return;
    } else {
      let year = parseInt(event.target.value, 10);
      if (year > currentYear) {
        setError("invalid")
      } else {
        setError("")
        props.setYear(year)
      }
    }
  }

  return (
    <div className='year-component'>
      <h2 className="year-title poppins-bold">YEAR</h2>
      <div className="year-number-container">
        <label htmlFor="year-input"></label>
        <input 
          type="number" 
          placeholder="YYYY"
          className="year-input poppins-bold" 
          id="year-input"
          onChange={(event) => getYearInputValue(event)}
        />
      </div>
      <div className="error-container">
        <p className={`error-empty ${error != "empty" && 'hidden'}`}>This field is required</p>
        <p className={`error-invalid ${error != "invalid" && 'hidden'}`}>Must be a valid year</p>
      </div> 
    </div>
  )
}

export default YearInput
