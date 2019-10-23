import React from 'react'
import {Div} from './styled'
import Spinner from '../spinner/index'

export default
()=>
{
  const el=
  <Div>
    <div className='modalSpinner-modal'>
      <div className='modalSpinner-center'>
        <Spinner/>
      </div>
    </div>
  </Div>
  return el
}
