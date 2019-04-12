import {combineReducers} from 'redux';
import map from './MapReducer';
import events from './EventsReducer';
import formData from './FormReducer';

const rootReducer = combineReducers({
        map,
        events,
        formData,
});

export default rootReducer;