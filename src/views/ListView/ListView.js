import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import VisibleEvents from './containers/ConnectToStore';
import EventHeader from './components/Header';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <EventHeader/>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <VisibleEvents/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
