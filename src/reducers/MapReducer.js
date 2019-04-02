import { FETCH_LOCATION_PENDING, FETCH_LOCATION_FULFILLED, FETCH_LOCATION_REJECTED } from '../actions/actionTypes';

const initialState = {
        lastUpdated: 0,
        coords: { latitude: 37.78825, 
                longitude: -122.4324,},
        latitudeDelta: 0.0041267,
        longitudeDelta: 0.0041267,
        isFetching: false,
        error: false,
        dataFetched: false,
};


export default function mapReducer (state=initialState, action) {
        switch (action.type) {
                case FETCH_LOCATION_PENDING: 
                        return {
                                ...state,
                                coords: initialState.coords,
                                isFetching: true
                        }
                case FETCH_LOCATION_FULFILLED:
                        return {
                                ...state,
                                isFetching: false,
                                coords: action.payload
                        }
                case FETCH_LOCATION_REJECTED:
                        alert("rejected");
                        return {
                                ...state,
                                isFetching: false,
                                error: true
                        }
                default:
                        return state;
        }
        
}