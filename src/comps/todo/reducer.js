export default
(val={},act)=>
{
  let todos
  switch(act.type)
  {
    case 'TODO_SHOW_NEW_TODO':
      val=
      {
        ...val
        ,showNewTodo:true
      }
      return val
    case 'TODO_NOT_SHOW_NEW_TODO':
      val=
      {
        ...val
        ,showNewTodo:false
      }
      return val
    case 'TODO_ADD_TODO':
      val=
      {
        ...val
        ,todos:
        [
          ...val.todos
          ,{text:act.val,done:false}
        ]
      }
      return val
    case 'TODO_SET_DONE_TODO':
      val=
      {
        ...val
      }
      val.todos.some
      (
        (todo,i)=>
        {
          if(i===act.val)
          {
            todo.done=true
          }
        }
      )
      return val
    case 'TODO_SHOW_CLEAR_TODOS':
      val=
      {
        ...val
        ,showClearTodos:true
      }
      return val
    case 'TODO_NOT_SHOW_CLEAR_TODOS':
      val=
      {
        ...val
        ,showClearTodos:false
      }
      return val
    case 'TODO_CLEAR_TODOS':
      val=
      {
        ...val
        ,todos:[]
      }
      return val
    case 'TODO_SET_INPUT_VALUE':
      val=
      {
        ...val
        ,inputValue:act.val
      }
      return val
    case 'TODO_DELETE_TODO':
      todos=val.todos.filter
      (
        (todo,i)=>
        {
          if(i!==act.val)
          {
            return true
          }
        }
      )
      val=
      {
        ...val
        ,todos
      }
      return val
    case 'TODO_SET_DONE_ALL':
      todos=val.todos.filter(todo=>true)
      todos.forEach
      (
        todo=>
        todo.done=true
      )
      val=
      {
        ...val
        ,todos
      }
      return val
    case 'TODO_SHOW_SET_DONE_ALL':
      val=
      {
        ...val
        ,showSetDoneAll:true
      }
      return val
    case 'TODO_NOT_SHOW_SET_DONE_ALL':
      val=
      {
        ...val
        ,showSetDoneAll:false
      }
      return val
    default:
      return val
  }
}
