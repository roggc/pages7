import React,{createContext,useReducer} from 'react'
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
import reducer from './reducer'
import useReducerWithDb from '../../hooks/useReducerWithDb/index'
import {UserCtx} from '../../ctx/index'
import Signin from '../signin/index'

export default
()=>
{
  const [state1,dispatch1]=useReducerWithDb(reducer,initialState,'state1')
  const [state2,dispatch2]=useReducerWithDb(reducer,initialState,'state2',state1.login.user)
  const [state3,dispatch3]=useReducerWithDb(reducer,initialState,'state3',state1.login.user)
  const [state4,dispatch4]=useReducerWithDb(reducer,initialState,'state4',state1.login.user)
  const [state5,dispatch5]=useReducerWithDb(reducer,initialState,'state5',state1.login.user)
  const el=
  <Div>
  <UserCtx.Provider value={state1.login.user}>
  <Router>
    <Container>
      <Header state={state2} dispatch={dispatch2}/>
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
                <Abs><Signin state={state2} dispatch={dispatch2} state1={state1} dispatch1={dispatch1}/></Abs>
              }/>
              <Route path='/login' render=
              {
                ()=>
                <Abs><Login state={state1} dispatch={dispatch1}/></Abs>
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
                    state1={state2} dispatch1={dispatch2}
                    state2={state3} dispatch2={dispatch3}/>
                  </Abs>
                  return el
                }

              }/>
              <Route path='/counters2' render=
              {
                ()=>
                <Abs>
                  <PageCounter
                  state1={state4} dispatch1={dispatch4}
                  state2={state5} dispatch2={dispatch5}/>
                </Abs>
              }/>
              <Route path='/todos1' render=
              {
                ()=>
                <Abs>
                  <Todo state={state2} dispatch={dispatch2}/>
                </Abs>
              }/>
              <Route path='/todos2' render=
              {
                ()=>
                <Abs>
                  <Todo state={state3} dispatch={dispatch3}/>
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
