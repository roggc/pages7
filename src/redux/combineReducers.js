export default
reducers=>(val={},act)=>
{
  const nextVal = {}
  const keys = Object.keys(reducers)
  for(let i= 0; i< keys.length; i++)
  {
    nextVal[keys[i]]= reducers[keys[i]](val[keys[i]], act)
  }
  return nextVal
}
