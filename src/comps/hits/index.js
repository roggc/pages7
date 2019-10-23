import React,{useReducer,useEffect,useCallback} from 'react'
import {Div} from './styled'
import Spinner from '../spinner/index'
import initialState from './state'
import reducer from './reducer'

export default
()=>
{
  const [state,dispatch]=useReducer(reducer,initialState)
  const fetchData=
  useCallback
  (
    ()=>
    {
      fetch('https://hn.algolia.com/api/v1/search?query=react')
      .then(resp=>resp.json())
      .then
      (
        json=>
        dispatch({type:'FETCH_DATA',val:json.hits})
      )
    }
    ,[]
  )
  useEffect
  (
    ()=>
    {
      fetchData()
    }
    ,[fetchData]
  )
  const el=
  <Div>
  {
    state.loaded?
    <ul>
    {
      state.hits.map
      (
        item=>
        <li key={item.objectID}>
          <a
            href={item.url}
            onMouseOver=
            {
              ()=>
              dispatch({type:'SET_HOVER',val:item.objectID})
            }
            className={state.hover===item.objectID?'hover':''}
            >{item.title}</a>
        </li>
      )
    }
    </ul>:
    <div className='centerC'><div className='centerR'><Spinner/></div></div>
  }
  </Div>
  return el
}
