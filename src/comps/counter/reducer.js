export default
(val={},act)=>
{
  switch(act.type)
  {
    case 'COUNTER_INCREMENT':
      val=
      {
        ...val
        ,count:val.count+1
      }
      return val
    case 'COUNTER_DECREMENT':
      val=
      {
        ...val
        ,count:val.count-1
      }
      return val
    default:
      return val
  }
}
