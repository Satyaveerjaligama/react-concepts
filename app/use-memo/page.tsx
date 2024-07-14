'use client';
import { useMemo, useState } from "react";

const UseMemoHook = () => {
    const [dataOne, setDataOne] = useState(0);
    const [dataTwo, setDataTwo] = useState(0);

    const calculate = (data: number) => {
        // some expensive calculation
        console.log("data",data);
        return data;
    }

    console.log('Component');

    /*Since we are using useMemo, value won't be calculated for every render.
    It will only calculate when the dataTwo value is changed */
    const calculatedValue = useMemo(()=>calculate(dataTwo), [dataTwo]);

    return (
        <>
        <p>Value: {calculatedValue}</p>
        <button onClick={()=>setDataOne(dataOne+1)}>Button to update data one</button>
        <br />
        <button onClick={()=>setDataTwo(dataTwo+1)}>Button to update data two</button>
        </>
    )
};

export default UseMemoHook;