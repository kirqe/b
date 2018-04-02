import { FETCH_THREAD } from "../actions/actionTypes"


const initialState = {
  reply: {},
  thread: {}
}


function thread(state = initialState, action) {
  switch (action.type) {
    case FETCH_THREAD:
    console.log( action.payload);
      return {...state, thread: action.payload }
    default:
      return state
  }
}

export default thread;
