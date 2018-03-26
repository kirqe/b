import { FETCH_THREAD } from "../actions/actionTypes"


const initialState = {
  reply: {},
  thread: {
    id: 111, board_id: 1, date: "23/03/2018",
    name: "random thread name", body: "Unpleasant astonished an diminution up partiality. Noisy an their of meant.", "replies": [
      {
        "id": 13,
        "date": "22/03/2018",
        "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "parent": 1,
      },
      {
        "id": 23,
        "date": "22/03/2018",
        "body": "1231231231erqwervwqerrvwer4rvqwqrw1231231231erqwervwqerrvwer4rvqwqrw",
        "parent": 13,
      },
      {
        "id": 233,
        "date": "22/03/2018",
        "body": "123213123123123123123!",
        "parent": 13,
      }
    ]
  }
}


function thread(state = initialState, action) {
  switch (action.type) {
    case FETCH_THREAD:
      return state
    default:
      return state
  }
}

export default thread;
