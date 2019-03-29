import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
const EventHeader = () => (
    <View style={styles.container} >
                <Text style={styles.headerText}>Events</Text>

                <TouchableOpacity style={styles.searchButton}>
                        <Icon name='search'></Icon>
                </TouchableOpacity>
    </View>
);

export default EventHeader;

const styles = StyleSheet.create({
    container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            marginTop: 20
    },
    headerText: {
            fontSize: 30,
            fontWeight: 'bold'
    },  
    searchButton: {
        
    },
    button: {
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            padding: 10
    },
    countContainer: {
            alignItems: 'center',
            padding: 10
    },
    countText: {
            color: '#FF00FF'
    }
});