import React, {useState} from "react"
export default function Counter() {
    const [count, setCount] = useState(0);
    const [year, setYear] = useState("")

    //use of update function
    //setCount(c => c +1)

    const increment = () => {
      //  setCount(count +1)
        setCount(c => c +1)
        setCount(c => c +1)
        setCount(c => c +1)
    }
    const decrement = () => {
        //setCount(count -1)
        setCount(c => c -1)
        setCount(c => c -1)
        setCount(c => c -1)
    }
        
    const reset = () => {
        setCount(0)
    }
    const setMonth =() => {
        setYear(y => y +1)
    }

    
  return (
    <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>increment</button>
        <button className="counter-button" onClick={setMonth}> month</button>
      
    </div>
  )
}

