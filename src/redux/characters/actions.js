import * as types from './types';
import * as api from '../../api';
import { Actions } from 'react-native-router-flux';

function setFetching(value) {
  return {
    type: types.CHARACTERS_SET_FETCHING,
    value: value
  };
}

export function setList(value) {
  return {
    type: types.CHARACTERS_UPDATE_LIST,
    value
  };
}

export function setItem(value) {
  return {
    type: types.CHARACTERS_SET_ITEM,
    value
  };
}

export function fetchCharactersList(comicId) {
  return (dispatch, getState) => {
    dispatch( setFetching(true) );
    dispatch( setList([]) );

    api
      .fetchCharacters(comicId)
      .then( res => {
        console.log('FetchCharacters: ', res);

        const characters = !res || !res.data || !res.data.data || !res.data.data.results
          ? []
          : res.data.data.results;

        api.fetchLocalCharacters()
          .then(localCharacters => {
            localCharacters = localCharacters.filter(local => local.comicId === comicId);
            result = [ ...localCharacters, ...characters];
            console.log('mergeList: ', result);

            dispatch( setFetching(false) );
            dispatch( setList( result ) );
          })
          .catch(() => {
            dispatch( setFetching(false) );
            dispatch( setList( characters ) );
          })
      })
      .catch( err => {
        dispatch( setFetching(false) );
        console.error('FetchCharacters error: ', err);
      });
  };
}

export function postCharacter(data) {
  return (dispatch, getState, api) => {
    if (!data) {
      return;
    }

    console.log(data);

    const comic = getState().comics.item;

    if (!comic) {
      return;
    }

    const characterData = {
      name: data.name,
      description: data.description,
      thumbnail: { path: data.thumbnail, extension: '' },
      comicId: comic.id
    };

    dispatch( setFetching(true) );

    api
      .postComicCharacter(characterData)
      .then( res => {
        dispatch( setFetching(false) );

        dispatch( fetchCharactersList(comic.id) );

        Actions.pop();
      })
      .catch( err => {
        dispatch( setFetching(false) );
        console.log('fetchCharacters error: ', err);
      });
  };
}