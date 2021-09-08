import QuestionPopUp from './Components/QuestionPopUp'
// import { useState } from 'react';
import Home from '../src/Pages/Home'
import { Route, Switch } from 'react-router-dom';
import CreateQuiz from './Components/CreateQuiz';
import CreateAssignment from './Components/CreateAssignment';
import Student from '../src/Pages/Student'
import AddQuestion from './Components/AddQuestion';

export default function App() {
  // const [buttonPopUp, setButtonPopUp] = useState(false);
  return (
    <div className='App'>
      <Switch>
        <Route path='/create/quiz/question'>
          <QuestionPopUp/>
        </Route>
        <Route path='/create/quiz'>
          <CreateQuiz/>
        </Route>
        <Route path='/create/assignment'>
          <CreateAssignment/>
        </Route>
        <Route path='/create/add-question'>
          <AddQuestion/>
        </Route>
        <Route path='/student'>
          <Student/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>         
    </div>
    )
  }
