import header from '../images/header.jpg'
import logo from '../images/logo.png'
 
export default function Header() {
  return (
    <div style={{display:'flex',justifyContent:"space-around", gap:"400px", }}>
      <img className="hi" id="headerImg" src={header} alt="header" width="100%" ></img>
      <img id="logo" src={logo} alt="logo" width="10%" height="10%" ></img>
      {/* <button type="button">Quiz</button>
      <button type="button">Assign to</button> */}
    </div>
  )
}