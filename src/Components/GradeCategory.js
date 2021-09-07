import { getElementError } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import fire from '../fire.js';


function GradeCategory(){
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        const dataArray = []
        const myDataRef = fire.database().ref('gradeCategory');

        const onDataCallback = (data) => {
            let snapshot  = Object.values(data.val())
           // snapshot.forEach( value => dataArray.push(value))
            setList(snapshot)
            console.log(dataArray)
        }

        myDataRef.on("value", onDataCallback);
       
    }, []);
    
    return (
        <div>
            <h2>Grade category</h2>
            <p>{list.map(category => <div>{category.categoryName}</div>)}</p>
            
        </div>
    )
    
}

export default GradeCategory;
