import { StyleSheet } from 'react-native';
import * as theme from '../../../common/theme';

export default StyleSheet.create({
  container: {
    width: 120,
    height: 160,
    backgroundColor: theme.PrimaryColor,
    marginVertical: 1
  },
  containerImage: {
    width: 120,
    height: 120,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailContainer: {
    flexDirection: 'row',
    padding: 10,
    height: 40
  },
  label: {
    color: 'white',
    fontSize: 10
  },
  name: {
    fontWeight: 'bold',
    flex: 1,
  }
})