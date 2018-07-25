import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class NormalComponent extends Component {
  render() {
    const { style } = this.props;
    return (
      <View style={style}>
        <Text>Normal Component</Text>
      </View>
    );
  }
}

NormalComponent.defaultProps = {
  style: {
    flex: 1,
//    backgroundColor: 'yellow',
  },
  data: [],
};

export default NormalComponent;
