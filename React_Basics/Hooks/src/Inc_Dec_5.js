import React,{useState} from 'react'

function Inc_Dec_5() {
    const initial =0;

    const [counter, setCounter] = useState(initial);

    const incBy5= ()=>
    {
        for(let i=1;i<=5;i++)
          {
            setCounter(previous=>previous+1)
        
            console.log("Inside loop",i,counter)
          }  

    }
    console.log(counter)
    return (
        <div>
            <button >Count {counter}</button>
            <button onClick={()=>{setCounter(initial)}}>Reset</button>
            <button onClick={()=> {setCounter(previous=>previous+1)}}>Increment</button>
            <button onClick={()=> {setCounter(previous=>previous-1)}}>Decrement</button>
            <button onClick={incBy5}>BY5</button>

        </div>
    )
}

export default Inc_Dec_5
