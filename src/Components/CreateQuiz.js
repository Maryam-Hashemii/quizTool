import React, { useState, useEffect } from 'react';
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

    useEffect(()=>{

        console.log(title);
        console.log(instructions);
        console.log(revealScore);
        console.log(displayOneQuestion);
        console.log(shuffleQuestions);
        console.log(addTimer);
        console.log(assignmentUID);
        console.log(noOfAttempts);
        
    });
    return (
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
    )
    
}

export default CreateQuiz;
