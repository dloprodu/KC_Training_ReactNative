import React from 'react';

import { View, Text, Animated, FlatList, ScrollView } from 'react-native';

import styles from './styles';
import { Button, CharacterCell } from '../../widgets';

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

  _renderCharacters() {
    if (!this.props.characters || !this.props.characters.length) {
      return null;
    }

    return (
      <View style={styles.containerCharacters}>
        <FlatList
          hidden={this.props.characters.lenght === 0}
          data={this.props.characters}
          horizontal={1}
          // extraData={this.state}
          renderItem={ value => this._renderItem(value) }
          keyExtractor={ (item, i) => `cell${item.id}` }
          style={{height: 160}}
          />
      </View>
      )
  }

  _renderItem({ item, index }) {
    return (
      <CharacterCell 
        character={item} 
        index={index}
        />
      )
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
      <ScrollView style={styles.containerScrollable}>
        <View style={styles.container}>
          <Animated.View style={[styles.containerImage, { height: this.state.containerHeight }]}>
            <Animated.Image 
              source={image} 
              resizeMode={'stretch'} 
              style={[styles.image, { height: this.state.imageHeight }]}/>
          </Animated.View>
          
          {this._renderCharacters()}
          
          <View style={styles.dataContainer}>
            <Text style={[styles.text, {flex: 1}]}>{'Format: '}{format}</Text>
            <Text style={styles.text}>{'Characters: '}{characters}</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.text}>{description}</Text>
          </View>

          <View style={{margin: 20}}>
            <Button label={'Hide picture'} onPress={() => this._onShowImage()} />
          </View>
        </View>
      </ScrollView>
    )
  }
}