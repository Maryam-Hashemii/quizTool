import React from 'react';
import fire from '../fire.js';


function CreateButton(props){
    const handleSubmit = (e) =>{
        const assignmentDetailsRef = fire.database().ref('assignmentDetails').push(props.assignmentDetailsParameters);
        const assignmentDetailsUID = assignmentDetailsRef.key;

        let assignmentParameters = {
                assignmentTitle: props.title,
                assignmentDetailsID: assignmentDetailsUID
             }
        const assignmentRef = fire.database().ref('assignment').push(assignmentParameters);
        const assignmentUID = assignmentRef.key;
        props.setAssignmentUID(assignmentUID);
    }
    
    return (
        <div>
            <button type="button" onClick={handleSubmit} className="btn btn-secondary btn-sm m-2">Create</button>
        </div>
    )
    
}

export default CreateButton;
