import { useContext } from "react";
import { CountContext } from "./page";

const GrandChildComponent = () => {
    const {count, setCount} = useContext(CountContext);
    console.log('Grand child component')
    return (
        <>
        <p>Grand Child Component</p>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Change count</button>
        </>
    )
}

export default GrandChildComponent;