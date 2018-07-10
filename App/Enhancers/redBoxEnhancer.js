import React, { Component } from 'react';
import { Container, Text } from 'native-base';

const redBoxEnhancer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Container style={{ backgroundColor: '#ff0024' }}>
          <Text>Enhanced By redBoxEnhancer</Text>
          <WrappedComponent />
        </Container>
      );
    }
  };
};

export default redBoxEnhancer;
