export default
(val={},act)=>
{
  switch(act.type)
  {
    case 'LOGIN_SET_EMAIL':
      val=
      {
        ...val
        ,credentials:
        {
          ...val.credentials
          ,email:act.val
        }
      }
      return val
    case 'LOGIN_SET_PSSWRD':
      val=
      {
        ...val
        ,credentials:
        {
          ...val.credentials
          ,psswrd:act.val
        }
      }
      return val
    case 'LOGIN_SET_FETCHING':
      val=
      {
        ...val
        ,fetching:act.val
      }
      return val
    case 'LOGIN_SET_SHOW_LOGIN':
      val=
      {
        ...val
        ,showLogin:act.val
      }
      return val
    case 'LOGIN_SET_USER':
      val=
      {
        ...val
        ,user:
        {
          email:act.val.email
          ,name:act.val.name
        }
      }
      return val
    case 'LOGIN_RESET_CREDENTIALS':
      val=
      {
        ...val
        ,credentials:
        {
          ...val.credentials
          ,email:''
          ,passrd:''
        }
      }
      return val
    case 'LOGIN_RESET_USER':
      val=
      {
        ...val
        ,user:undefined
      }
      return val
    case 'SET_LOGIN':
      val=act.val
      val.isUpdateClient=true
      return val
    default:
      return val
  }
}
