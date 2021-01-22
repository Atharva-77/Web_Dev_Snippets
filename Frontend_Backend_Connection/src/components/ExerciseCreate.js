import React,{useState} from 'react';
import DatePicker from  'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function ExerciseCreate() {
    const [username, setusername] = useState('');
    const [description, setdescription] = useState('');
    const [duration, setduration] = useState(0);
    const [date, setdate] = useState(new Date());

    const onUsername=(e)=> 
    { 
        setusername(e.target.value)
    }
    const onDescription=(e)=> 
    { 
        setdescription(e.target.value)
    }
    const onDuration=(e)=> 
    { 
        setduration(e.target.value)
    }
    const onDate=(date)=> 
    { 
        setdate(date)
    }

    const submit_form=()=>
    {
        const ex={
            user:username,
            desc:description,
            durat:duration,
            dat:date
        }
        console.log(ex)
       
    }


    return (
        <div>
            <h3>You are in Exercise Create</h3>
            Username<input value={username} onChange={onUsername}/><br /><br />
            Description<input value={description} onChange={onDescription}/><br /><br />
            Duration<input value={duration} onChange={onDuration}/><br /><br />
            Date<DatePicker selected={date} onChange={onDate}/><br /><br />
            <button onClick={submit_form}>Submit</button>
        </div>
    )
}

export default ExerciseCreate
