import { FETCH_BOARDS, FETCH_BOARD, ADD_THREAD } from "./actionTypes";
import axios from "axios";

const api = "http://localhost:3000/api/boards/"

export function fetch_boards() {
  return dispatch => {
    axios.get(api)
    .then((res) => {
      dispatch({ type: FETCH_BOARDS, payload: res.data.boards })
    })
    .catch((err) => console.log(err))
  }
}

export function fetch_board(id) {
  return dispatch => {
    axios.get(api + id + "/topics")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_BOARD, payload: res.data.topics})
    })
    .catch((err) => console.log(err))

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
