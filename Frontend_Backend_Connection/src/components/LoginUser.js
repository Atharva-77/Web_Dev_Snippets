import React, {useState,useEffect} from 'react'
import axios from 'axios';

function Login() {
      const [user, setuser] = useState('')
      const [pass, setpass] = useState('')
      const [nameList, setnameList] = useState([])

      let objLen=0;
      useEffect(() => 
      {
        axios.get('http://localhost:3000/users/searching?userName=')
          .then((res)=>
          {
            setnameList(res.data)
          })
        
      }, [])

      const submit_form=()=>
      {
        console.log("hi");
        console.log(user,pass);
        console.log("Data is-",nameList );

        objLen=Object.keys(nameList).length
        for(let i=0;i<objLen;i++)
        {
          // console.log(nameList[i].userName);

          if(nameList[i].userName === user)
          {
            console.log("Login is true");
          }
        }
      
        // if(user = )
        
        setuser('')
        setpass('')
      }

     const handleUser=(e)=>
      {
        setuser(e.target.value)
      }


      // const handleKeyDown = (event) => 
      // {
      //   if (event.key === 'Enter') 
      //   {
      //     console.log('do validate',event.target.value)
      //     setuser(event.target.value)
      //   }
      // }

    return (
        <div>
            <h3>Search User here</h3>
            Username<input
                value={user}
                onChange={handleUser} 
                // onKeyDown={handleKeyDown}
            /><br /><br />

             Password<input
                 type="password"
                value={pass}
                onChange={(e=>setpass(e.target.value))} 
            />
            <br /><br />
            <button onClick={submit_form}>Submit</button>

            {console.log(user,pass)}
        </ div>
    )


}


export default Login

