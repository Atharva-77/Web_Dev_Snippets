import React,{useState} from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'


function ExerciseUser() {
    const [userName, setuserName] = useState('');
    const [boolpg, setboolpg] = useState(0);

    const api=axios.create({
        baseURL: 'http://localhost:3000/users/'
    })


    const onUserName=(e)=> 
    { 
        setuserName(e.target.value)
    }

    const submit_form=()=>
    {
        const user_obj=
        {
            "username":userName,
        }
        
        console.log(user_obj)
        axios.post(`http://localhost:3000/users/add`,user_obj)
         .then(res => console.log(res.data))

        // api2.post('/',user_obj)
        // const cc=async()=> {
        //     let res=await api2.post('/',user_obj)
        //     console.log(res)
        // }
        // cc       ()

        api.get('/').then(res => {
            console.log(res.data)
        })

         console.log("Here:- ",userName)
         if(userName === "sun12")
            {
                   const ab=()=> {setboolpg(1)} //see abt callback,.Bool printing wrong value/ not updated value in console.

                //    https://stackoverflow.com/questions/55983047/strange-behavior-of-react-hooks-delayed-data-update
                
                    ab()
                // console.log("Boolean value",boolpg)
            }
            // console.log("Boolean value",boolpg)
        console.log("Username is - ",userName)
        setuserName('')
        console.log("Boolean value",boolpg)


    }


    if(!boolpg)
    {
        return (
            <div>
                <h3>You are in Exercise User</h3>
                UserName<input value={userName} onChange={onUserName}/><br /><br />
                <h2>{boolpg}</h2>
                <button onClick={submit_form}>Submit</button>
                <h2>{boolpg}</h2>
                {/* <h1>Login Again</h1> */}
    
            </div>
        )
    }

    else if(boolpg===1)
    {
        return (
            <div>
                <h3>You are in Exercise User</h3>
                UserName<input value={userName} onChange={onUserName}/><br /><br />
                {/* <h2>{boolpg}</h2> */}
                <button onClick={submit_form}>Submit</button>
                {/* <h2>{boolpg}</h2> */}
                { boolpg ? <Redirect to="/" /> : null }
    
            </div>
        )
        
    }
    // else
    // {
    //     return (<h1>LOgin again</h1>)
    // }
    // return (
    //     <div>
    //         <h3>You are in Exercise User</h3>
    //         UserName<input value={userName} onChange={onUserName}/><br /><br />
    //         <h2>{boolpg}</h2>
    //         <button onClick={submit_form}>Submit</button>
    //         <h2>{boolpg}</h2>
    //         { boolpg ? <Redirect to="/" /> : <h1>Login Again</h1> }

    //     </div>
    // )
}

export default ExerciseUser
