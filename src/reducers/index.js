import { combineReducers } from 'redux'
import busgetReduc from './busget'
import proListReduc from './prodList'


export default combineReducers({
  busgetReduc,
  proListReduc
})