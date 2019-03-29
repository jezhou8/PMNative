import { Permissions } from 'expo';

const initialState = {
        isFetching: false,
        lastUpdated: 0,
        coords: { latitude: 37.3318, 
                longitude: -122.0312,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,},
        car: {name: "NIG"}
};

const getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
    
        if (status === 'granted') {
            console.log('Approved!');
            return Location.getCurrentPositionAsync({ enableHighAccuracy: false });
        } else {
           console.log('Rejected!');
           throw new Error('Location permission not granted');
        }
}

const location = (state=initialState, action) => {
        //console.log(initialState.location);
        switch (action.type) {
                case 'SET_DEFAULT_LOCATION':
                        return {
                                latitude: getLocationAsync().latitude,
                                longitude: getLocationAsync().longitude,
                        }
                default:
                        return state;
        }
        
}

export default location;