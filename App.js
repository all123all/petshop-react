import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native-elements';
import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen  from './src/screens/signin/LoginScreen';
import SignUpScreen from './src/screens/signup/SignUpScreen';
import HomeScreen from './src/screens/home/HomeScreen';

const AppNavigator = createStackNavigator({
  LoginScreen: {screen: LoginScreen},
  SignUpScreen: {screen: SignUpScreen},
  HomeScreen :{screen: HomeScreen},
});

export default createAppContainer(AppNavigator);
