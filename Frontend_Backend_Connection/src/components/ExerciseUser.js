import React,{useState} from 'react';
import axios from 'axios';
function ExerciseUser() {
    const [userName, setuserName] = useState('');
    const onUserName=(e)=> 
    { 
        setuserName(e.target.value)
    }

    const submit_form=()=>
    {
        const user_obj=
        {
            userName:userName,
        }
        
        console.log(user_obj)
        axios.post('http://localhost:3000/users/add',user_obj)
         .then(res => console.log(res.data))

        // const postToken =()=>
        // {
        //    return axios.post('http://localhost:3000/users/add',user_obj)
        //     .then(response => console.log(response.data))
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // }
        

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
