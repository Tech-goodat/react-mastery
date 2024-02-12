import { useState } from "react"

function Form() {

const [name,setName]=useState({firstName:"", lastName:""})
  console.log (name)

function handleSubmit(e){
  e.preventDefault()
  alert (`your name is ${name.firstName} ${name.lastName}`)
}
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input type="text" onChange={(e)=>setName({...name, firstName: e.target.value})} value={name.firstName}/>

        <input  type="text" onChange={(e)=>setName({...name, lastName:e.target.value})} value={name.lastName}/>

        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>

    </div>
  )
}

export default Form