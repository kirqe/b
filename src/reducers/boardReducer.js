import { FETCH_BOARDS, FETCH_BOARD } from "../actions/actionTypes"


const initialState = {
  boards: [],
  board: {},
  threads: [],
  topics: []
}


function boards(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARDS:
      return {...state, boards: action.payload}
    case FETCH_BOARD:
      return {...state, topics: action.payload}
    default:
      return state
  }
}

export default boards;
