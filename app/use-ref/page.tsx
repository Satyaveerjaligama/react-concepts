'use client';
import { useRef, useState } from "react";

const UseRefHook = () => {
    const ref = useRef(0);

    const incrementRef = () => {
        ref.current += 1;
    };

    const consoleRef = () => {
        console.log(ref);
    }

    return (
        <>
        <p>--------------useRef hook-----------------</p>
            <button onClick={incrementRef}>Increment Ref</button>
            <br />
            <button onClick={consoleRef}>Log ref</button>
            <br />
            {ref.current}
        </>
    )
};

export default UseRefHook;