import React from 'react';


function AddTimer(props){

    const handleChange = (e) =>{
        if(!e.target.checked){
            props.setAddTimer(false);
        }else props.setAddTimer(true);
    }
    
    return (
        <div>
            <input onChange={handleChange} type="checkbox" id="addTimer" name="addTimer" value="false" />
            <label htmlFor="addTimer"> Add Timer</label><br />
        </div>
    )
    
}

export default AddTimer;
