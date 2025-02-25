# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.jpg)


### Links

- []()
- []()

## My process

For this project, I also followed the mobile-first approach, started by building the main component which would contain child components.

The first component is `Inputs.jsx` which contains the inputs, each input has its own component: 

`Inputs.jsx`:
```jsx
import DayInput from "./DayInput"
import MonthInput from "./MonthInput"
import YearInput from "./YearInput"
const Inputs = () => {
  return (
    <div className='inputs-component'>
      <DayInput />
      <MonthInput />
      <YearInput />
    </div>
  )
}
export default Inputs
```

- All inputs had the same structure, which is: 
```jsx
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
```

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned


### Continued development


### Useful resources


## Author

- GitHub - [ziad-rima](https://github.com/ziad-rima)
- Frontend Mentor - [@ziad-rima](https://www.frontendmentor.io/profile/ziad-rima)
- X - [@rima4082](https://x.com/rima4082)


## Acknowledgments

