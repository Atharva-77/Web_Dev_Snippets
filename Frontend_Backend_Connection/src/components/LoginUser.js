import React, {useState,useEffect} from 'react'
import axios from 'axios';

function Login() {
      const [user, setuser] = useState('')
      const [pass, setpass] = useState('')
      const [nameList, setnameList] = useState([])

      let objLen=0;
      // let id1=0;
      // useEffect(() => 
      // {
      //   axios.get('http://localhost:3000/users/searching?userName=')
      //     .then((res)=>
      //     {
      //       setnameList(res.data)
      //     })
        
      // }, [])

      const submit_form=()=>
      {
        console.log("hi");
        console.log(user,pass);
        console.log("Data is-",nameList );

        // objLen=Object.keys(nameList).length
        // for(let i=0;i<objLen;i++)
        // {
        //   // console.log(nameList[i].userName);

        //   if(nameList[i].userName === user)
        //   {
        //     // id1=nameList[i]._id;
        //     console.log("Login is true");
        //   }
        // }

        const ex=
        {
          "userName":user, 
          "password":pass
        }
        axios.post(`http://localhost:3000/login_be`,ex)
         .then((res) => console.log(res.data))
        
         console.log("Obj is",ex);
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
          {/* <form action="/post" method="/logins"> */}
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
            {/* </form> */}
            {console.log(user,pass)}
        </ div>
    )


}


export default Login

