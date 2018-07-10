import { StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  applicationView: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin,
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  horizontalLine: {
    height: 5,
    backgroundColor: '#001edd'
  },
});
