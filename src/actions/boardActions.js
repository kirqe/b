import { FETCH_BOARDS, FETCH_BOARD, ADD_THREAD } from "./actionTypes"


export function fetch_board() => {
  return dispatch => {
    dispatch({
      type: FETCH_BOARD,
      payload: board
    })
  }
}

export function add_thread(thread) {
  return dispatch => {
    dispatch({
      type: ADD_THREAD,
      payload: thread
    })
  }
}
