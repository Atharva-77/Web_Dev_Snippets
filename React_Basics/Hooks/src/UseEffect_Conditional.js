import React,{useState,useEffect} from 'react'

function UseEffect_Conditional() {
    const [counter, setcounter] = useState(0)
    const [names, setnames] = useState('')

    useEffect(() => {
        console.log("Updating the docs")
        document.title="COunt is "+counter  
    },[counter])

    return (
        <div>
            <input value={names} onChange={(e)=> setnames(e.target.value)}/>
            <button onClick={()=>setcounter(counter+1)}>Count {counter}</button>
        </div>
    )
}

export default UseEffect_Conditional
