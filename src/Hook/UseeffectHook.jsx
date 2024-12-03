
//here whenever the page rerender, useeffect hook will call, as we known state will rerender the page to show the data,that time useeffect will also call again, that why it will console the data two time.
// so we need to pass an empty array in useeffect that will listen all the state which want to recall the useeffect when its state value changes.
//1.here  we have only one state that is data, and we do not want to call useffect when its value changes so we are passing empty array.
//2. when we have more than one state, and we want to call useeffect when one of then changes their value, that state variable need to add in that array. 
import Axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
export const UseeffectHook=()=>{
    const[data, setdata]= useState("");
    const [count, setCount]= useState(0)
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/comments").then(
        (response)=>{
            setdata(response.data[0].email);
            console.log("api was called");
        }
    )
    },[count]);
    const Increment=()=>{
        setCount(count+1);
    }
    return(
        <div>
                <h1>{data}</h1>
                <h1>{count}</h1>
                <button onClick={Increment}>increment</button>
        </div>
    )
}