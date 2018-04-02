import { combineReducers } from "redux"
import boardReducer from "./boardReducer"
import topicReducer from "./topicReducer"

const rootReducer = combineReducers({
  board: boardReducer,
  topic: topicReducer
})

export default rootReducer;
