const MonthInput = () => {
  return (
    <div className='month-component'>
      <h2 className="month-title poppins-bold">MONTH</h2>
      <div className="month-number-container">
        <label htmlFor="month-input"></label>
        <input type="number" className="month-input poppins-bold" id="month-input"/>
      </div>
    </div>
  )
}

export default MonthInput
