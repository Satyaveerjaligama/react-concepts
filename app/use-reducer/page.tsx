'use client';
import { useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
    count: 0,
};

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <p>------------use reducer hook------------</p>
            <p>count : {state.count}</p>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <br />
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>

        </>
    );
};

export default UseReducerHook;