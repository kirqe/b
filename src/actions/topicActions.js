import { FETCH_TOPIC, REPLY_TO_TOPIC, ADD_TOPIC} from "./actionTypes"
import axios from "axios";
const api = "http://localhost:3000/api/boards/"

export function fetch_topic(params) {

  return dispatch => {
    axios.get(api + params.perm + "/topics/" + params.id)
    .then((res) => {
      dispatch({ type: FETCH_TOPIC, payload: res.data })
    })
    .catch((err) => console.log(err))
  }
}

export function reply_to_topic(reply) {
  return dispatch => {
    dispatch({
      type: REPLY_TO_TOPIC,
      payload: reply
    })
  }
}

export function add_topic(perm, topic) {
  return dispatch => {

    axios.post(api + perm + "/topics/", topic)
    .then((res) => {
      dispatch({ type: ADD_TOPIC, payload: res.data })
    })
    .catch((err) => console.log(err))
  }
}
