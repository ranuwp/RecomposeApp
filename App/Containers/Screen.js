import React, { Component } from 'react';
import {
  Container,
  View,
} from 'native-base';
import { compose } from 'recompose';
import {
  blueBoxEnhancer,
  redBoxEnhancer,
} from '../Enhancers';
import NormalComponent from './NormalComponent';

const BlueComponent = compose(blueBoxEnhancer, redBoxEnhancer, blueBoxEnhancer)(NormalComponent);
const RedComponent = compose(redBoxEnhancer)(NormalComponent);

class Screen extends Component {
  render() {
    return (
      <Container>
        <NormalComponent />
        <View style={{ height: 5, backgroundColor: '#001edd'}} />
        <BlueComponent />
        <View style={{ height: 5, backgroundColor: '#001edd'}} />
        <RedComponent />
      </Container>
    );
  }
}

export default Screen;
