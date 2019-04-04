import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated, Easing} from 'react-native';
import { Icon, Divider } from 'react-native-elements';

class EventsListCard extends React.Component {

    constructor(props) {
        super(props);
    }
    
    styles = {
        container: {
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            padding: 0,
            margin: 0,
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 15,
            borderTopWidth: 1,
            borderColor: '#ddd',
            borderTopRightRadius: 15,
            shadowColor: '#ccc',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            backgroundColor: '#fff'
        },
        eventsList: {
            flexGrow: 1,
            backgroundColor: '#fff',
            margin: 0,
            padding: 0,
        },
        eventsListContainer: {
            width: '90%',
            backgroundColor: '#00f',
            alignSelf: 'center',
        },
        expandCardArea: {
            backgroundColor: '#fff',
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderColor: '#ddd',
            justifyContent: 'center',
        },
        button: {
            flexGrow: 1,
            flexDirection: 'row',
            alignSelf: 'center',
            width: '100%',
            height: 60,
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 0,
            borderColor: '#ddd',
        },
        eventImage: {
            marginLeft: 10,
            marginRight: 10,
            flex: 0.2,
            height: '80%',
            borderRadius: 4
        }
    };
    
    heightValue = new Animated.Value(this.props.cardState.currentCardHeight);
    
    onPress() {
        this.props.expandCard();
        this.animateCard();
    }

    animateCard() {
        Animated.timing(                  // Animate over time
            this.heightValue,        // The animated value to drive
            {
              toValue: this.props.cardState.newCardHeight,                   // Animate to opacity: 1 (opaque)
              duration: 800,              // Make it take a while
              easing: Easing.out(Easing.poly(5))
            }
          ).start(); 
    }

    render () {
        const realHeight = this.heightValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['40%', '85%']
        }); 

        return (
            <Animated.View height={realHeight} style={this.styles.container}>
                <TouchableOpacity activeOpacity={0.5} style={this.styles.expandCardArea} onPress={() => this.onPress()}>
                    <Icon name='ios-remove' type='ionicon' color='#ccc'/>
                    <Text style={{alignSelf: 'center', marginBottom: 15, fontSize: 20}}>Events nearby</Text>

                    <ScrollView style={this.styles.eventsListContainer} contentContainerStyle={this.styles.eventsList}>
                        
                        <View style={{width: '100%'}}>
                            {this.props.events.map(event =>
                                <TouchableOpacity key={event.key} style={this.styles.button} onPress={() => { }}>
                                    {event.Image && <Image style={this.styles.eventImage} source={{ uri: event.Image }} />}
                                    <Text>{event.name}</Text>
                                    <Text>{"\n"}</Text>
                                    {/*{event.imageUri && <Image source={{ uri: event.imageUri }}/>}*/}
    
    
                                </TouchableOpacity>
                            )}
                        </View>
                        
                    </ScrollView>
                                
                </TouchableOpacity>
            </Animated.View>
        );
    }
    
}


export default EventsListCard;