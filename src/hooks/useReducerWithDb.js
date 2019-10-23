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
const dispatchSet=
(dispatch,state,isInitial=false)=>
{
  const keys = Object.keys(state)
  keys.forEach
  (
    key=>
    {
      if(isInitial&& key==='login')
      {
      }
      else
      {
        dispatch({type:'SET_'+key.toUpperCase(),val:state[key]})
      }
    }
  )
}

export default
(reducer,initialState,key,user=null)=>
{
  const [state,dispatch]=useReducer(reducer,initialState)
  let email=localStorage.getItem('email')
  if(user)
  {
    email=user.email
  }

  const updateClient=
  useCallback
  (
    async ()=>
    {
      if(email)
      {
        const resp=await fetch(apiUrl,fetchOptions(queryGetState)({email,key}))
        const json=await resp.json()
        if(json.data&& json.data.getState&& json.data.getState.res)
        {
          const stateDb=JSON.parse(json.data.getState.res)
          dispatchSet(dispatch,stateDb)
          console.log(stateDb,'updated client '+key+' with '+email)
        }
        else
        {
          dispatchSet(dispatch,initialState,true)
          console.log(initialState,'updated client '+key+' with '+email)
        }
      }
    },
    [email]
  )

  const updateDb=
  useCallback
  (
    async ()=>
    {
      if(email)
      {
        if(!state.login.fetching)
        {
          const resp=await fetch(apiUrl,fetchOptions(querySetState)({email,key,state:JSON.stringify(state)}))
          const json=await resp.json()
          if(json.data.setState)
          {
            console.log(state,'updated db '+key+' with '+email)
          }
        }
      }
    },
    [state]
  )

  useEffect
  (
    ()=>
    {
      updateClient()
      //updateDb2()
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

  return [state,dispatch]
}
