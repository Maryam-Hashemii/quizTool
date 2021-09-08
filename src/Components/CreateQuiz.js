import React, { useState } from 'react';
import '../App.css';
// import fire from '../fire.js';
import Title from './Title';
import Instructions from './Instructions';
import RevealScore from './RevealScore';
import DisplayOneQuestion from './DisplayOneQuestion';
import ShuffleQuestions from './ShuffleQuestions';
import AddTimer from './AddTimer';
import NoOfAttempts from './NoOfAttempts'
import GradeCategory from './GradeCategory';
import { Link } from 'react-router-dom'
import CreateButton from './CreateButton';

function CreateQuiz(){
    const [assignmentUID, setAssignmentUID] = useState("");
    const [title, setTitle] = useState("");
    const [instructions, setInstructions] = useState("");
    const [revealScore, setRevealScore] = useState("");
    const [displayOneQuestion, setDisplayOneQuestion] = useState("");
    const [shuffleQuestions, setShuffleQuestions] = useState("");
    const [addTimer, setAddTimer] = useState("");
    const [noOfAttempts, setNoOfAttempts] = useState(1);
    
    let assignmentDetailsParameters = {
        assignmentInstruction: instructions,
        revealScore: revealScore,
        displayOneQuestion: displayOneQuestion,
        shuffleQuestion: shuffleQuestions,
        addTimer: addTimer
      }

    // let assignmentParameters = {
    //     assignmentTitle: title,
    //     assignmentDetailsID: ''
    //  }

    return (
        <div>
            <Link to='/quiz/create'></Link>
            <div className = 'App'>
                <h3>Create Quiz</h3>
                <Title setTitle = {setTitle}/>
                <Instructions setInstructions= {setInstructions} />
                <RevealScore setRevealScore= {setRevealScore} />
                <DisplayOneQuestion setDisplayOneQuestion = {setDisplayOneQuestion} />
                <ShuffleQuestions setShuffleQuestions = {setShuffleQuestions} />
                <AddTimer setAddTimer = {setAddTimer} />
                <NoOfAttempts setNoOfAttempts = {setNoOfAttempts} />
                <GradeCategory /><br /><br /><br /><br />
                <CreateButton title={title} setAssignmentUID={setAssignmentUID} assignmentDetailsParameters = {assignmentDetailsParameters } />
            </div>
        </div>
    )
    
}

export default CreateQuiz;
