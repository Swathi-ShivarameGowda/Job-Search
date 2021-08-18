import { combineReducers } from "redux";
import JobSearchReducer from "./JobSearchReducer"


const rootReducer = combineReducers({
jobSearchReducer: JobSearchReducer
})

export default rootReducer;