import { EXPAND_CARD, LOAD_CARD_DATA } from '../actions/ActionTypes';
import { Animated } from 'react-native';

const initialState = {
        newCardHeight: 0,
        currentCardHeight: 1,
        selectedEvent: null,
};


const cardData = (state=initialState, action) => {
        switch (action.type) {
                case EXPAND_CARD: 
                        return {
                                ...state,
                                newCardHeight:  state.currentCardHeight,
                                currentCardHeight: state.newCardHeight
                        }
                case LOAD_CARD_DATA:
                        return {
                                ...state,
                                selectedEvent: action.payload
                        }
                default:
                        return state;
        }
        
}

export default cardData;