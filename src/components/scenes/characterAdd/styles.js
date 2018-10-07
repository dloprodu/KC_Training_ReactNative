import { StyleSheet } from 'react-native';

import * as theme from '../../../common/theme';

export default StyleSheet.create({
  scrollableContainer: {
    backgroundColor: theme.PrimaryColor
  },
  container: {
    flex: 1,
    backgroundColor: theme.PrimaryColor
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: theme.SecondaryColor,
    borderRadius: 20,
    width: '100%',
    height: 200
  },
  image: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  imageButton: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '46%',
    textAlign: 'center',
    left: 0,
    right: 0,
  }
})