import { OPENFULL, ADDTOLIST, FILTERGENDER } from '../actions/actionType'

const initialState = {
    isopen: false,
    prodname: [],
    gender: ''
}

export default (state = initialState, action) => {

    switch (action.type) {
        case OPENFULL:
            return {
                isopen: !state.isopen
            }
        case ADDTOLIST:
            var arr = []
            arr.push(action.playLoad)
            return {
                prodname: state.prodname.concat(arr),
                isopen: !state.isopen
            }
        case FILTERGENDER: 
            return {
                gender: action.playLoad
            }
        default:
            return state
    }

}