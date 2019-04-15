import {
	FETCH_LOCATION_PENDING,
	FETCH_LOCATION_FULFILLED,
	FETCH_LOCATION_REJECTED,
	EXPAND_CARD,
	HIDE_CARD,
	LOAD_CARD_DATA,
} from "../actions/ActionTypes";

const initialState = {
	lastUpdated: 0,
	coords: { latitude: 37.78825, longitude: -122.4324 },
	latitudeDelta: 0.0091267,
	longitudeDelta: 0.0091267,
	isFetching: false,
	error: false,
	dataFetched: false,

	cardData: {
		newCardHeight: 0,
		selectedEvent: null,
	},
};

export default function mapReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_LOCATION_PENDING:
			return {
				...state,
				coords: initialState.coords,
				isFetching: true,
			};
		case FETCH_LOCATION_FULFILLED:
			return {
				...state,
				isFetching: false,
				coords: action.payload,
			};
		case FETCH_LOCATION_REJECTED:
			alert("rejected");
			return {
				...state,
				isFetching: false,
				error: true,
			};
		case EXPAND_CARD:
			return {
				...state,
				cardData: {
					...state.cardData,
					newCardHeight: 1,
				},
			};
		case HIDE_CARD:
			return {
				...state,
				cardData: {
					...state.cardData,
					newCardHeight: 0,
				},
			};
		case LOAD_CARD_DATA:
			return {
				...state,
				coords: {
					longitude: action.payload.longitude,
					latitude: action.payload.latitude,
				},
				cardData: {
					...state.cardData,
					selectedEvent: action.payload,
				},
			};
		default:
			return state;
	}
}
