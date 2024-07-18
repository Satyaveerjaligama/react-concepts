'use client';
import { createContext, useState } from "react";
import ChildComponent from "./ChildComponent";

export const CountContext = createContext({
    count: 0,
    setCount: (value: number)=>{},
});

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    console.log('Parent component');

    return (
        <CountContext.Provider value={{count, setCount}}>
        <p>Parent Component</p>
        <ChildComponent />
        </CountContext.Provider>
    )
}

export default ParentComponent;