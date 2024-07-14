'use client';
import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallbackHook = () => {
    const [childCount, setChildCount] = useState(0);
    const [parentCount, setParentCount] = useState(0);

    /*
    if we don't use useCallBack, increment function will be re-created for every re-render
    and since we are passing the increment function to child component it will re-render the child component as well


    if we use the useCallBack
    When parentCount is incremented and triggers a re-render, increment function won't be re-created, so child component won't re-render.
    
    When increment function is called, it updates childCount which in turn will trigger a re-render.
    Between the renders the childCount has changed and as we have passed the childCount as a dependency for useCallBack
    now the increment function will be re-created and child component will also re-render
    */
    
    console.log('Parent component');
    const increment = useCallback(()=>{
        setChildCount(childCount+1);
    }, [childCount]);

    return (
        <>
        <p>---------useCallBack------------</p>
        <p>Parent count:- {parentCount}</p>
        <button onClick={()=>setParentCount(parentCount + 1)}>Increment parent count</button>
        <br />
        <br />
        <p>Child count: - {childCount}</p>
        <ChildComponent increment={increment} />
        </>
    )
};

export default UseCallbackHook;