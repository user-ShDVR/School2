import { useState } from "react"
import classes from './Counter.module.scss';
export const Counter = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className={classes.content}>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={()=>setCount(count+1)} >increment</button>
            <br/>
            <br/>
            <button className={classes.btn} onClick={()=>setCount(count-1)} >decrement</button>
        </div>
    )
}