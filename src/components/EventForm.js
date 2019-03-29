
import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const Event = t.struct({
  EventName: t.String,
  EventLocation: t.String,
  EventTags: t.list(t.String)
});


const options = {
fields: { // <= Person options
        tags: {
                item: { // <= options applied to each item in the list
                        label: 'My tag'
                }
        }
}
};

export default class SimpleForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form type={Event} options={options}/>
        <Button
          title="Create!"
          onPress={v => alert("Event Successfully Created!")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});