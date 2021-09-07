import React from 'react';


function RevealScore(props){

    const handleChange = (e) =>{
        if(!e.target.checked){
            props.setRevealScore(false);
        }else props.setRevealScore(true);
    }
    
    return (
        <div>
            <input onChange={handleChange} type="checkbox" id="revealScore" name="revealScore" value="false" />
            <label htmlFor="revealScore"> Reveal Sore</label><br />
        </div>
    )
    
}

export default RevealScore;
