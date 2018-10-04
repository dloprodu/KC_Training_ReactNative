import { StyleSheet } from 'react-native';

import * as theme from '../../../common/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.PrimaryColor
  },
  containerActivityIndicator: {
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    bottom: 0, 
    right: 0
  },
  containerNotFound: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    bottom: 0, 
    right: 0
  }
})