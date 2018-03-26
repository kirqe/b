import { FETCH_THREAD, REPLY_TO_THREAD } from "./actionTypes"


export function reply_to_thread(reply) {
  return dispatch => {
    dispatch({
      type: REPLY_TO_THREAD,
      payload: reply
    })
  }
}
