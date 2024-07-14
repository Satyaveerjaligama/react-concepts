'use client';
import { useEffect, useState } from "react";

const SetTimeoutHook = () => {
    const [message, setMessage] = useState('');

    useEffect(()=>{
        setMessage('Progress')
        const timeoutId = setTimeout(()=>{
            console.log('status will update now');
            setMessage('10 secs completed');
        }, 10000)

        return ()=> clearTimeout(timeoutId);
    }, []);

    return (
        <p>Status: {message}</p>
    )
};

export default SetTimeoutHook;