import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import _ from 'lodash';

const blueBoxEnhancer = (WrappedComponent) => {
  class EnhancedComponent extends Component {
    render() {
      const { style } = this.props;
      return (
        <Container>
          <Text>Enhanced By blueBoxEnhancer</Text>
          <WrappedComponent {...this.props} style={style}/>
        </Container>
      );
    }
  }

  EnhancedComponent.defaultProps = _.merge(
    {
      style: {
        backgroundColor: '#8ce2ff',
      },
    },
    //WrappedComponent default props should merge as a second params in merge lodash.
    WrappedComponent.defaultProps);
  return EnhancedComponent;
};

export default blueBoxEnhancer;
