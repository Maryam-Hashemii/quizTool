

export default function InputForm() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let messageRef = initFirebase.database().ref('messages');
//     let newMsgRef = messageRef.push()
//     newMsgRef.set(e.target.value)
//     // console.log(dataToSend)
//   }
  return (
    <form>
    <p style={{display:"block", marginLeft:"20%"}}>Title</p>
    <input style={{display: "inline-block", marginLeft:"20%"}} type="text" placeholder="title" 
    label="Title" size="50" ></input>
    {/* <button type="submit" >Submit</button> */}
    <p style={{ marginLeft:"20%", marginTop:"1%"}}>Instruction</p> 
    <textarea style={{display:"inline-block", marginLeft:"20%", size:"25%"}} rows="5" type = 'text' placeholder="instruction"
     label="Instruction" size ="50"  ></textarea>

  </form>
  )
}