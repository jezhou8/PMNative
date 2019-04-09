import { EXPAND_CARD } from '../actions/actionTypes';
import { Animated } from 'react-native';

const initialState = {
        newCardHeight: 1,
        currentCardHeight: 0,
};


const cardData = (state=initialState, action) => {
        switch (action.type) {
                case EXPAND_CARD: 
                        return {
                                newCardHeight:  state.currentCardHeight,
                                currentCardHeight: state.newCardHeight
                        }
                default:
                        return state;
        }
        
}

export default cardData;