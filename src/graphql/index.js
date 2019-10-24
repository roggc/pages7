export const fetchOptions=
query=>variables=>
{
  const options=
  {
    method: 'POST'
    ,credentials:'include'
    ,headers:
    {
      'Content-Type': 'application/json'
      ,'Accept': 'application/json'
    }
    ,body:
    JSON.stringify
    (
      {
        query
        ,variables
      }
    )
  }
  return options
}

export default
query=>variables=>url=>cb=>
{
  const options=
  {
    method: 'POST'
    ,credentials:'include'
    ,headers:
    {
      'Content-Type': 'application/json'
      ,'Accept': 'application/json'
    }
    ,body:
    JSON.stringify
    (
      {
        query
        ,variables
      }
    )
  }
  fetch(url,options)
  .then(resp=>resp.json())
  .then(json=>cb(json.data))
}
