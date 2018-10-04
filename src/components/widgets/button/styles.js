import { StyleSheet } from 'react-native';

import * as theme from '../../../common/theme';

export default StyleSheet.create({
    buttonContainer: {
        backgroundColor: theme.SecondaryColor,
        padding: 20, alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14
    },
    buttonText: {
        fontWeight: '600',
        color: 'white'
    }
})