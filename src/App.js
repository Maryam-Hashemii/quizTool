import Header from './Components/Header'
import InputForm from './Components/InputForm'
import QuestionPopUp from './Components/QuestionPopUp'
import { useState } from 'react';

export default function App() {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  return (
    <div>
      <Header/>
      <InputForm/>
      <main>
         {/* this button should be moved to another page */}
      <button onClick={()=> setButtonPopUp(true)} >Add Question</button>
      <QuestionPopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}/>
      </main>
    </div>
    )
  }
