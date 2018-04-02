import { FETCH_TOPIC } from "../actions/actionTypes"

const initialState = {
  reply: {},
  topic: {}
}

function topic(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOPIC:
    console.log( action.payload);
      return {...state, topic: action.payload }
    default:
      return state
  }
}

export default topic;
