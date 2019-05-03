import { CREATE_EVENT } from "../actions/ActionTypes";

const initialState = [
	{
		key: 0,
		name: "Name2",
		latitude: 40.1125,
		longitude: -88.2266,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo", "jonathan", "john", "alex"],
		startTime: "Now",
	},
	{
		key: 1,
		name: "Name1",
		latitude: 40.1149,
		longitude: -88.2296,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo"],
	},
	{
		key: 2,
		name: "Name3",
		latitude: 40.1125,
		longitude: -88.2266,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "john", "alex"],
	},
	{
		key: 3,
		name: "Name4",
		latitude: 40.1149,
		longitude: -88.2296,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo", "john", "alex"],
	},
	{
		key: 4,
		name: "Name5",
		latitude: 40.1125,
		longitude: -88.2266,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry"],
	},
	{
		key: 5,
		name: "Name6",
		latitude: 40.1149,
		longitude: -88.2296,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo"],
	},
	{
		key: 6,
		name: "Name7",
		latitude: 40.1125,
		longitude: -88.2266,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo", "alex", "john"],
	},
	{
		key: 7,
		name: "Name8",
		latitude: 40.1149,
		longitude: -88.2296,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo"],
	},
];

var key = 2;

const events = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_EVENT:
			return [
				{
					key: key++,
					name: action.payload.EventName,
					latitude: action.payload.latitude,
					longitude: action.payload.longitude,
					Image: action.payload.Image,
					userId: "Jerry",
					attendees: ["jerry", "leo", "jonathan", "john", "alex"],
				},
				...state,
			];

		default:
			return state;
	}
};

export default events;
