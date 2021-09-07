import React from 'react';


function ShuffleQuestions(props){

    const handleChange = (e) =>{
        if(!e.target.checked){
            props.setShuffleQuestions(false);
        }else props.setShuffleQuestions(true);
    }
    
    return (
        <div>
            <input onChange={handleChange} type="checkbox" id="shuffleQuestions" name="shuffleQuestions" value="false" />
            <label htmlFor="shuffleQuestions"> Shuffle Questions</label><br />
        </div>
    )
    
}

export default ShuffleQuestions;
