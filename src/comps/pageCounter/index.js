import React,{useContext} from 'react'
import {Div} from './styled'
import Counter from '../counter/index'
import {UserCtx} from '../../ctx/index'

export default
({state1,dispatch1,state2,dispatch2})=>
{
  const user=useContext(UserCtx)
  const el=
  <Div>
  {
    user?
    <div>
      <Counter state={state1} dispatch={dispatch1}/>
      <Counter state={state2} dispatch={dispatch2}/>
    </div>:
    <div className='pageCounter-center'>you must &nbsp;<strong>login</strong>&nbsp; please</div>
  }
  </Div>
  return el
}
