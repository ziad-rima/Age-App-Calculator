import DayInput from "./DayInput"
import MonthInput from "./MonthInput"
import YearInput from "./YearInput"
const Inputs = (props) => {
  return (
    <div className='inputs-component'>
      <DayInput setDay={props.setDay}/>
      <MonthInput setMonth={props.setMonth} />
      <YearInput setYear={props.setYear}/>
    </div>
  )
}

export default Inputs
