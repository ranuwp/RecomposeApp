import React, { Component } from 'react';
import { Container, Text } from 'native-base';

const redBoxEnhancer = (WrappedComponent) => {
    class EnhancedComponent extends Component {
      render() {
        return (
          <Container>
            <Text>Enhanced By redBoxEnhancer</Text>
            <WrappedComponent {...this.props} />
          </Container>
        );
      }
    }

    EnhancedComponent.defaultProps = {
      ...WrappedComponent.defaultProps,
      style: {
        backgroundColor: 'red',
      },
    };
    return EnhancedComponent;
  }
;

export default redBoxEnhancer;
