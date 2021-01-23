import React,{useState} from 'react';
import axios from 'axios';
function ExerciseUser() {
    const [userName, setuserName] = useState('');
    const api=axios.create({
        baseURL: 'http://localhost:3000/users/'
    })
    const api2=axios.create({
        baseURL: 'http://localhost:3000/users/add'
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
        // cc()

        api.get('/').then(res => {
            console.log(res.data)
        })

         console.log("Here:- ")


        setuserName('')

    }


    return (
        <div>
            <h3>You are in Exercise User</h3>
            UserName<input value={userName} onChange={onUserName}/><br /><br />
            <button onClick={submit_form}>Submit</button>
        </div>
    )
}

export default ExerciseUser
