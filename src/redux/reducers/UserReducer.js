import { RSVP_EVENT } from "../actions/ActionTypes";

const initialState = {
	id: 1,
	firstName: "John",
	lastName: "Zhou",
	stats: {
		kindnessGiven: 200,
		friends: 200,
	},
	eventsAttended: [
		{
			key: 0,
			name: "CS397 Presentation",
			latitude: 40.113744,
			longitude: -88.225659,
			Image:
				"https://facebook.github.io/react-native/docs/assets/favicon.png",
			attendees: ["jerry", "leo", "jonathan", "john", "alex"],
			startTime: "Now",
		},
	],
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case RSVP_EVENT:
			return {
				...state,
				eventsAttended: [action.payload, ...state.eventsAttended],
			};
		default:
			return state;
	}
}
