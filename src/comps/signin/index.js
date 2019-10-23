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
({state,setState,state1,setState1})=>
{
  const user=useContext(UserCtx)
  const signinCb=
  json=>
  {
    let res
    if(res=json.signin.res)
    {
      setState1
      (
        {
          ...state1
          ,login:
          {
            ...state1.login
            ,user:
            {
              ...state1.login.user
              ,name:res.name
              ,email:res.email
            }
          }
        }
      )
    }
    setState
    (
      {
        ...state
        ,signin:
        {
          ...state.signin
          ,fetching:false
        }
      }
    )
  }
  const signinClick=
  e=>
  {
    setState
    (
      {
        ...state
        ,signin:
        {
          ...state.signin
          ,fetching:true
        }
      }
    )
    graphql(signinQuery)(state.signin.queryVars)(apiUrl)(signinCb)
  }
  const nameChange=
  e=>
  setState
  (
    {
      ...state
      ,signin:
      {
        ...state.signin
        ,queryVars:
        {
          ...state.signin.queryVars
          ,name:e.target.value
        }
      }
    }
  )
  const emailChange=
  e=>
  setState
  (
    {
      ...state
      ,signin:
      {
        ...state.signin
        ,queryVars:
        {
          ...state.signin.queryVars
          ,email:e.target.value
        }
      }
    }
  )
  const passwordChange=
  e=>
  setState
  (
    {
      ...state
      ,signin:
      {
        ...state.signin
        ,queryVars:
        {
          ...state.signin.queryVars
          ,psswrd:e.target.value
        }
      }
    }
  )
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
        Bienvenido {user.name}.
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
