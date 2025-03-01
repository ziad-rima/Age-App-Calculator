
const MonthOutput = (props) => {
  return (
    <div className='month-output-container'>
      <h1 className='month-result'><span className='months-number'>{props.valid ? props.months :  <><span className="dash">-</span><span className="dash">-</span></>}</span> months</h1>
    </div>
  )
}

export default MonthOutput
