import React, {useState} from 'react';
import './DropdownQuestion.css';

function DropdownQuestion(props){
  let {title, items} = props;
  const [open, setOpen] = useState(false);
  const [confirmedTitle, setConfirmedTitle] = useState(title)
  const [showNewPopUp, setShowNewPopUp] = useState(false)
  const toggle = () => setOpen(!open);
  
   function handleOnClick(item) {
     setOpen(false);
     setConfirmedTitle(item.value);
     setShowNewPopUp(true)
    }
    
  return (
    <div className= "dd-wrapper">
      <div 
      tabIndex={0}
      className="dd-header"
      role="button"
      onKeyPress={() => toggle(!open)}
      onClick={() => toggle(!open)}
      >
        <div className="dd-header_title">
          <p className="dd-header_title--bold"> {confirmedTitle} </p>
        </div>
        </div>
      {open && (
        <ul className="dd-list" >
          {items.map(item => (
            <ol className="dd-list-item" key={item.id}>
              <button className="ddButton" type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
              </button>
            </ol>
          ))}
        </ul>
      )}
      
    </div>
  );
}
export default DropdownQuestion;