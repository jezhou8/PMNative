import React from "react";
import { View } from 'react-native';
import { MapView } from 'expo';
class EventMap extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount() {
        console.log("component did mount");
      this.props.setDefaultLocation();
    }
    
    onRegionChange = (region) => {
    }

    render() {
        let loc = this.props.location;
      return (
        <View
        style={{ flex: 1, backgroundColor: '#c0c0c0'}}
        >
            <MapView
                style={{ flex: 1, position: 'absolute',top: 0, left: 0, right: 0, bottom: 0}}
                region={{latitude: loc.coords.latitude,
                        longitude: loc.coords.longitude,
                        latitudeDelta: loc.latitudeDelta,
                        longitudeDelta: loc.longitudeDelta }}
                onRegionChange={this.onRegionChange}
                showsUserLocation={true}
            >

            {this.props.events.map((event,index) => {
              return (<MapView.Marker
                key={index}
                coordinate={{
                  latitude: event.latitude,
                  longitude: event.longitude
                }}
                title={event.name}
                description={"asdfasdf"}
                />);
            
        })}


            </MapView>
            
        </View>
      )
    }
}


export default EventMap;