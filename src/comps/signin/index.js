import React,{useContext} from 'react'
import {Div} from './styled'
import graphql,{apiUrl} from '../../graphql/index'
import {UserCtx} from '../../ctx/index'
import ModalSpinner from '../modalSpinner/index'

const signinQuery=
`
mutation ($email:String!,$psswrd:String!,$name:String!)
{
  signin(email:$email,psswrd:$psswrd,name:$name)
  {
    errors
    {
      name
      message
      function
    }
    error
    {
      name
      message
      function
    }
    res
    {
      name
      email
    }
  }
}
`

export default
({state,dispatch,state1,dispatch1})=>
{
  const user=useContext(UserCtx)
  const signinCb=
  json=>
  {
    let res
    if(res=json.signin.res)
    {
      dispatch({type:'LOGIN_SET_USER',val:{name:res.name,email:res.email}})
    }
    dispatch({type:'SIGNIN_SET_FETCHING',val:false})
  }
  const signinClick=
  e=>
  {
    dispatch({type:'SIGNIN_SET_FETCHING',val:true})
    graphql(signinQuery)(state.signin.queryVars)(apiUrl)(signinCb)
  }
  const nameChange=
  e=>
  dispatch({type:'SIGNIN_SET_NAME',val:e.target.value})
  const emailChange=
  e=>
  dispatch({type:'SIGNIN_SET_EMAIL',val:e.target.value})
  const passwordChange=
  e=>
  dispatch({type:'SIGNIN_SET_PASSWORD',val:e.target.value})
  const el=
  <Div>
  {
    state.signin.fetching?
    <ModalSpinner />:
    ''
  }
  {
    user?
    <div className='center'>
      <div className='square'>
        Bienvenid@ {user.name}.
      </div>
    </div>:
    <div className='center'>
      <div className='square'>
        <div className='row'>
          <div>name</div>
          <div><input onChange={nameChange}/></div>
        </div>
        <div  className='row'>
          <div>email</div>
          <div><input onChange={emailChange}/></div>
        </div>
        <div  className='row'>
          <div>password</div>
          <div><input type='password' onChange={passwordChange}/></div>
        </div>
        <div  className='row last'>
          <div><button onClick={signinClick}>signin</button></div>
          <div></div>
        </div>
      </div>
    </div>
  }
  </Div>
  return el
}
