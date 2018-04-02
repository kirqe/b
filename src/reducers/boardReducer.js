import { FETCH_BOARDS, FETCH_MORE_BOARDS, FETCH_BOARD } from "../actions/actionTypes"

const initialState = {
  boards: [],
  topics: [],
  next_href: ""
}

function boards(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARDS:
      return {...state, boards: action.payload.boards, next_href: action.payload.next_href }
    case FETCH_MORE_BOARDS:
      return {...state, topics: state.topics.concat(action.payload.topics), next_href: action.payload.next_href }
    case FETCH_BOARD:
      return {...state, topics: action.payload.topics, next_href: action.payload.next_href}
    default:
      return state
  }
}

export default boards;
