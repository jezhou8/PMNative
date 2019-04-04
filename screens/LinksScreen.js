import React from 'react';
import VisibleMap from '../src/container/VisibleMap';
class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
       <VisibleMap/>
    );
  }
}

export default LinksScreen;