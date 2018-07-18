import React, { Component } from 'react';
import {
  Container,
  Text,
  Button,
  Content
} from 'native-base';
import {
  compose,
  withState
} from 'recompose';

class Screen extends Component {
  incrementCounter = () => {
    const { setCounter } = this.props;
    setCounter((previousCounter) => {
      return previousCounter + 1;
    });
  };

  decrementCounter = () => {
    const { setCounter } = this.props;
    setCounter((previousCounter) => {
      return previousCounter - 1;
    });
  };

  render() {
    const { counter } = this.props;
    return (
      <Container>
        <Text>Counter: {counter}</Text>
        <Content>
          <Button onPress={this.incrementCounter}>
            <Text>Increment</Text>
          </Button>
          <Button onPress={this.decrementCounter}>
            <Text>Decrement</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default compose(
  withState('counter', 'setCounter', 0),
//  withState('data', 'setData', {}),
//  withState('error', 'setError', 'Error'),
//  withState('food', 'setFood', [])
)(Screen);
