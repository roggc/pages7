export default
(val={},act)=>
{
  switch(act.type)
  {
    case 'WWW':
      val=
      {
        ...val
        ,kkk:act.val
      }
      return val
    case 'SET_PROTO':
      val=act.val
      return val
    default:
      return val
  }
}
