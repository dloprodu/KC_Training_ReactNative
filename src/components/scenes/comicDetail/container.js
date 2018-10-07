import View from './comicDetail';
import * as CharactersActions from '../../../redux/characters/actions';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    comic: state.comics.item,
    characters: state.characters.list
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCharactersList: (comicId) => {
      dispatch( CharactersActions.fetchCharactersList(comicId) );
    },
    addNewCharacter: () => {
      Actions.characterAdd();
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);