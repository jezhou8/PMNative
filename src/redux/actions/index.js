import { FETCH_LOCATION, CREATE_EVENT, FORM_DATA_CHANGED, CLEAR_FORM, EXPAND_CARD} from './ActionTypes';
import { Location } from 'expo';

function getLocationAsync (){
       return new Promise((resolve, reject) => {
                Location.getCurrentPositionAsync({}).then(
                        location => {
                                coords = {latitude: location.coords.latitude,
                                        longitude: location.coords.longitude}
                                return resolve(coords);
                        }
                )
      })
}

export function setDefaultLocation(){
        return {
                type: FETCH_LOCATION,
                payload: getLocationAsync()
        }
}

export function createEvent(formData) {
        return {
                type: CREATE_EVENT,
                payload: formData
        }
}

export function onFormDataChange(values) {
        return {
                type: FORM_DATA_CHANGED,
                payload: values
        }
}

export function clearForm() {
        return {
                type: CLEAR_FORM,
        }
}

export function expandCard(callback) {
        return {
                type: EXPAND_CARD,
        }
}