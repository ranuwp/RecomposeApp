import React, { Component } from 'react';
import {
  Text,
} from 'native-base';
import { View } from 'react-native';
import { redBoxEnhancer } from '../Enhancers';

class NormalComponent extends Component {
  render() {
    return (
      <View>
        <Text>Higher Order Component</Text>
      </View>
    );
  }
}

export default NormalComponent;
