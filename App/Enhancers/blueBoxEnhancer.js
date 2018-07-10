import React, { Component } from 'react';
import { Container, Text } from 'native-base';

const blueBoxEnhancer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Container>
          <Text>Enhanced By blueBoxEnhancer</Text>
          <WrappedComponent {...this.props} style={{ backgroundColor: '#8ce2ff' }} />
        </Container>
      );
    }
  };
};

export default blueBoxEnhancer;
