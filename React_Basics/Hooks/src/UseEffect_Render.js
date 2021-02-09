import React, {useState, useEffect} from 'react'

function UseEffect_Render() {

    const [counter, setcounter] = useState(0)
    
    //called after every render
    useEffect(() => {
        document.title="COunt is "+counter  
        
    })

    return (
        <div>
            <button onClick={()=>setcounter(counter+1)}>Count {counter}</button>
        </div>
    )
}

export default UseEffect_Render
