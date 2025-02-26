const YearInput = (props) => {
  
  const getYearInputValue = (event) => {
    let year = parseInt(event.target.value, 10);
    
  }

  return (
    <div className='year-component'>
      <h2 className="year-title poppins-bold">YEAR</h2>
      <div className="year-number-container">
        <label htmlFor="year-input"></label>
        <input 
          type="number" 
          className="year-input poppins-bold" 
          id="year-input"
          onChange={(event) => getYearInputValue(event)}
        />
      </div>
      <p className="error-empty hidden">This field is required</p>
      <p className="error-invalid hidden">Must be a valid year</p>
    </div>
  )
}

export default YearInput
