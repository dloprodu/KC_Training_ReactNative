import { StyleSheet } from 'react-native';
import * as theme from '../../../common/theme';

export default StyleSheet.create({
    label: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
    },
    textInput: {
        color: 'white',
        fontSize: 18,
        borderWidth: 1,
        borderColor: theme.SecondaryColor,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 10
    },
})