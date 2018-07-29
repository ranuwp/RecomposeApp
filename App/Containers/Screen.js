import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
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
      <View>
        <Text style={{ textAlign:'center'}}>Counter: {counter}</Text>
        <Button onPress={this.incrementCounter} title={'Increment'}/>
        <Button onPress={this.decrementCounter} title={'Decrement'}/>
      </View>
    );
  }
}

export default compose(
  withState('counter', 'setCounter', 0)
//  withState('data', 'setData', {}),
//  withState('error', 'setError', 'Error'),
//  withState('food', 'setFood', [])
)(Screen);
