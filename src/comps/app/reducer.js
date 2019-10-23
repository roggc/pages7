import combine from '../../redux/combineReducers'
import todo from '../todo/reducer'
import count from '../counter/reducer'
import login from '../login/reducer'
import signin from '../signin/reducer'

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
    case 'APP_SET_STATE':
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
    ,count
    ,login
    ,app
    ,signin
  }
)
