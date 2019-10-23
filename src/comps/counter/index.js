import React from 'react'
import {Div} from './styled'

export default
({state,dispatch})=>
{
  const incrementCounter=
  ()=>
  dispatch({type:'COUNTER_INCREMENT'})
  const decrementCounter=
  ()=>
  dispatch({type:'COUNTER_DECREMENT'})
  const el=
  <Div>
    <div>{state.counter.count}</div>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
  </Div>
  return el
}
