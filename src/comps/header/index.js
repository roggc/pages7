import React,{useState,useRef} from 'react'
import {Row,Float,Modal} from './styled'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import useOuterClick from '../../hooks/useOuterClick'

export default
({state:{app},dispatch})=>
{
  const [state,setState]=useState({showModal:false})
  const ref=useRef(null)
  useOuterClick(e=>setState({showModal:false}),ref)
  const toggleShow=
  e=>
  setState({showModal:!stateLocal.showModal})
  const modalClick=
  (e)=>
  e.stopPropagation()
  const linkClick=
  route=>e=>
  dispatch({type:'APP_SET_ROUTE_VAR',val:route})
  const el=
  <Row>
    <div>{app.route}</div>
    <Float onClick={toggleShow} ref={ref}>
      <FontAwesomeIcon icon={faBars}/>
      <Modal className={state.showModal?'show':'notShow'} onClick={modalClick}>
        <div onClick={toggleShow}><Link to='/' onClick={linkClick('signin')}>signin</Link></div>
        <div onClick={toggleShow}><Link to='/login' onClick={linkClick('login')}>login</Link></div>
        <div onClick={toggleShow}><Link to='/about' onClick={linkClick('about')}>about</Link></div>
        <div onClick={toggleShow}><Link to='/hits' onClick={linkClick('hits')}>hits</Link></div>
        <div onClick={toggleShow}><Link to='/counters1' onClick={linkClick('counters1')}>counters1</Link></div>
        <div onClick={toggleShow}><Link to='/counters2' onClick={linkClick('counters2')}>counters2</Link></div>
        <div onClick={toggleShow}><Link to='/todos1' onClick={linkClick('todos1')}>todos1</Link></div>
        <div onClick={toggleShow}><Link to='/todos2' onClick={linkClick('todos2')}>todos2</Link></div>
      </Modal>
    </Float>
  </Row>
  return el
}
