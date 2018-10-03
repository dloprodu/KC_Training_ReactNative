import { StyleSheet } from 'react-native';
import * as theme from '../../../common/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.PrimaryColor,
    marginVertical: 1
  },
  image: {
    width: '100%',
    height: 220,
  },
  detailContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  label: {
    color: 'white',
  },
  name: {
    fontWeight: 'bold',
    flex: 1,
  }
})