import React from 'react';


function DisplayOneQuestion(props){

    const handleChange = (e) =>{
        if(!e.target.checked){
            props.setDisplayOneQuestion(false);
        }else props.setDisplayOneQuestion(true);
    }
    
    return (
        <div>
            <input onChange={handleChange} type="checkbox" id="displayOneQuestion" name="displayOneQuestion" value="false" />
            <label htmlFor="displayOneQuestion"> Display one question per page</label><br />
        </div>
    )
    
}

export default DisplayOneQuestion;
