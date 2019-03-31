import { ADD} from '../actions/actionType'

const initialState = {
    busgetCount: 0,

}



export default (state = initialState, action) => {

  switch (action.type) {
    case ADD:
      return {
        busgetCount: state.busgetCount + 1,
        }
    default:
      return state
  }

}