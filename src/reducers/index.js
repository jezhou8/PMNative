import {combineReducers} from 'redux';
import location from './MapReducer';
import events from './events';
import formData from './FormReducer';

const rootReducer = combineReducers({
        location,
        events,
        formData
});

export default rootReducer;