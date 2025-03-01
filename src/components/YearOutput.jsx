
const YearOutput = (props) => {
  return (
    <div className='year-output-container'>
      <h1 className='year-result'><span className='years-number'>{props.valid ? props.years :  <><span className="dash">-</span><span className="dash">-</span></>}</span> years</h1>
    </div>
  )
}

export default YearOutput
