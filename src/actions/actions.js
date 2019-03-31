export { ADD, OPENFULL, DOUBLEADD, FILTERGENDER  } from './actionType'


export function add() {
  return {
    type: 'ADD',
  }
}

export function addToLis(prodname) {
  return {
    type: 'ADDTOLIST',
    playLoad: prodname
  }
}

export function doubleAdd(prodname) {
  return dispatch => {
    dispatch(add())
    dispatch(addToLis(prodname))
  }
}

export function selectGen(gender) {
  return {
    type: 'FILTERGENDER',
    playLoad: gender
  }
}
