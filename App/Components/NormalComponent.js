import React, { Component } from 'react';
import {
  Container,
  Text,
} from 'native-base';

class NormalComponent extends Component {
  render() {
    const { style } = this.props;
    return (
      <Container style={style}>
        <Text>Normal Component</Text>
      </Container>
    );
  }
}

NormalComponent.defaultProps = {
  style: {
    flex: 1,
//    backgroundColor: 'yellow',
  },
  data: [],
};

export default NormalComponent;
