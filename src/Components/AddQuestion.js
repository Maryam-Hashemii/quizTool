import { Link, useHistory } from 'react-router-dom'

export default function AddQuestion() {
  let history = useHistory();
  return (
    <div>
      <Link to='/create/add-question'></Link>
      <button onClick={()=>history.push('/create/quiz/question')}>Add question</button>
    </div>
  )
  }