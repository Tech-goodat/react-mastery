

function Message() {
    function handleClick(){
        console.log("button clicked")
    }
  return (
    <div>
        <button onClick={handleClick}>Click here to see some text</button>
    </div>
  )
}

export default Message