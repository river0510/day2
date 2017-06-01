/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/main'

export default class day2 extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

AppRegistry.registerComponent('day2', () => day2);
