import {useReducer,useEffect,useCallback} from 'react'
import {apiUrl,fetchOptions} from '../graphql/index'

/*
  this hook pretends to store state data into db and recover it.
*/

const queryGetState=
`
query($email:String!,$key:String!)
{
  getState(email:$email,key:$key)
  {
    res
  }
}
`

const querySetState=
`
mutation($email:String!,$key:String!,$state:String)
{
  setState(email:$email,key:$key,state:$state)
}
`

export default
(reducer,initialState,key,user=null)=>
{
  const [state,dispatch]=useReducer(reducer,initialState)
  let email=localStorage.getItem('email')

  const updateClient=
  useCallback
  (
    async ()=>
    {
      if(user||state.login.user||email)
      {
        if(user||state.login.user)
        {
          email=user?user.email:state.login.user.email
        }
        const resp=await fetch(apiUrl,fetchOptions(queryGetState)({email,key}))
        const json=await resp.json()
        if(json.data&& json.data.getState&& json.data.getState.res)
        {
          dispatch({type:'APP_SET_STATE',val:JSON.parse(json.data.getState.res)})
          //console.log(JSON.parse(json.data.getState.res),'updated client '+key+' with '+email)
        }
        else
        {
          dispatch({type:'APP_SET_STATE',val:initialState})
          //console.log(initialState,'updated client '+key+' with '+email)
        }
      }
    },
    [user]
  )

  const updateDb=
  useCallback
  (
    async ()=>
    {
      if(user||state.login.user)
      {
        const email=user?user.email:state.login.user.email

        localStorage.setItem('email',email)
        if(user||!state.login.fetching)
        {
          const resp=await fetch(apiUrl,fetchOptions(querySetState)({email,key,state:JSON.stringify(state)}))
          const json=await resp.json()
          if(json.data.setState)
          {
            //console.log(state,'updated db '+key+' with '+email)
          }
        }
      }
    },
    [state,state.login.user]
  )

  useEffect
  (
    ()=>
    {
      updateClient()
    },
    [updateClient]
  )

  useEffect
  (
    ()=>
    {
      updateDb()
    },
    [updateDb]
  )
  return [state,setState]
}
