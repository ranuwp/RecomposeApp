import React, { Component } from 'react';
import { Container, Text } from 'native-base';

const redBoxEnhancer = (WrappedComponent) => {
    class EnhancedComponent extends Component {
      render() {
        const { style } = this.props;
        return (
          <Container>
            <Text>Enhanced By redBoxEnhancer</Text>
            <WrappedComponent {...this.props} style={style}/>
          </Container>
        );
      }
    }

    EnhancedComponent.defaultProps = {
      ...WrappedComponent.defaultProps,
      style: {
        backgroundColor: '#ff0024',
      },
    };
    return EnhancedComponent;
  }
;

export default redBoxEnhancer;
