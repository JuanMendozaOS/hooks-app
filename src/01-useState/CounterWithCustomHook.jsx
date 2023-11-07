import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  const {counter, increment, decrement, reset} = useCounter(10)
  return (
    <>
    <div>Counter with Hook: {counter}</div>
    <hr />

    <button className="btn btn-primary" onClick={increment}>+1</button>
    <button className="btn btn-info" onClick={reset}>Reset</button>
    <button className="btn btn-danger" onClick={decrement}>-1</button>
    </>

  )
}
