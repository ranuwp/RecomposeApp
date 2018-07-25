import React, { Component } from 'react';
import { Container, Text } from 'native-base';

const redBoxEnhancer = (WrappedComponent) => {
    class RedBoxEnhancer extends Component {
      render() {
        return (
          <Container>
            <Text>Enhanced By RedBoxEnhancer</Text>
            <WrappedComponent {...this.props} style={{backgroundColor: 'red'}}/>
          </Container>
        );
      }
    }
    return RedBoxEnhancer;
  }
;

export default redBoxEnhancer;
