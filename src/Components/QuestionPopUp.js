import React from 'react'
import './QuestionPopUp.css' 



function questionPopUp(props) {
  return (props.trigger) ? (
    <div className="questionPopUpView">
      <div className="questionPopUp-inner">
        <h4>New Question</h4> 
        <div className="line">
        <hr/>
        </div>
        
      
        {/* <div className="questionTypeMenu">
        </div> */}
        <button className="cancelButton" onClick={()=> props.setTrigger(false)}>Cancel</button>
        <button className="saveAndAdd">Save and Add Another</button>
        <button className="save">Save</button>
        {props.children}
      </div>
    </div>
  )  :"";
}

export default questionPopUp
