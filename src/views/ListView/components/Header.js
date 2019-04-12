import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements'

const EventHeader = () => (
    <View style={styles.container} >
                <SearchBar lightTheme placeholder="Search" inputContainerStyle={styles.searchInputContainer} containerStyle={styles.searchBarContainer}>

                </SearchBar>
                <ScrollView horizontal={true} style={styles.filterBar} contentContainerStyle={styles.filterBar} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.filterButton} onPress={()=>{}}>
                                <Text>Sports</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton} onPress={()=>{}}>
                                <Text>Food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton} onPress={()=>{}}>
                                <Text>Chats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton} onPress={()=>{}}>
                                <Text>Nightlife</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton} onPress={()=>{}}>
                                <Text>Category</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton} onPress={()=>{}}>
                                <Text>Time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterButton} onPress={()=>{}}>
                                <Text>Etc</Text>
                        </TouchableOpacity>
                </ScrollView>
    </View>
    
);

export default EventHeader;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '35%',
        marginTop: 25,
        marginBottom: 15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
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
    searchInputContainer: {
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#eee',
    },  
    searchBarContainer: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        width: '90%',
    }, 
    filterBarContent: {
        justifyContent: 'flex-start',
    },
    filterBar: {
        height: '60%',
        flexDirection: 'row',
        marginTop: 2,
        marginLeft: 5,
    },
    filterButton: {
        height: 30,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 5,
        marginRight: 5,
        backgroundColor: '#fff',
    },
    headerText: {
            fontSize: 30,
            fontWeight: 'bold'
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