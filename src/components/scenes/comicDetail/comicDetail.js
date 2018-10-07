import React from 'react';

import { View, Text, Animated, FlatList, ScrollView, ActivityIndicator } from 'react-native';

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
    if ((!this.props.characters || !this.props.characters.length)) {
      return null;
    }

    return (
      <View style={styles.containerCharacters}>
        <FlatList
          hidden={this.props.characters.lenght === 0}
          data={this.props.characters}
          horizontal={true}
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

  _renderActivityIndicator() {
    if (!this.props.isFetching) {
      return null;
    }

    return (
      <View
        style={{
          paddingVertical: 10,
          borderTopWidth: 1,
          flex: 1,
          width: '100%',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="small" />
      </View>
    );
  };

  render() {
    const { comic } = this.props
    
    const image = comic && comic.thumbnail
      ? { uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}` } 
      : null;

    const format = comic && comic.format;
    const description = comic && comic.description;
    const characters = (this.props.characters && this.props.characters.length) 
      ? this.props.characters.length
      : (comic && comic.characters && comic.characters.available);

    return (
      <ScrollView style={styles.containerScrollable}>
        <View style={styles.container}>
          <Animated.View style={[styles.containerImage, { height: this.state.containerHeight }]}>
            <Animated.Image 
              source={image} 
              resizeMode={'stretch'} 
              style={[styles.image, { height: this.state.imageHeight }]}/>
          </Animated.View>
          {this._renderActivityIndicator()}
          {this._renderCharacters()}
          <View style={styles.toolbarContainer}>
            <Text style={styles.link} onPress={() => this.props.addNewCharacter()}>{'Add character'}</Text>
          </View>          
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