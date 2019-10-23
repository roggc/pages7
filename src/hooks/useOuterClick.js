import {useEffect} from 'react'

export default
(onOuterClick,innerRef)=>
useEffect
(
  () =>
  {
    const handleClick=
    (e)=>
    !innerRef.current.contains(e.target) && onOuterClick(e)
    innerRef.current&& document.addEventListener("click", handleClick)
    const func=
    ()=>
    document.removeEventListener("click", handleClick)
    return func
  },
  [onOuterClick, innerRef]
)
