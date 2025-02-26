import { useState } from "react"
import Inputs from "./components/Inputs"
import Button from "./components/Button"
const App = () => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  return (
    <div className='main-component'>
      <Inputs 
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
      />
      <p className="error-whole-form hidden">Must be a valid date</p>
      <Button />
    </div>
  )
}

export default App
