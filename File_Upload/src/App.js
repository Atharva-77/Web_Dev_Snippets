import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios'

function App() {
// var acc={".jpg",".png"}
var cars = [".jpg", ".png", "BMW"];
let finalImg=''

  const [Name, setName] = useState('')
  const [file, setfile] = useState('')
  const [ans, setans] = useState('')
const send=()=>
{
  // e.preventDefault()
    console.log("Send clicked");
  const Data = new FormData()
         
  Data.append('Name', Name)
       Data.append('Ninad', 'Ath')
       Data.append('file',file)
      //  axios.post("https://httpbin.org/anything",Data)
      axios.post("http://localhost:5000/upload/add",Data)
       .then(
          res=>
          {
            console.log(res.data)
            setans(res.data)
          })
       .catch(err=>console.log(err))
       console.log(Data);


       console.log("ANS-SEND",ans);
    
}

  const uploadFileHandler=(e)=>
  {
    const file=e.target.files[0]
    setfile(file)
    console.log(file);
    // const Data = new FormData()
         
    // Data.append('Name', Name)
    //      Data.append('Ninad', 'Ath')
    //      Data.append('file',file)
    //     //  axios.post("https://httpbin.org/anything",Data)
    //     axios.post("http://localhost:6000/upload/add")
    //      .then(res=>console.log(res.data))
    //      .catch(err=>console.log(err))
    //      console.log(Data);

    console.log("ANS-UPLOAD",ans);

  }
  return (
    <div className="App">
      <h2>APP</h2>

      {/* <form> */}
          Name<input
                   value={Name} 
                   onChange={(e)=>{setName(e.target.value)}} 
                   placeholder="Enter Full Name" />

          <input type="file" id="file" accept={cars}
           onChange={uploadFileHandler}/>

<button onClick={()=>{send()}}>Send</button>
          {/* <button onClick={send}>Send</button> */}
      {/* </form> */}
      {/* {} */}
      {/* {console.log("ANS ",ans.split("/")[ans.split("/").length-1])} */}

      {finalImg=ans.split("/")[ans.split("/").length-1]}
      {/* {ans==''?{finalImg="back.png"}:{finalImg=ans.split("/")[ans.split("/").length-1]}} */}
      <img src={`/Uploadedimages/${finalImg}`} />


      <img src={`/Uploadedimages/back.jpg`} />




    </div>
  );
}

export default App;
