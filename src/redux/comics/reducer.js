import * as types from './types';

const initialState = {
  isFetching: false,
  list: [],
  item: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.COMICS_UPDATE_LIST:
      return {
        ...state,
        list: action.value
      };

    case types.COMICS_SET_FETCHING:
      return {
        ...state,
        isFetching: action.value
      };

    case types.COMICS_SET_ITEM:
      return {
        ...state,
        item: action.value
      };

    default:
      return state;
  }
}