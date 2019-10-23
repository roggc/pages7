import React from 'react'
import {Div} from './styled'

export default
({state,setState})=>
{
  const incrementCounter=
  ()=>
  setState
  (
    {
      ...state
      ,counter:
      {
        ...state.counter
        ,count:state.counter.count+1
      }
    }
  )
  const decrementCounter=
  ()=>
  setState
  (
    {
      ...state
      ,counter:
      {
        ...state.counter
        ,count:state.counter.count-1
      }
    }
  )
  const el=
  <Div>
    <div>{state.counter.count}</div>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
  </Div>
  return el
}
