import { CLEAR_FORM, FORM_DATA_CHANGED } from '../actions/actionTypes';

const initialState = {
        EventName: 'Hello!',
        EventLocation: '',
        Mood: '',
        Image: 'testloc',
    };

const formData = (state = initialState, action) => {
    switch (action.type) {
            case CLEAR_FORM:
                    return initialState;
            case FORM_DATA_CHANGED:
                    console.log(action.payload)
                    return action.payload;
            default:
                    return state;
    }
}

export default formData;