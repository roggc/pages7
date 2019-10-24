import {useReducer,useEffect,useCallback,useRef} from 'react'
import {fetchOptions} from '../../graphql/index'
import {apiUrl} from '../../graphql/urls'
import {queryGetState,querySetState} from '../../graphql/queries'
import {dispatchSet,checkIsUpdateClient} from './aux'

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
          if(checkIsUpdateClient(state))
          {
            return
          }
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
    },
    [updateClient]
  )

  const isFirstRun=useRef(true)

  useEffect
  (
    ()=>
    {
      if(isFirstRun.current)
      {
        isFirstRun.current=false
        return
      }
      updateDb()
    },
    [updateDb]
  )

  return [state,dispatch]
}
