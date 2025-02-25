const YearInput = () => {
  return (
    <div className='year-component'>
      <h2 className="year-title poppins-bold">YEAR</h2>
      <div className="year-number-container">
        <label htmlFor="year-input"></label>
        <input type="number" className="year-input poppins-bold" id="year-input"/>
      </div>
    </div>
  )
}

export default YearInput
