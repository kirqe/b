import { FETCH_BOARDS, FETCH_MORE_BOARDS, FETCH_BOARD } from "./actionTypes";
import axios from "axios";

const api = "http://localhost:3000/api/boards/"

export function fetch_boards() {
  return dispatch => {
    axios.get(api)
    .then((res) => {
      dispatch({ type: FETCH_BOARDS, payload: res.data })
    })
    .catch((err) => console.log(err))
  }
}

export function fetch_more_boards(url) {
  return dispatch => {
    axios.get(url)
    .then((res) => {
      dispatch({ type: FETCH_MORE_BOARDS, payload: res.data })
    })
    .catch((err) => console.log(err))
  }
}

export function fetch_board(id) {
  return dispatch => {
    axios.get(api + id + "/topics")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_BOARD, payload: res.data})
    })
    .catch((err) => console.log(err))

  }
}
