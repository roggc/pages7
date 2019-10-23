import React,{useRef,useEffect,useContext} from 'react'
import {Div} from './styled'
import check from '../../img/check.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt,faPlus} from '@fortawesome/free-solid-svg-icons'
import {UserCtx} from '../../ctx/index'

export default
({state,setState})=>
{
  const user=useContext(UserCtx)
  const addTodo=
  ()=>
  setState
  (
    {
      ...state
      ,todo:
      {
        ...state.todo
        ,showNewTodo:true
      }
    }
  )
  const confirmAdd=
  e=>
  {
    const value=state.todo.inputValue
    if(value&& value!=='')
    {
      e.stopPropagation()
      const todos=state.todo.todos.filter(todo=>true)
      todos.push({text:value,done:false})
      setState
      (
        {
          ...state
          ,todo:
          {
            ...state.todo
            ,todos
            ,showNewTodo:false
            ,inputValue:''
          }
        }
      )
    }
    else
    {
      cancelAdd()
    }
  }
  const cancelAdd=
  ()=>
  {
    setState
    (
      {
        ...state
        ,todo:
        {
          ...state.todo
          ,showNewTodo:false
          ,inputValue:''
        }
      }
    )
  }
  const allowFocus=
  e=>
  e.stopPropagation()
  const keyDown=
  e=>
  {
    if(e.key==='Enter')
    {
      confirmAdd(e)
    }
  }
  const setDone=
  i=>e=>
  {
    const todos=state.todo.todos.filter
    (
      todo=>true
    )
    todos.some
    (
      (todo,index)=>
      {
        if(index===i)
        {
          todo.done=true
          return true
        }
      }
    )
    setState
    (
      {
        ...state
        ,todo:
        {
          ...state.todo
          ,todos
        }
      }
    )
  }
  const clearTodos=
  ()=>
  setState
  (
    {
      ...state
      ,todo:
      {
        ...state.todo
        ,showClearTodos:true
      }
    }
  )
  const confirmClear=
  e=>
  {
    e.stopPropagation()
    setState
    (
      {
        ...state,
        todo:
        {
          ...state.todo,
          todos:[],
          showClearTodos:false
        }
      }
    )
  }
  const cancelClear=
  ()=>
  setState
  (
    {
      ...state
      ,todo:
      {
        ...state.todo
        ,showClearTodos:false
      }
    }
  )
  const inputChange=
  e=>
  setState
  (
    {
      ...state
      ,todo:
      {
        ...state.todo
        ,inputValue:e.target.value.toUpperCase()
      }
    }
  )
  const deleteTodo=
  i=>e=>
  {
    const todos=state.todo.todos.filter
    (
      (todo,index)=>
      {
        if(index!==i)
        {
          return true
        }
      }
    )
    setState
    (
      {
        ...state
        ,todo:
        {
          ...state.todo
          ,todos
        }
      }
    )
  }
  const setDoneAll=
  e=>
  setState
  (
    {
      ...state
      ,todo:
      {
        ...state.todo
        ,showSetDoneAll:true
      }
    }
  )
  const cancelSetDoneAll=
  e=>
  setState
  (
    {
      ...state
      ,todo:
      {
        ...state.todo
        ,showSetDoneAll:false
      }
    }
  )
  const confirmSetDoneAll=
  e=>
  {
    const todos=state.todo.todos.filter(todo=>true)
    todos.forEach
    (
      todo=>
      todo.done=true
    )
    setState
    (
      {
        ...state
        ,todo:
        {
          ...state.todo
          ,todos
        }
      }
    )
  }
  const inputRef=useRef(null)
  useEffect
  (
    ()=>
    {
      if(inputRef.current)
      {
        inputRef.current.focus()
      }
    }
  )
  const el=
  <Div>
    {
      state.todo.showNewTodo?
      <div className='modal' onClick={cancelAdd} onKeyDown={keyDown}>
        <div className='center'>
          <input ref={inputRef} onClick={allowFocus} onChange={inputChange} value={state.todo.inputValue}/>
        </div>
        <div className='center'><button onClick={confirmAdd}><FontAwesomeIcon icon={faPlus}/></button></div>
      </div>:
      ''
    }
    {
      state.todo.showClearTodos?
      <div className='modal' onClick={cancelClear}>
        <div className='center'>CLEAR ALL?</div>
        <div className='center'>
          <button onClick={confirmClear}><FontAwesomeIcon icon={faTrashAlt}/>/All</button>
        </div>
      </div>:
      ''
    }
    {
      state.todo.showSetDoneAll?
      <div className='modal' onClick={cancelSetDoneAll}>
        <div className='center'>CHECK ALL?</div>
        <div className='center'>
          <button onClick={confirmSetDoneAll}><img src={check}/>/ALL</button>
        </div>
      </div>:
      ''
    }
    {
      user?
      <div>
        <div className='tooltip-container'>
          <button onClick={addTodo}><FontAwesomeIcon icon={faPlus}/></button>
          <span className='tooltip'>add todo</span>
        </div>
        &nbsp;
        <button onClick={setDoneAll}><img src={check}/>/All</button>
        &nbsp;
        <button onClick={clearTodos}><FontAwesomeIcon icon={faTrashAlt}/>/All</button>
        <ul>
          {
            state.todo.todos.map
            (
              (todo,i)=>
              <li key={i}>
                {todo.text}&nbsp;
                {
                  todo.done?
                  <div className='inline'>
                    <img src={check}/>&nbsp;
                    <button onClick={deleteTodo(i)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                  </div>:
                  <div className='inline'>
                    <button onClick={setDone(i)}><img src={check}/></button>&nbsp;
                    <button onClick={deleteTodo(i)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                  </div>
                }
              </li>
            )
          }
        </ul>
      </div>:
      <div className='todo-center'>you must &nbsp;<strong>login</strong>&nbsp; please</div>
    }
  </Div>
  return el
}
