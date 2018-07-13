import React, { Component } from 'react';
import { Container, Text } from 'native-base';

const blueBoxEnhancer = (WrappedComponent) => {
  class EnhancedComponent extends Component {
    render() {
      return (
        <Container>
          <Text>Enhanced By blueBoxEnhancer</Text>
          <WrappedComponent {...this.props} />
        </Container>
      );
    }
  }

  EnhancedComponent.defaultProps = {
    ...WrappedComponent.defaultProps,
    style: {
      backgroundColor: 'blue',
    },
  };
  return EnhancedComponent;
};

export default blueBoxEnhancer;
