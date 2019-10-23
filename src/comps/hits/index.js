import React,{useState,useEffect,useCallback} from 'react'
import {Div} from './styled'
import Spinner from '../spinner/index'
import initialState from './state'

export default
()=>
{
  const [state,setState]=useState(initialState)
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
        setState
        (
          {
            ...state
            ,hits:json.hits
            ,loaded:true
          }
        )
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
              setState
              (
                {
                  ...state
                  ,hover:item.objectID
                }
              )
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
