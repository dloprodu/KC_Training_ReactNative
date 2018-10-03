/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StatusBar } from 'react-native';

import { Router, Scene, Stack } from 'react-native-router-flux';

import { Comics } from './components/scenes';
import * as api from './api';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './redux';

import * as theme from './common/theme';

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api))
);

const sceneDefaultStules = {
  navigationBarStyle: { backgroundColor: theme.PrimaryColor },
  backButtonTextStyle: { color: 'white'},
  backButtonTintColor: 'white',
  titleStyle: { color: 'white'}
}

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    api.configureAxios();
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="comics"
                component={Comics} 
                title="Comics" 
                {...sceneDefaultStules}
                hideNavBar={true} initial={true}>
            </Scene>
          </Stack>
        </Router>
      </Provider>
    );
  }
}

