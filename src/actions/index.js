import { FETCH_LOCATION, CREATE_EVENT, FORM_DATA_CHANGED, CLEAR_FORM } from './actionTypes';
import { Location } from 'expo';

const initialState = {
        lastUpdated: 0,
        coords: { latitude: 40.78825, 
                longitude: -50.4324,
        },
        latitudeDelta: 0.0041267,
        longitudeDelta: 0.0041267,
        isFetching: false,
        error: false,
        dataFetched: false,
};

function getLocationAsync (){
       return new Promise((resolve, reject) => {
                Location.getCurrentPositionAsync({}).then(
                        location => {
                                initialState.coords.latitude = location.coords.latitude;
                                initialState.coords.longitude = location.coords.longitude;
                                return resolve(initialState.coords);
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