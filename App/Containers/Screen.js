import React, { Component } from 'react';
import {
  Container,
  Text,
} from 'native-base';
import {
  multiply,
  add,
  substract,
  devide
} from '../Enhancers/Calculator';


class Screen extends Component {
  render() {
    return (
      <Container>
        <Text>x = 4, y = 3</Text>
        <Text>Multiply: {multiply(4)(3)}</Text>
        <Text>Devide: {devide(4)(3)}</Text>
        <Text>Add: {add(4)(3)}</Text>
        <Text>Subtract: {substract(4)(3)}</Text>
      </Container>
    );
  }
}

export default Screen;
