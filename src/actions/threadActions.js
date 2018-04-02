import { FETCH_THREAD, REPLY_TO_THREAD } from "./actionTypes"
import axios from "axios";
const api = "http://localhost:3000/api/boards/"

export function fetch_thread(params) {



  return dispatch => {
    axios.get(api + params.perm + "/topics/" + params.id)
    .then((res) => {
      dispatch({ type: FETCH_THREAD, payload: res.data })
    })
    .catch((err) => console.log(err))
  }
}

export function reply_to_thread(reply) {
  return dispatch => {
    dispatch({
      type: REPLY_TO_THREAD,
      payload: reply
    })
  }
}
