import React from 'react';

import { View, Text, Animated } from 'react-native';

import styles from './styles';
import { Button } from '../../widgets';

export default class extends React.Component {
  static defaultProps = {
    comic: null,
    characters: []
  }

  constructor(props) {
    super(props)

    this.state = {
      imageExpanded: true,
      imageHeight: new Animated.Value(220),
      containerHeight: new Animated.Value(226)
    };
  }

  componentWillMount() {
    this.props.fetchCharactersList(this.props.comic.id);
  }

  _onShowImage() {
    if (this.state.imageExpanded) {
      Animated.timing(
        this.state.imageHeight,
        {
          toValue: 0,
          duration: 500,
        }
      ).start();
      Animated.timing(
        this.state.containerHeight,
        {
          toValue: 0,
          duration: 500,
        }
      ).start();

      this.setState({ imageExpanded: false })
    } else {
      Animated.timing(
        this.state.imageHeight,
        {
          toValue: 220,
          duration: 500,
        }
      ).start();
      Animated.timing(
        this.state.containerHeight,
        {
          toValue: 226,
          duration: 500,
        }
      ).start();
      this.setState({ imageExpanded: true })
    }
  }

  render() {
    const { comic } = this.props
    
    const image = comic && comic.thumbnail
      ? { uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}` } 
      : null;

    const format = comic && comic.format;
    const description = comic && comic.description;
    const characters = comic && comic.characters && comic.characters.available;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.containerImage, { height: this.state.containerHeight }]}>
          <Animated.Image 
            source={image} 
            resizeMode={'stretch'} 
            style={[styles.image, { height: this.state.imageHeight }]}/>
        </Animated.View>
        <View style={styles.dataContainer}>
          <Text style={[styles.text, {flex: 1}]}>{'Format: '}{format}</Text>
          <Text style={styles.text}>{'Characters: '}{characters}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.text}>{description}</Text>
        </View>

        <View style={{margin: 20}}>
          <Button label={'Ocultar Imagen'} onPress={() => this._onShowImage()} />
        </View>
      </View>
    )
  }
}