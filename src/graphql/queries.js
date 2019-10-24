export const queryGetState=
`
query($email:String!,$key:String!)
{
  getState(email:$email,key:$key)
  {
    res
  }
}
`

export const querySetState=
`
mutation($email:String!,$key:String!,$state:String)
{
  setState(email:$email,key:$key,state:$state)
}
`

export const loginQuery=
`
mutation ($email:String!,$psswrd:String!)
{
  login(email:$email,psswrd:$psswrd)
  {
    errors
    {
      name
      message
      function
    }
    error
    {
      name
      message
      function
    }
    res
    {
      name
      email
      id
    }
  }
}
`

export const logoutQuery=
`
mutation
{
  logout
}
`

export const signinQuery=
`
mutation ($email:String!,$psswrd:String!,$name:String!)
{
  signin(email:$email,psswrd:$psswrd,name:$name)
  {
    errors
    {
      name
      message
      function
    }
    error
    {
      name
      message
      function
    }
    res
    {
      name
      email
    }
  }
}
`
