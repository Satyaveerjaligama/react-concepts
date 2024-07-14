'use client';
import { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [number, setNumber] =useState<number>(0);
    
    // Below callback will be executed only when the component is mounted.
    useEffect(() => {
        console.log('use effect call back function')
        return () => { 
            console.log('Clean up function')
        }
    }, []);

    /*
    If we click on button, the number will be updated.
    When the number is updated between the renders, below use effect will be executed
    */
    useEffect(() => {
        console.log("number", number);
    }, [number]);

    return (
        <>
        <p>------------------Use effect hook----------------------</p>
        <button onClick={()=>setNumber(Math.random())}>Button</button>
        </>
    )
}

export default UseEffectHook;