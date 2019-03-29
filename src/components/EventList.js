import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { STOCK_EVENT } from '../img';

const EventList = ({events}) => (
        <View style={styles.container} >
                <TouchableOpacity style={styles.button} key="test1" onPress={()=>{}}>
                                <Image source={STOCK_EVENT}/>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button} key="test2" onPress={()=>{}}>
                                <Image source={STOCK_EVENT}/>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button} key="test3" onPress={()=>{}}>
                                <Image source={STOCK_EVENT}/>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button} key="test4" onPress={()=>{}}>
                                <Image source={STOCK_EVENT}/>
                </TouchableOpacity>  
                
        </View>
);

export default EventList;

const styles = StyleSheet.create({
        container: {
                justifyContent: 'center',
        },
        button: {
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                padding: 0,
        },
        countContainer: {
                alignItems: 'center',
                padding: 10
        },
        countText: {
                color: '#FF00FF'
        }
});