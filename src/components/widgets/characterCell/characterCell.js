import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Animated } from 'react-native'
import styles from './styles'

export default class extends Component {

  static defaultProps = {
    index: 0,
    character: null,
    onPress: () => {},
  }

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      scaleValue: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.scaleValue, {
      toValue: 1,
      duration: 600,
      delay: this.props.index * 450
    }).start();
  }

  render() {
    const { character, index } = this.props;
    const name = character ? character.name : '';
    const image = character && character.thumbnail
      ? { uri: `${character.thumbnail.path}.${character.thumbnail.extension}` } 
      : null;

    return (
      <TouchableOpacity
        style={[styles.container]} 
        onPress={() => this.props.onPress(character)}>
        <Animated.View style={[styles.containerImage, { opacity: this.state.scaleValue }]}>
          <Image source={image} 
            style={styles.image} 
            resizeMode={'cover'} 
            onLoadEnd={ () => { this.setState({ loaded: true }) } }>
          </Image>
        </Animated.View>
        <View style={styles.detailContainer}>
          <Text style={[styles.label, styles.name]}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}