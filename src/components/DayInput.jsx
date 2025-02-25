const DayInput = () => {
  return (
    <div className='day-component'>
      <h2 className="day-title poppins-bold">DAY</h2>
      <div className="day-number-container">
        <label htmlFor="day-input"></label>
        <input type="number" className="day-input poppins-bold" id="day-input"/>
      </div>
    </div>
  )
}

export default DayInput
