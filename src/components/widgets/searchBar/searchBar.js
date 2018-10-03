import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles'

export default class extends Component {

  static defaultProps = {
    placeholder: 'Search...',
    onChangeText: () => {},
  }

  searchTimer = null;

  constructor(props) {
    super(props);
  }

  _onSearch(query) {
    clearTimeout(this.searchTimer);

    this.searchTimer = setTimeout(() => {
      this.props.onChangeText(query);
    }, 300);
  }

  render() {
    const shadow = {
      opacity: 0.9,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.7,
      shadowRadius: 1.00,
      
      elevation: 1,
    };

    return (
      <View style={styles.container}>
        <TextInput 
          {...shadow}
          style={styles.input}
          onChangeText={text => this._onSearch(text)}
          placeholder={this.props.placeholder}
          placeholderTextColor={'rgb(24,24,24)'}
        /> 
      </View>
    );  
  };
}