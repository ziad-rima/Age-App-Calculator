const MonthInput = (props) => {
  
  const getMonthInputValue = (event) => {
    let month = parseInt(event.target.value, 10);
    if ( month > 0 && month <= 12) {
      props.setmonth(month);
    } else {
      alert("Invalid month");
    }
  }
  
  return (
    <div className='month-component'>
      <h2 className="month-title poppins-bold">MONTH</h2>
      <div className="month-number-container">
        <label htmlFor="month-input"></label>
        <input 
          type="number" 
          className="month-input poppins-bold" 
          id="month-input"
          onChange={event => getMonthInputValue(event)}
        />
      </div>
      <p className="error-empty hidden">This field is required</p>
      <p className="error-invalid hidden">Must be a valid month</p>
    </div>
  )
}

export default MonthInput
