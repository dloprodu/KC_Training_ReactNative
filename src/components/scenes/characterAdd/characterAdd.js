import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Button, TextInput } from '../../widgets';

import ImagePicker from 'react-native-image-picker';

import styles from './styles';

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      thumbnail: ''
    };

    this.options = {
      title: 'Select image',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
  }

  _validateForm() {
    const { name, description, thumbnail } = this.state

    if (name && description && thumbnail && thumbnail.data) {
      return true;
    }

    return false;
  }

  _onSubmit() {
    if (!this._validateForm()) {
      Alert.alert('Atención', 'Please, complete all the fields');
      return;
    }

    const { name, description, thumbnail } = this.state;
    const data = {
      name: name,
      description: description,
      thumbnail: thumbnail.data
    }

    this.props.onSubmitCharacter(data);
  }

  _onImagePickerTapped() {
    console.log(this.options);
    console.log(ImagePicker);

    if (!ImagePicker) {
      return
    }

    ImagePicker.showImagePicker(this.options, (response) => {
      console.log('Response = ', response);
  
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let preview = { uri: response.uri };
        let data = `data:image/jpeg;base64,${response.data}`;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          thumbnail: { preview, data }
        });
      }
    });
  }

  _renderImageInput() {
      const imageUri = this.state.thumbnail ? this.state.thumbnail.preview : null
      const imageLabel = this.state.thumbnail ? 'Press to select other thumbnail' : 'Press to select a thumbnail';
      return (
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.imageContainer} onPress={() => this._onImagePickerTapped()}>
            <Image source={imageUri} style={styles.image} resizeMode={'cover'} />
            <Text style={styles.imageButton}>{imageLabel}</Text>
          </TouchableOpacity>
        </View>
      )
  }

  render() {
    return (
      <ScrollView style={styles.scrollableContainer}>
        <View style={styles.container}>
          <View style={{padding: 20}}>
            <TextInput 
                label={'Name:'}
                value={this.state.name}
                onChangeText={ name => this.setState({ name }) }
                placeholder={'Type the name...'}
                />
          </View>
          <View style={{padding: 20}}>
            <TextInput 
                label={'Description:'}
                value={this.state.description}
                onChangeText={ description => this.setState({ description }) }
                multiline={true}
                placeholder={'Small description...'}
                />
          </View>

          <View style={{ paddingHorizontal: 20, paddingBottom: 40}}>
            { this._renderImageInput() }
          </View>

          <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
            <Button 
                label={'Save'.toUpperCase()} 
                isFetching={this.props.isFetching} 
                onPress={() => this._onSubmit()} />
          </View>
        </View>
      </ScrollView>
    )
  }
}