import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Icone from 'react-native-vector-icons/Feather'
import {
    StyleSheet,
    View,
    Text,
    Platform,
} from 'react-native';
import { Title } from 'native-base';

import HomeTab from './AppTabNavigator/HomeTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';

import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

class MainScreen extends Component {
  static navigationOptions = {

    header: null
  }

  render() {
    return(
       <NavigationTab />
    );
  }
}
export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SearchTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        android:{
          backgroundColor: 'white'
        },
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
  }
});

const NavigationTab = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
