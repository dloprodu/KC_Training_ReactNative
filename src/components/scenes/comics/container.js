
import { connect } from 'react-redux';
import * as ComicsActions from '../../../redux/comics/actions';
import View from './comics';

// nos subscribimos a los cambios de valor de estas valores
const mapStateToProps = (state) => {
  return {
    isFetching: state.comics.isFetching,
    list: state.comics.list,
    house: state.comics.item
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchComicsList: (query) => {
      if (!query || !query.trim()) {
        dispatch( ComicsActions.fetchComicsList() );
        return;
      }

      dispatch( ComicsActions.searchComicsList(query) );
    },
    onComicTapped: (comic) => {
      dispatch( ComicsActions.setItem(comic) );
      // Actions.characters({ title: comic.nombre });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(View)