'use client';
import { useEffect } from "react";

const Promises = () => {

    const executeFunction = async() => {
        await new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log("set time out done");
                resolve('sample');
            }, 5000);
            console.log('outside timeout')
        }).then(()=>{
            console.log('Then')
        }).catch(()=>{
            console.log('catch')
        }).finally(()=>{
            console.log('Finally block');
        })
        console.log('outside promise')
    };

    useEffect(()=> {
        executeFunction();
    });
    
    return (
        <>
            <p>---------Promises-------------</p>
            <p>Check the console logs</p>
        </>
    )
}

export default Promises;