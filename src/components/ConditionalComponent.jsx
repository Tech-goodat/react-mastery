

function ConditionalComponent() {
    const display=false;
    if (display){
        return(
            <div>
                <h3>this is me</h3>
            </div>
        );
    }

    else{
        return (
            <div>
                
                <h3>I code every day!</h3>
            </div>
          )
    }

  
}

export default ConditionalComponent