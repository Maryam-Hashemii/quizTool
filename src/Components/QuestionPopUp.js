import React from 'react'
import './QuestionPopUp.css' 
import DropdownQuestion from './DropdownQuestion';
import { Link } from 'react-router-dom'

const items=[
  {
    id: 1,
    value: 'Single Choice',
  },
  {
    id: 2,
    value: 'Select All That Apply',
  },
  {
    id: 3,
    value: 'Fill In The Blanks',
  },
  {
    id: 4,
    value: 'Matching',
  },
  {
    id: 5,
    value: 'Short Answer',
  },
  {
    id: 6,
    value: 'Coding',
  },
];

function QuestionPopUp(props) {
  let trigger = {props}
  const handleCancel = () => {
    console.log(props)
    trigger = false
    console.log(trigger)
  }
  return (trigger) ? (
    <div>
      <Link to='/create/quiz/question'>
      <div className="questionPopUpView">
        <div className="questionPopUp-inner">
          <h4>New Question</h4> 
          <div className="line">
          <hr/>
          </div>
          <h4 className="questionTypeTitle">Question Type</h4>
          <DropdownQuestion title="Single Choice" items={items} />      
            <form>
            <p className="pointsTitle" >Points</p>
            <input className="pointsInput" placeholder="1"></input>         
            <p className="questionTitle">Question</p> 
            <textarea className="questionBox" rows="5" type = 'text'>
            </textarea>
        </form>
          <button className="cancelButton" onClick={handleCancel}>Cancel</button>
          <button className="saveAndAdd">Save and Add Another</button>
          <button className="save">Save</button>
          {props.children}
        </div>
      </div>
    </Link>
    </div>
  )  :"";
}

export default QuestionPopUp;
