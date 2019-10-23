import React from 'react'
import {Div} from './styled'
import graphql,{apiUrl} from '../../graphql/index'
import Spinner from '../spinner/index'

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
({state,setState})=>
{
  const loginCb=
  json=>
  {
    let res

    if(res=json.login.res)
    {
      setState
      (
        {
          ...state
          ,login:
          {
            ...state.login
            ,user:
            {
              ...state.login.user
              ,email:res.email
              ,name:res.name
            },
            fetching:false
          }
        }
      )
    }
    else
    {
      setState
      (
        {
          ...state
          ,login:
          {
            ...state.login
            ,fetching:false
          }
        }
      )
    }
  }
  const logoutCb=
  json=>
  {
    if(json.logout)
    {
      setState
      (
        {
          ...state
          ,login:
          {
            ...state.login
            ,credentials:
            {
              ...state.login.credentials
              ,email:''
              ,psswrd:''
            }
            ,user:undefined
            ,fetching:false
          }
        }
      )
    }
    else
    {
      setState
      (
        {
          ...state
          ,login:
          {
            ...state.login
            ,fetching:false
          }
        }
      )
    }
  }
  const loginClick=
  e=>
  {
    setState
    (
      {
        ...state
        ,login:
        {
          ...state.login
          ,fetching:true
        }
      }
    )
    graphql(loginQuery)(state.login.credentials)(apiUrl)(loginCb)
  }
  const emailChange=
  e=>
  setState
  (
    {
      ...state
      ,login:
      {
        ...state.login
        ,credentials:
        {
          ...state.login.credentials
          ,email:e.target.value
        }
      }
    }
  )
  const psswrdChange=
  e=>
  setState
  (
    {
      ...state
      ,login:
      {
        ...state.login
        ,credentials:
        {
          ...state.login.credentials
          ,psswrd:e.target.value
        }
      }
    }
  )
  const logoutClick=
  e=>
  {
    setState
    (
      {
        ...state
        ,login:
        {
          ...state.login
          ,fetching:true
        }
      }
    )
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
