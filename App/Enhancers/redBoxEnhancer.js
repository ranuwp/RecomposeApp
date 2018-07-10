import React, { Component } from 'react';
import { Container, Text } from 'native-base';

const redBoxEnhancer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Container>
          <Text>Enhanced By redBoxEnhancer</Text>
          <WrappedComponent {...this.props} style={{ backgroundColor: '#ff0024' }} />
        </Container>
      );
    }
  };
};

export default redBoxEnhancer;
