import React from 'react';

function NoOfAttempts(props){
    
    return (
        <div>
        <select id = "dropdown" onChange={event => props.setNoOfAttempts(event.target.value)} 
        >
        <option value="1">1</option>
        <option value="unlimited">Unlimited</option>        
        </select>            
        </div>
    )
    
}

export default NoOfAttempts;
