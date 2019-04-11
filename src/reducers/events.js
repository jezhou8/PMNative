import { CREATE_EVENT } from '../actions/actionTypes';


const initialState = [
        {       key: 0,
                name: 'Name2',
                latitude: 40.1125,
                longitude: -88.2266,
                Image: "https://facebook.github.io/react-native/docs/assets/favicon.png"},
        {       
                key: 1,
                name: 'Name1',
                latitude: 40.1149,
                longitude: -88.2296,

                Image: "https://facebook.github.io/react-native/docs/assets/favicon.png"}
];

var key = 2;

const events = (state = initialState, action) => {
        switch (action.type) {
                case CREATE_EVENT:
                        return [
                                ...state,
                                {
                                        key: key++,
                                        name: action.payload.EventName,
                                        latitude: action.payload.latitude,
                                        longitude: action.payload.longitude,
                                        Image: action.payload.Image
                                }
                        ]
                
                default:
                        return state;
        }
}

export default events;