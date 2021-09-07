import React from 'react';


function Instructions(props){
    
    return (
        <div>
            <label htmlFor="instructions" className= 'm-2'>Instructions:</label><br />
            <textarea onChange={event => props.setInstructions(event.target.value)} rows="3" id="instructions" className= "m-2"></textarea>
        </div>
    )
    
}

export default Instructions;
