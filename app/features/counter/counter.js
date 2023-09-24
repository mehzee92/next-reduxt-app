"use client"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {

  const count = useSelector((state) => state.counter)

  const dispatch = useDispatch()

  return (
    <div>

      <div>
        <button onClick={() => dispatch(decrement())}> - </button>
          <span style={{padding:"8px 25px"}}>{count.value}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>

      <div> Rs: {count.price} </div>
    </div>
  )
}

export default Counter;