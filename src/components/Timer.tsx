import { useEffect, useState } from "react";

export const Timer = () => {
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(0);

useEffect(() => {
    const timer = setInterval(
() => {
    if (seconds === 60) {
        setMinutes(minutes + 1);
        setSeconds(0);
    } else {

        setSeconds(seconds +1);
        }
    }, 1000);

    return () =>{
        clearInterval(timer)
    }

}
);

    return <>
    <span>{minutes}</span>
    <span>:</span>
    <span>{seconds}</span>
    </>
}