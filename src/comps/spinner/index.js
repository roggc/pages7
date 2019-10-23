import React from 'react'
import {Div} from './styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

export default
()=>
{
  const el=
  <Div>
    <div className='float'><FontAwesomeIcon icon={faSpinner} spin/></div>
  </Div>
  return el
}
