import React, { Component } from 'react';
import { View, Text } from 'react-native';

const blueBoxEnhancer = (WrappedComponent) => {
  class BlueBoxEnhancer extends Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Text>Enhanced By BlueBoxEnhancer</Text>
          <WrappedComponent {...this.props} style={{ flex: 1, backgroundColor: 'blue' }}/>
        </View>
      );
    }
  }

  return BlueBoxEnhancer;
};

export default blueBoxEnhancer;
