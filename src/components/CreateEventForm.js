
import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import ImageFactory from './templates/ImageFactory';

import t from 'tcomb-form-native';

var _ = require('lodash');

const Form = t.form.Form;

const Event = t.struct({
  EventName: t.String,
  EventLocation: t.maybe(t.String),
  Mood: t.maybe(t.String),
  Image: t.maybe(t.String),
});

const formStyles = _.cloneDeep(t.form.Form.stylesheet);
formStyles.textbox.normal.marginBottom = 20;
formStyles.textbox.normal.fontSize = 17;
formStyles.textbox.normal.backgroundColor = '#454F63';
formStyles.textbox.normal.color = '#ffffff';
formStyles.textbox.normal.borderRadius = 8;
formStyles.textbox.normal.height = 50;
formStyles.textbox.error.marginBottom = 20;
formStyles.textbox.error.fontSize = 17;
formStyles.textbox.error.backgroundColor = '#454F63';
formStyles.textbox.error.color = '#ffffff';
formStyles.textbox.error.borderRadius = 8;
formStyles.textbox.error.height = 50;

const placeholderTextColor = '#959DAD';

const options = {

  auto: 'placeholders',
  stylesheet: formStyles,
          
  fields: { // <= Event options
          EventName: {
            placeholderTextColor: placeholderTextColor
          },
          EventLocation: {
            placeholderTextColor: placeholderTextColor
          },
          Mood: {
            placeholderTextColor: placeholderTextColor
          },
          Requests: {
            placeholderTextColor: placeholderTextColor
          },
          Image: {
            config: {
              title: 'Select image',
              options: ['Open camera', 'Select from gallery', 'Cancel'],
              // Used on Android to style BottomSheet
              style: {
                titleFontFamily: 'Roboto'
              }
            },
            error: 'No image provided',
            factory: ImageFactory
          }
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  createEventButton: {
      alignItems: 'center',
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#007AFF',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
  }
});


export default class SimpleForm extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(data) {
    data = {
      ...data,
      latitude: this.props.location.coords.latitude,
      longitude: this.props.location.coords.longitude
    }
    this.props.createEvent(data)
  }

  render() {
    return (
      <View style={styles.container}>
      <Form ref={c => this._form = c} type={Event} value={this.props.formData} onChange={this.props.onFormDataChange} options={options}/>
      <TouchableOpacity
        title="Create!"
        onPress={()=>this.handleSubmit(this.props.formData)}
        style={styles.createEventButton}
      >
        <Text style={{color: '#fff'}}>Create Event</Text>
      </TouchableOpacity>
      <Button color='#f00' title="Clear" onPress={this.props.clearForm}></Button>
    </View>
    )
  }
}

