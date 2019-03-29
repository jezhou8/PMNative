import React from 'react';
import { connect } from 'react-redux';
import SimpleForm from '../src/components/EventForm';

import { Provider } from 'react-redux';
import store from '../src/store';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Create an Event',
  };

  submit = (values) => {
    // print the form values to the console
    console.log(values);
  }

  render() {

    return (
      <SimpleForm />
    );
  }
}

export default SettingsScreen;