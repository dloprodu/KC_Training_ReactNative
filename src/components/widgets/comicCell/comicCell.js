import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './styles'

export default class extends Component {

  static defaultProps = {
    index: 0,
    comic: null,
    onPress: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  render() {
    const { comic, index } = this.props;
    const title = comic ? comic.title : '';
    const format = comic ? comic.format : '';
    const image = comic && comic.thumbnail
      ? { uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}` } 
      : null;
    const characters = comic && comic.characters && comic.characters.available;

    return (
      <TouchableOpacity 
        style={styles.container} 
        onPress={() => this.props.onPress(comic)}>
        <View style={styles.containerImage}>
          <Image source={image} 
            style={styles.image} 
            resizeMode={'stretch'} 
            onLoadEnd={ () => { this.setState({ loaded: true }) } }>
          </Image>
        </View>
        <View style={styles.detailContainer}>
          <Text style={[styles.label, styles.name]}>{title}</Text>
          <Text style={styles.label}>{'Characters: '}{characters}</Text>
        </View>
      </TouchableOpacity>
      );
  }
}