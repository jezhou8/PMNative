import { SearchBar } from 'react-native-elements';


import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated, Easing} from 'react-native';
import { Icon, Divider } from 'react-native-elements';

class EventsSearch extends React.Component {

    constructor(props) {
        super(props);
    }
    
    styles = {
        container: {
            flex: 1,
            flexDirection: 'column',
            width: '95%',
            height: '10%',
            padding: 0,
            margin: 0,
            position: 'absolute',
            alignSelf: 'center',
            top: '4%',
        },
        searchBarContainer: {
            backgroundColor: 'transparent',
            padding: 0,
            margin:0,
            width: '100%',
            height: '100%',
            alignSelf: 'center',
        },
        searchBar: {
            backgroundColor: '#fff',
            borderRadius: 10,
            borderBottomWidth: 1,
            borderColor: '#ddd',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,
            
            elevation: 2,
        }
    };  
    

    render () {
        return (
            <View style={this.styles.container}>
            <SearchBar platform='ios' inputContainerStyle={this.styles.searchBar} containerStyle={this.styles.searchBarContainer} cancelButtonProps={{diabled: true,}}/>
            </View>
        );
    }
    
}


export default EventsSearch;