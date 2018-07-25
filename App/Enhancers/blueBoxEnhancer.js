import React, { Component } from 'react';
import { Container, Text } from 'native-base';

const blueBoxEnhancer = (WrappedComponent) => {
  class BlueBoxEnhancer extends Component {
    render() {
      return (
        <Container>
          <Text>Enhanced By BlueBoxEnhancer</Text>
          <WrappedComponent {...this.props} style={{backgroundColor: 'blue'}} />
        </Container>
      );
    }
  }
  return BlueBoxEnhancer;
};

export default blueBoxEnhancer;
