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
import style from './Styles/RootContainerStyles';
import NormalComponent from '../Components/NormalComponent';

const BlueComponent = compose(blueBoxEnhancer)(NormalComponent);
const RedComponent = compose(redBoxEnhancer)(NormalComponent);

class Screen extends Component {
  render() {
    return (
      <Container>
        <NormalComponent />
        <View style={style.horizontalLine}/>
        <BlueComponent />
        <View style={style.horizontalLine}/>
        <RedComponent />
      </Container>
    );
  }
}

export default Screen;
