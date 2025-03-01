import YearOutput from "./YearOutput"
import MonthOutput from "./MonthOutput"
import DayOutput from "./DayOutput"
const Outputs = (props) => {
  return (
    <div className="outputs-component poppins-bold">
      <YearOutput years={props.years} valid={props.valid}/>
      <MonthOutput months={props.months} valid={props.valid}/>
      <DayOutput days={props.days} valid={props.valid}/>
    </div>
  )
}

export default Outputs
