import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TextInput, Text } from 'react-native';

import styles from './styles';
import { ComicCell, SearchBar } from '../../widgets';

export default class Comics extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchComicsList();
  }

  _onSearchComics(query) {
    this.props.fetchComicsList(query);
  }

  _onComicTapped(comic) {
    this.props.onComicTapped(comic);
  }

  _renderItem({ item, index }) {
    return (
      <ComicCell 
        comic={item} 
        index={index}
        onPress={(comic) => this._onComicTapped(comic)} 
        />
      )
  }

  _renderSearchBar() {
    return (
      <SearchBar onChangeText={text => this._onSearchComics(text)}></SearchBar>
    );  
  };

  _renderFooter() {
    if (!this.props.isFetching) {
      return null;
    }

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  _renderNotComicsFound() {
    if (this.props.isFetching || (this.props.list && this.props.list.length)) {
      return null;
    }

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}>
        <Text style={{ fontSize: 36, color: '#fff' }}>{'Not comics found :('}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderNotComicsFound()}
        {this._renderSearchBar()}
        <FlatList
            data={this.props.list}
            numColumns={1}
            // extraData={this.state}
            renderItem={ value => this._renderItem(value) }
            keyExtractor={ (item, i) => `cell${item.id}` }
            style={{paddingTop: 0}}
            ListFooterComponent={() => this._renderFooter()}     
            />
      </View>
    )
  }
}
