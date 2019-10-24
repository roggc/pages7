export default
(val={},act)=>
{
  switch(act.type)
  {
    case 'SIGNIN_SET_NAME':
      val=
      {
        ...val
        ,queryVars:
        {
          ...val.queryVars
          ,name:act.val
        }
      }
      return val
    case 'SIGNIN_SET_EMAIL':
      val=
      {
        ...val
        ,queryVars:
        {
          ...val.queryVars
          ,email:act.val
        }
      }
      return val
    case 'SIGNIN_SET_PASSWORD':
      val=
      {
        ...val
        ,queryVars:
        {
          ...val.queryVars
          ,psswrd:act.val
        }
      }
      return val
    case 'SIGNIN_SET_FETCHING':
      val=
      {
        ...val
        ,fetching:act.val
      }
      return val
    case 'SET_SIGNIN':
      val=act.val
      val.isUpdateClient=true
      return val
    default:
      return val
  }
}
