import React, {useState} from 'react'

function UseState_Obj() {

    const [fullname,setName]= useState({firstname:"",lastname:""})

    return (
        <div>
            <input value={fullname.firstname} onChange={(e)=> setName({...fullname, firstname: e.target.value})}/>
            {/* Copy every property/ make replica in fullname obj, and change firstname field */}
            <input value={fullname.lastname} onChange={(e)=> setName({...fullname,lastname: e.target.value})}/>

             {/* Copy every property/ make replica in fullname obj, and change firstname field */}

             {/* useState dose not automatically merge & update the obj. Hence need to be added. */}
            {/* Setstate will merge the state */}

            {/* Spread operator is used for merging */}

            <h2>FirstName is {fullname.firstname}</h2>
            <h2>LastName is {fullname.lastname}</h2>

            <h2>{JSON.stringify(fullname)}</h2>
        </div>
    )
}

export default UseState_Obj
