import React from 'react'
import { decrement, increment, incrementByAmount } from './redux/fetures/CounterSlice.jsx'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
  const dispatch = useDispatch()
  
  // ✅ Properly return count value from useSelector
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>Counter: {count}</h1>
      
      <button onClick={() => dispatch(increment())}>Increment +1</button>
      <button onClick={() => dispatch(decrement())}>Decrement -1</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
    </div>
  )
}
