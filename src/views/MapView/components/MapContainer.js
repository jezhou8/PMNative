import React from "react";
import { View } from 'react-native';
import EventsListCard from './Card';
import Map from './Map';
import EventsSearch from './SearchBar';

const EventMap = (props) => {
  const { location, events, setDefaultLocation, cardState, expandCard } = props;
  return (
    <View style={styles.container}>
          <Map location={location} events={events} setDefaultLocation={setDefaultLocation}/>
          <EventsSearch />
          <EventsListCard events={events} expandCard={expandCard} cardState={cardState}/>
    </View>
  )
}

const styles = {
  container: {
    flex: 1, 
    backgroundColor: '#c0c0c0'
  }
}


export default EventMap;