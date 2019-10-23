import React,{createContext,useState} from 'react'
import {Div,Container,Fade,FloatL,FloatR,Container2,Abs} from './styled'
import Header from '../header/index'
import Footer from '../footer/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from '../login/index'
import About from '../about/index'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import Hits from '../hits/index'
import PageCounter from '../pageCounter/index'
import Todo from '../todo/index'
import initialState from './state'
import useStateWithDb from '../../hooks/useStateWithDb'
import {UserCtx} from '../../ctx/index'
import Signin from '../signin/index'

export default
()=>
{
  const [state1,setState1]=useStateWithDb(initialState,'state1')
  const [state2,setState2]=useStateWithDb(initialState,'state2',state1.login.user)
  const [state3,setState3]=useStateWithDb(initialState,'state3',state1.login.user)
  const [state4,setState4]=useStateWithDb(initialState,'state4',state1.login.user)
  const [state5,setState5]=useStateWithDb(initialState,'state5',state1.login.user)
  const el=
  <Div>
  <UserCtx.Provider value={state1.login.user}>
  <Router>
    <Container>
      <Header state={state2} setState={setState2}/>
    </Container>
    <Container2>
        <Route render=
        {
          ({location})=>
          <Fade><TransitionGroup><CSSTransition
            timeout={450}
            key={location.key}
            classNames='fade'
            appear={true}>
            <Switch location={location}>
              <Route path='/' exact render=
              {
                ()=>
                <Abs><Signin state={state2} setState={setState2} state1={state1} setState1={setState1}/></Abs>
              }/>
              <Route path='/login' render=
              {
                ()=>
                <Abs><Login state={state1} setState={setState1}/></Abs>
              }/>
              <Route path='/about' render={()=><Abs><About/></Abs>}/>
              <Route path='/hits' render={()=><Abs><Hits/></Abs>}/>
              <Route path='/counters1' render=
              {
                ()=>
                {
                  const el=
                  <Abs>
                    <PageCounter
                    state1={state2} setState1={setState2}
                    state2={state3} setState2={setState3}/>
                  </Abs>
                  return el
                }

              }/>
              <Route path='/counters2' render=
              {
                ()=>
                <Abs>
                  <PageCounter
                  state1={state4} setState1={setState4}
                  state2={state5} setState2={setState5}/>
                </Abs>
              }/>
              <Route path='/todos1' render=
              {
                ()=>
                <Abs>
                  <Todo state={state2} setState={setState2}/>
                </Abs>
              }/>
              <Route path='/todos2' render=
              {
                ()=>
                <Abs>
                  <Todo state={state3} setState={setState3}/>
                </Abs>
              }/>
            </Switch>
          </CSSTransition></TransitionGroup></Fade>
        }/>
    </Container2>
    <Container>
      <Footer/>
    </Container>
    </Router>
    </UserCtx.Provider>
  </Div>
  return el
}
