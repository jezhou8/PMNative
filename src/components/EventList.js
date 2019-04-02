import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { STOCK_EVENT } from '../img';

const EventList = ({events}) => (
        events.map( event =>
        <View style={styles.container} key={event.key} >
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
                        <Image style={styles.eventImage} source={{ uri: event.Image }}/>
                        <Text>{event.name}</Text>
                        <Text>{"\n"}</Text>
                        {/*{event.imageUri && <Image source={{ uri: event.imageUri }}/>}*/}
                
                        
                </TouchableOpacity>  
        </View>
        )
);

export default EventList;

const styles = StyleSheet.create({
        container: {
                width: '90%',
                justifyContent: 'center',
                color: '#fff',
                height: 70,
                marginTop: 5,
                marginBottom: 10,
        },
        button: {
                flex: 1,
                flexDirection: 'row',
                height: '100%',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: 0,
                borderRadius: 4,
                borderWidth: 2,
                borderColor: '#ddd',
                shadowColor: '#222',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 1,
        },
        countContainer: {
                alignItems: 'center',
                padding: 10
        },
        countText: {
                color: '#FF00FF'
        },
        eventImage: {
                marginLeft: 10,
                marginRight: 10,
                flex: 0.2,
                height: '80%',
                borderRadius: 4
        }
});