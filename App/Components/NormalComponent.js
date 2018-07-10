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
        <Text>Higher Order Component</Text>
      </Container>
    );
  }
}

export default NormalComponent;
