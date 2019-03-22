import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { Image } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {HomeScreen} from '../home/HomeScreen';

const util = require('util');

export class SettingsScreen extends React.Component {
  static navigationOptions ={
    title: 'Configurações'
  };

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../../assets/img/logo.jpeg')}
          style={{width: 200, height: 200}}
        />

        <View style={styles.loginPanel}>
            <Text>
                Configurações
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginPanel:{
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
