import React from 'react';
import fire from '../fire.js';
import { useHistory } from 'react-router-dom'

function CreateButton(props){
    let history = useHistory();
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
        history.push('/create/add-question')
    }
    
    return (
        <div>
            <button type="button" onClick={handleSubmit} className="btn btn-secondary btn-sm m-2">Create</button>
        </div>
    )
    
}

export default CreateButton;
