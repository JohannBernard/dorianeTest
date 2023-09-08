import { combineReducers } from 'redux'
import breed from './breed'

const allReducers = Object.assign({},
  breed,
);

const appReducer = combineReducers(allReducers);

const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  //@ts-ignore
  return appReducer(state, action)
}

export default rootReducer
