import { useState } from "react"

function Counter() {
    const [count, setCount]=useState(0)
    const [increamentBy, setIncreamentBy]=useState(5)
    function handleIncrement(){
        setCount(count + increamentBy) 
        console.log("increasing the number")
    }
    function handleDecrement(){
        setCount(count-increamentBy)
        console.log("the number is:{count} ")
    }
    function increamentValue(){
        setIncreamentBy(increamentBy+1)
    }
    function decreamentValue(){
        setIncreamentBy(increamentBy-1)
    }
  return (
    <div>
        <h1>Count value is:{count}</h1>
        <button onClick={handleIncrement}><h4>Increment</h4></button>
        <button onClick={handleDecrement}><h4>Decrement</h4></button>
        <h1>We are incrementing by : {increamentBy}</h1>
        <button onClick={increamentValue}>increase increament</button>
        <button onClick={decreamentValue}>decrease increament</button>
        </div>
  )
}

export default Counter