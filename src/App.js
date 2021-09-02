import Header from './Components/Header'
import InputForm from './Components/InputForm'
import header from './images/header.jpg'
// import header from './images/Logo.png'
import firebase from "firebase"

// const db = firebase.database()
// prop
// hook
// useContext
// useState / useEffect

export default function app() {


  return (
    <div>
      <Header/>
      <InputForm/>
    </div>
    )
}

// import React, { Component } from 'react';

// class App extends Component {
//   onSubmit(e) {
//       e.preventDefault();
//       // var title = this.title;
//       console.log('Form Submitted');
//   }
//   render() { 
//       return ( 
//           <div>
//               <form action="">

//                   <div>
//                       <label htmlFor="title" className= 'm-2'>Title:</label><br />
//                       <input id="title" type="text" name="title" required className= 'm-2'/><br />
//                   </div>
//                   <div>
//                       <label htmlFor="instructions" className= 'm-2'>Instructions:</label><br />
//                       <textarea rows="3" id="instructions" className= "m-2"></textarea>        
//                   </div>
//               <button type="button" onClick={this.onSubmit} className="btn btn-secondary btn-sm m-2">Save</button>
//               </form>
//           </div>
//        );
//   }
// }
// export default App;
