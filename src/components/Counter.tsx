import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 className={classes.h1}>{count}</h1>
      <button className={classes.green} onClick={increment}>
        increment
      </button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
