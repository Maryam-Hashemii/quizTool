import { Link, useHistory } from 'react-router-dom'
import Header from './Header';

export default function AddQuestion() {
  let history = useHistory();
  return (
    <div>
      <Header/>
      <Link to='/create/add-question'></Link>
      <button onClick={()=>history.push('/create/quiz/question')}>Add question</button>
    </div>
  )
  }