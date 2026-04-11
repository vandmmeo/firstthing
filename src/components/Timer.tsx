import { Progress } from "antd";
import { useEffect, useState } from "react";
type Props = {
    seconds: number;
}

export const Timer = (props: Props) => {
const [seconds, setSeconds] = useState(props.seconds);

useEffect(() => {
    const timer = setInterval(
() => {
    if (seconds <=0) return;
setSeconds(seconds - 1);
    }, 1000);

    return () =>{
        clearInterval(timer)
    }

}
);

    return <Progress type="circle" percent={+(seconds / props.seconds * 100).toFixed(2)}/>
}