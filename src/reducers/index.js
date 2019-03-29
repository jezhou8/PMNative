import {combineReducers} from 'redux';
import location from './MapReducer';
import events from './events';

const rootReducer = combineReducers({
        location,
        events,
});

export default rootReducer;