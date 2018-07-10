import React, { Component } from 'react';
import { Container, Text } from 'native-base';

const blueBoxEnhancer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Container style={{ backgroundColor: '#8ce2ff' }}>
          <Text>Enhanced By blueBoxEnhancer</Text>
          <WrappedComponent {...this.props} />
        </Container>
      );
    }
  };
};

export default blueBoxEnhancer;
