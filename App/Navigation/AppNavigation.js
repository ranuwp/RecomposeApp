import { StackNavigator } from 'react-navigation';
import Screen from '../Containers/Screen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Screen: { screen: Screen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Screen',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
