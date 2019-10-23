import combine from '../../redux/combineReducers'
import todo from '../todo/reducer'
import counter from '../counter/reducer'
import signin from '../signin/reducer'
import login from '../login/reducer'

const app=
(val={},act)=>
{
  switch (act.type)
  {
    case 'APP_SET_ROUTE_VAR':
      val=
      {
        ...val
        ,route:act.val
      }
      return val
    case 'SET_APP':
      val=act.val
      return val
    default:
      return val
  }
}

export default
combine
(
  {
    todo
    ,counter
    ,app
    ,signin
    ,login
  }
)
