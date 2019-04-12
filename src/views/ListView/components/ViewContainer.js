import React from "react";
import { ScrollView, View } from 'react-native';
import EventHeader from './Header';
import EventList from './List';

class ViewContainer extends React.Component {
    constructor (props) {
        super (props);
    }
    render() {
        return (
            <View style={styles.container}>
            
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <EventHeader/>
                <EventList expandCard={this.props.expandCard} setSelectedEvent={this.props.setSelectedEvent} events={this.props.events} navigation={this.props.navigation}/>
            </ScrollView>
            </View>
        );
    }
  
}

const styles = {
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  }
}


export default ViewContainer;