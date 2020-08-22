/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './src/navigation/Navigation';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './src/redux/reducer/reducer';

let store = createStore(Reducer);

export class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppRoot);
