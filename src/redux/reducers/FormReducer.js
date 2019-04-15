import { CLEAR_FORM, FORM_DATA_CHANGED } from "../actions/ActionTypes";

const initialState = {
	EventName: "",
	EventLocation: "",
	Mood: "",
	Image: undefined,
};

const formData = (state = initialState, action) => {
	switch (action.type) {
		case CLEAR_FORM:
			return initialState;
		case FORM_DATA_CHANGED:
			return action.payload;
		default:
			return state;
	}
};

export default formData;
