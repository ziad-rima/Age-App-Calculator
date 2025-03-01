import ArrowIconSVG from "./ArrowIconSVG"

const Button = (props) => {

  return (
    <div className='button-component'>
      <button onClick={() => props.handleButton()} className='age-button'><ArrowIconSVG /></button>
      <div className="divider"></div>
    </div>
  )
}

export default Button 
