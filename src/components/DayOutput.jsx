
const DayOutput = (props) => {
  return (
    <div className='day-output-container'>
      <h1 className='day-result'><span className='days-number'>{props.valid ? props.days :  <><span className="dash">-</span><span className="dash">-</span></>}</span> days</h1>
    </div>
  )
}

export default DayOutput
