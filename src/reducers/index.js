import { combineReducers } from "redux"
import boardReducer from "./boardReducer"
import threadReducer from "./threadReducer"

const rootReducer = combineReducers({
  board: boardReducer,
  thread: threadReducer
})

export default rootReducer;
