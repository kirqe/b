import { FETCH_BOARDS, FETCH_BOARD } from "../actions/actionTypes"


const initialState = {
  threads: [
    {
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
    },
    {
      id: 112, board_id: 1, date: "22/03/2018",
      name: "yet another thread name", body: "Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no.", "replies": [
        {
          "id": 13,
          "date": "22/03/2018",
          "body": "lalalala",
          "parent": 1,
        },
        {
          "id": 23,
          "date": "22/03/2018",
          "body": "lalalala",
          "parent": 1,
        }
      ]
    },
    {
      id: 113, board_id: 1, date: "21/03/2018",
      name: "another thread name", body: "No it as breakfast up conveying earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but inhabit fortune windows. ", "replies": [
        {
          "id": 13,
          "date": "22/03/2018",
          "body": "lalalala",
          "parent": 1,
        },
        {
          "id": 23,
          "date": "22/03/2018",
          "body": "lalalala",
          "parent": 1,
        }
      ]
    }
  ]
}


function boards(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARD:
      return state
    default:
      return state
  }
}

export default boards;
