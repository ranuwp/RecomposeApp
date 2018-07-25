import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { compose } from 'recompose';
import {
  blueBoxEnhancer,
  redBoxEnhancer,
} from '../Enhancers';
import style from './Styles/RootContainerStyles';
import NormalComponent from '../Components/NormalComponent';

const BlueComponent = compose(redBoxEnhancer, blueBoxEnhancer)(NormalComponent);
const RedComponent = compose(redBoxEnhancer)(NormalComponent);

class Screen extends Component {
  render() {
    return (
      <View style={style.fillAllView}>
        <NormalComponent />
        <View style={style.horizontalLine}/>
        <RedComponent />
        <View style={style.horizontalLine}/>
        <BlueComponent />
      </View>
    );
  }
}

export default Screen;
