import React from 'react';
import { ScrollView, StyleSheet, View, Text} from 'react-native';
import { MapView } from 'expo';

import { connect } from 'react-redux';

import {setDefaultLocation} from '../src/actions'

class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#c0c0c0'}}
      >
        <MapView
          style={{ flex: 1, position: 'absolute',top: 0, left: 0, right: 0, bottom: 0}}
          initialRegion={{
            latitude: this.props.location.coords.latitude,
            longitude: this.props.location.coords.longitude,
            latitudeDelta: this.props.location.coords.latitudeDelta,
            longitudeDelta: this.props.location.coords.longitudeDelta,
          }}
        />
      </View>
       
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    location: state.location
  }
}

const mapDispatchToProps = (dispatch) = ({
  setDefaultLocation: () => dispatch(setDefaultLocation)
})

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen)