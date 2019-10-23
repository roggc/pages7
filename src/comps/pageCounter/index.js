import React,{useContext} from 'react'
import {Div} from './styled'
import Counter from '../counter/index'
import {UserCtx} from '../../ctx/index'

export default
({state1,setState1,state2,setState2})=>
{
  const user=useContext(UserCtx)
  const el=
  <Div>
  {
    user?
    <div>
      <Counter state={state1} setState={setState1}/>
      <Counter state={state2} setState={setState2}/>
    </div>:
    <div className='pageCounter-center'>you must &nbsp;<strong>login</strong>&nbsp; please</div>
  }
  </Div>
  return el
}
