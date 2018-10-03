import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class extends Component {

  static defaultProps = {
    index: 0,
    comic: null,
    onPress: () => {},
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { comic, index } = this.props;
    const title = comic ? comic.title : '';
    const format = comic ? comic.format : '';
    const image = comic && comic.thumbnail
      ? { uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}` } 
      : null;

    return (
      <TouchableOpacity 
        style={styles.container} 
        onPress={() => this.props.onPress(comic)}>
        <Image source={image} style={styles.image} resizeMode={'stretch'}/>
        <View style={styles.detailContainer}>
          <Text style={[styles.label, styles.name]}>{title}</Text>
          <Text style={styles.label}>{format}</Text>
        </View>
      </TouchableOpacity>
      );
  }
}