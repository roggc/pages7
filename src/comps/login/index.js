import React,{useReducer} from 'react'
import {Div} from './styled'
import graphql,{apiUrl} from '../../graphql/index'
import Spinner from '../spinner/index'
// import initialState from './state'
// import reducer from './reducer'

const loginQuery=
`
mutation ($email:String!,$psswrd:String!)
{
  login(email:$email,psswrd:$psswrd)
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
      id
    }
  }
}
`
const logoutQuery=
`
mutation
{
  logout
}
`

export default
({state,dispatch})=>
{
  //const [state,dispatch]=useReducer(reducer,initialState)
  const loginCb=
  json=>
  {
    let res
    if(res=json.login.res)
    {
      dispatch({type:'LOGIN_SET_USER',val:{email:res.email,name:res.name}})
      localStorage.setItem('email',res.email)
    }
    dispatch({type:'LOGIN_SET_FETCHING',val:false})
  }
  const logoutCb=
  json=>
  {
    if(json.logout)
    {
      dispatch({type:'LOGIN_RESET_CREDENTIALS'})
      dispatch({type:'LOGIN_RESET_USER'})
      localStorage.setItem('email','')
    }
    dispatch({type:'LOGIN_SET_FETCHING',val:false})
  }
  const loginClick=
  e=>
  {
    dispatch({type:'LOGIN_SET_FETCHING',val:true})
    graphql(loginQuery)(state.login.credentials)(apiUrl)(loginCb)
  }
  const emailChange=
  e=>
  dispatch
  (
    {
      type:'LOGIN_SET_EMAIL'
      ,val:e.target.value
    }
  )
  const psswrdChange=
  e=>
  dispatch
  (
    {
      type:'LOGIN_SET_PSSWRD'
      ,val:e.target.value
    }
  )
  const logoutClick=
  e=>
  {

    dispatch({type:'LOGIN_SET_FETCHING',val:true})
    graphql(logoutQuery)({})(apiUrl)(logoutCb)
  }
  const el=
  <Div>
    {
      state.login.fetching?
      <div className='modal'>
        <div className='center'>
          <Spinner/>
        </div>
      </div>:
      ''
    }
    <div className='center'>
      <div className='center2'>
      {
        state.login.user?
        <div className='row'>
          hola {state.login.user.name}.&nbsp;<a onClick={logoutClick}><strong>logout</strong></a>
        </div>:
        <div>
          <div className='row'>
            <div>email</div>
            <div><input onChange={emailChange}/></div>
          </div>
          <div className='row'>
            <div>password</div>
            <div><input type='password' onChange={psswrdChange}/></div>
          </div>
          <div className='row last'>
            <button onClick={loginClick}>login</button>
          </div>
        </div>
      }
      </div>
    </div>
  </Div>
  return el
}
