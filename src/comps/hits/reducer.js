export default
(val={},act)=>
{
  switch(act.type)
  {
    case 'FETCH_DATA':
      val=
      {
        ...val
        ,hits:act.val
        ,loaded:true
      }
      return val
    case 'SET_HOVER':
      val=
      {
        ...val
        ,hover:act.val
      }
      return val
    default:
      return val
  }
}
