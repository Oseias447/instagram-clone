import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './src/components/MainScreen';

export default class App extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

const AppStackNavigator = createStackNavigator({

  Main:{
    screen: MainScreen
  }
});

const Navigation = createAppContainer(AppStackNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
