import { useState } from "react";

export function StepCounter() {
const [state, setState] = useState(0);
const [change, setChange] = useState(1);

    return <>
    
    <p>Текущие шаги: {state}</p>
    <p>Длина шага: {change}</p>
    <div>
    <button
     onClick={() => {setState(state + change)}}
     >
        +
     </button>
     <button onClick={() => {setState(state - change)}}>
        -
     </button>
     </div>
     <div>
        <button onClick={() => {setChange(1)}}>1</button>
        <button onClick={() => {setChange(2)}}>2</button>
        <button onClick={() => {setChange(5)}}>5</button>
     </div>
    </>

}
