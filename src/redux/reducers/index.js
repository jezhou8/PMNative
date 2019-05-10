import { combineReducers } from "redux";
import map from "./MapReducer";
import events from "./EventsReducer";
import formData from "./FormReducer";
import user from "./UserReducer";

const rootReducer = combineReducers({
	map,
	events,
	formData,
	user,
});

export default rootReducer;
