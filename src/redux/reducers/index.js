import {combineReducers} from 'redux';
import location from './MapReducer';
import events from './EventsReducer';
import formData from './FormReducer';
import cardData from './MapCardReducer';

const rootReducer = combineReducers({
        location,
        events,
        formData,
        cardData,
});

export default rootReducer;