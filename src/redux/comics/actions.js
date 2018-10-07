import { AsyncStorage } from 'react-native';
import * as types from './types';
import * as api from '../../api';

function setFetching(value) {
  return {
    type: types.COMICS_SET_FETCHING,
    value: value
  };
}

export function setList(value) {
  return {
    type: types.COMICS_UPDATE_LIST,
    value
  };
}

export function setItem(value) {
  return {
    type: types.COMICS_SET_ITEM,
    value
  };
}

export function fetchComicsList() {
  return (dispatch, getState) => {
    AsyncStorage.getItem('comicsList', (err, res) => {
      if (err || !res) {
        dispatch( setList([]) );
        dispatch( setFetching(true) );
        return;
      }

      const list = JSON.parse( res );

      dispatch( setFetching(!list || !list.length) );
      dispatch( setList( list ) );
    });

    api
      .fetchComics()
      .then( res => {
        console.log('FetchComics: ', res);

        dispatch( setFetching(false) );
        if (!res || !res.data || !res.data.data || !res.data.data.results) {
          return
        }

        AsyncStorage.setItem('comicsList', JSON.stringify( res.data.data.results ));

        dispatch( setList( res.data.data.results ) );
      })
      .catch( err => {
        dispatch( setFetching(false) );
        console.error('fetchComics error: ', err);
      });
  };
}

export function searchComicsList(query) {
  return (dispatch, getState) => {
    console.log('getState: ', getState());

    dispatch( setFetching(true) );
    dispatch( setList([]) );

    api
      .searchComics(query)
      .then( res => {
        console.log('FetchComics: ', res);

        dispatch( setFetching(false) );
        if (!res || !res.data || !res.data.data || !res.data.data.results) {
          dispatch( setList([]) );
          return
        }

        dispatch( setList( res.data.data.results ) );
      })
      .catch( err => {
        dispatch( setFetching(false) );
        console.error('fetchComics error: ', err);
      });
  };
}