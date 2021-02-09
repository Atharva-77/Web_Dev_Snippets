import React,{ useState,useEffect} from 'react'

function UseEffect_Timer() {
    const [count, setcount] = useState(0)
    
    const tick =()=>
    {
        setcount(count+1)
    }
    useEffect(() => {
        const interval = setInterval(tick,3000)

        return()=>
        {
            clearInterval(interval)
        }
            
    }, [count])

    return (
        <div>
            {count}
       
        </div>
    )
}

export default UseEffect_Timer
