import { useState } from "react";
import Inputs from "./components/Inputs";
import Button from "./components/Button";
import Outputs from "./components/Outputs";

const App = () => {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  
  const [error, setError] = useState("");
  
  const [outputDay, setOutputDay] = useState(null);
  const [outputMonth, setOutputMonth] = useState(null);
  const [outputYear, setOutputYear] = useState(null);
  
  const [valid, setValid] = useState(false);

  const handleInputChange = (setter) => (value) => {
    setter(value);
    setError("");
  };

  const handleButton = () => {
    if (!day || !month || !year) {
      setError("invalid");
      return;
    }

    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (month === 2 && isLeapYear) {
      daysInMonth[2] = 29;
    }

    if (day > daysInMonth[month]) {
      setError("invalid");
      return;
    }
    setError("");
    const today = new Date()
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    let years = currentYear - year;
    let months = currentMonth - month;
    let days = currentDay - day;
  
    if (days < 0) {
      months--;
      let previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
      let daysInPreviousMonth = new Date(currentYear, previousMonth, 0).getDate();
      days += daysInPreviousMonth;
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }

    setOutputDay(days);
    setOutputMonth(months);
    setOutputYear(years);
    setValid(true);
  };

  return (
    <div className="main-component">
      <Inputs
        setDay={handleInputChange(setDay)}
        setMonth={handleInputChange(setMonth)}
        setYear={handleInputChange(setYear)}
      />
      <p className={`error-whole-form ${error !== "invalid" ? "hidden" : ""}`}>
          Must be a valid date
      </p>
      <Button handleButton={handleButton} />
      <Outputs 
        years={outputYear}
        months={outputMonth}
        days={outputDay}
        valid={valid}
      />
    </div>
  );
};

export default App;
