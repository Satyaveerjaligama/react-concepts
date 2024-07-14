'use client';
import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ReactMemo = () => {
    const [parentCount, setParentCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    /*
    Child component is wrapped with memo
    So, when parent count is incremented/updated, the child component won't re-render
    But when child count is incremented/updated, the child component will re-render
    */

    console.log('parent component');
    return (
        <>
        <p>-------Memo------</p>
        <p>Parent count :- {parentCount}</p>
        <button onClick={()=>setParentCount(parentCount+1)}>Increment parent count</button>
        <br />
        <br />
        <ChildComponent count={childCount}/>
        <button onClick={()=>setChildCount(childCount+1)}>Increment child count</button>
        </>
    );
}

export default ReactMemo;