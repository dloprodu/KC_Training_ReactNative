import { StyleSheet } from 'react-native';

import * as theme from '../../../common/theme';

export default StyleSheet.create({
  containerScrollable: {
    backgroundColor: theme.PrimaryColor
  },
  container: {
    flex: 1,
    backgroundColor: theme.PrimaryColor
  },
  containerImage: {
    width: '100%',
    height: 226,
    borderStyle: 'solid',
    borderTopWidth: 3,
    borderTopColor: theme.SecondaryColor,
    borderBottomWidth: 3,
    borderBottomColor: theme.SecondaryColor,
    backgroundColor: theme.TertiaryColor
  },
  containerCharacters: {
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderBottomColor: theme.SecondaryColor,
  },
  image: {
    width: '100%',
    height: 220
  },
  toolbarContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  link: {
    color: theme.LinkColor
  },
  dataContainer: {
    padding: 10,
    flexDirection: 'row'
  },
  text: {
    color: theme.TextColor,
  },
})