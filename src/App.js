import React from 'react'
import { counterActions } from './redux/slice/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const {counter} = useSelector((state)=>state.counter);
  const {increment,decrement} = counterActions;

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      {counter}
      <button onClick={()=>dispatch(decrement(5))}>-</button>
    </div>
  )
}

export default App