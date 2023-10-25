"use client";
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const [vari, setVari] = useState(0);

    function addCount() {
        setCount(count+1)
        setVari(vari+1)
    }
    function addCount2() {
        setCount2(count2+1)
        setVari(vari+1)
    }
    
    return (
        <div>
            <h1>Counter Component raaahhhhh</h1>
            <button onClick={() => addCount()}>Press Me</button>
            <p>Count: {count}</p>
            <button onClick={() => addCount2()}>Press me as well</button>
            <p>Count 2: {count2}</p>
            <p><br />total: {vari}</p> 
        </div>
    );
}