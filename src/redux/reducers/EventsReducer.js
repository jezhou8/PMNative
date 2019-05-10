import { CREATE_EVENT, FILTER_EVENT } from "../actions/ActionTypes";

const initialState = [
	{
		key: 100,
		name: "CS397 Presentation",
		latitude: 40.113744,
		longitude: -88.225659,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo", "jonathan", "john", "alex"],
		startTime: "Now",
	},
	{
		key: 0,
		name: "Photography",
		latitude: 40.1135,
		longitude: -88.2166,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo", "jonathan", "john", "alex"],
		startTime: "Now",
	},
	{
		key: 1,
		name: "Soccer",
		latitude: 40.1169,
		longitude: -88.2196,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo"],
	},
	{
		key: 2,
		name: "Concert",
		latitude: 40.1165,
		longitude: -88.2261,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "john", "alex"],
	},
	{
		key: 3,
		name: "Basketball",
		latitude: 40.1249,
		longitude: -88.2296,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo", "john", "alex"],
	},
	{
		key: 4,
		name: "Movie",
		latitude: 40.1025,
		longitude: -88.2266,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry"],
	},
	{
		key: 5,
		name: "Boba Crawl",
		latitude: 40.0849,
		longitude: -88.2296,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo"],
	},
	{
		key: 6,
		name: "Studying",
		latitude: 40.1125,
		longitude: -88.2766,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo", "alex", "john"],
	},
	{
		key: 7,
		name: "Peer tutoring",
		latitude: 40.0869,
		longitude: -88.2196,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo"],
	},

	{
		key: 8,
		name: "Photography",
		latitude: 40.1925,
		longitude: -88.2066,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo", "jonathan", "john", "alex"],
		startTime: "Now",
	},
	{
		key: 9,
		name: "Soccer",
		latitude: 40.1149,
		longitude: -88.2296,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo"],
	},
	{
		key: 10,
		name: "Concert",
		latitude: 40.1125,
		longitude: -88.2266,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "john", "alex"],
	},
	{
		key: 11,
		name: "Basketball",
		latitude: 40.1149,
		longitude: -88.2296,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo", "john", "alex"],
	},
	{
		key: 12,
		name: "Movie",
		latitude: 40.1125,
		longitude: -88.2266,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry"],
	},
	{
		key: 13,
		name: "Boba Crawl",
		latitude: 40.1149,
		longitude: -88.2296,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo"],
	},
	{
		key: 16,
		name: "Studying",
		latitude: 40.1125,
		longitude: -88.2266,
		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo", "alex", "john"],
	},
	{
		key: 17,
		name: "Peer tutoring",
		latitude: 40.1149,
		longitude: -88.2296,

		Image:
			"https://facebook.github.io/react-native/docs/assets/favicon.png",
		attendees: ["jerry", "leo"],
	},
];

var key = 20;

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
			break;
		case FILTER_EVENT:
			return state.filter(function(event) {
				return event.name !== action.payload;
			});

		default:
			return state;
	}
};

export default events;
