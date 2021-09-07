import React from 'react';


function Title(props){
    
    return (
        <div>
            <label htmlFor="title" className= 'm-2'>Title:</label><br />
            <input onChange={event => props.setTitle(event.target.value)} id="title" type="text" name="title" required className= 'm-2'/><br />
        </div>
    )
    
}

export default Title;
