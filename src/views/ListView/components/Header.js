import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements'
const EventHeader = () => (
    <View style={styles.container} >
                <TextInput style={styles.searchBar}>

                </TextInput>
    </View>
);

export default EventHeader;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.22,

        elevation: 2,
    },
    headerText: {
            fontSize: 30,
            fontWeight: 'bold'
    },  
    searchBar: {
        width: '70%',
        height: 25,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
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