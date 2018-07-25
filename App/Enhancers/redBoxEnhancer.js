import React, { Component } from 'react';
import { View, Text } from 'react-native';

const redBoxEnhancer = (WrappedComponent) => {
  class RedBoxEnhancer extends Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Text>Enhanced By RedBoxEnhancer</Text>
          <WrappedComponent {...this.props} style={{ flex: 1, backgroundColor: 'red' }}/>
        </View>
      );
    }
  }

  return RedBoxEnhancer;
};

export default redBoxEnhancer;
