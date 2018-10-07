import { connect } from 'react-redux';
import * as CharactersActions from '../../../redux/characters/actions';
import View from './characterAdd';

const mapStateToProps = (state) => {
  return {
    isFetching: state.characters.isFetching
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmitCharacter: (data) => {
      dispatch( CharactersActions.postCharacter(data) )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View);