import { Link, useHistory } from 'react-router-dom'

export default function Home() {
let history = useHistory();
  return (
    <div>
      <Link to='/'></Link>
      <button onClick={()=>history.push('/create/quiz')}>Create Quiz</button>
      <button onClick={()=>history.push('/create/assignment')}>Create Assignment</button>
      <button onClick={()=>history.push('/student')}>Student Side</button>
    </div>
  )
}