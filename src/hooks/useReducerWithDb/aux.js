export const dispatchSet=
(dispatch,state,isInitial=false)=>
{
  const keys = Object.keys(state)
  keys.forEach
  (
    key=>
    {
      if(isInitial&& key==='login')
      {
      }
      else
      {
        dispatch({type:'SET_'+key.toUpperCase(),val:state[key]})
      }
    }
  )
}

export const checkIsUpdateClient=
state=>
{
  const keys = Object.keys(state)
  const result=
  keys.some
  (
    key=>
    {
      if(state[key].isUpdateClient)
      {
        state[key].isUpdateClient=false
        return true
      }
    }
  )
  return result
}
