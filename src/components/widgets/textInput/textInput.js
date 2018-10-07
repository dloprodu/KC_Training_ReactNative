import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';
import * as theme from '../../../common/theme';

export default class extends React.Component {

    static defaultProps = {
        label: '',
        value: '',
        multiline: false,
        placeholder: '',
        onChangeText: () => {},
        inputStyle: {},
        labelStyle: {},
        containerStyle: {}
    }

    render() {
        return (
            <View style={[this.props.containerStyle]}>
                <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                <TextInput 
                    onChangeText={ v => this.props.onChangeText(v) }
                    value={this.props.value}
                    multiline={this.props.multiline}
                    style={[styles.textInput, this.props.inputStyle]}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={theme.PlaceHolderColor}
                />
            </View>
        )
    }
}