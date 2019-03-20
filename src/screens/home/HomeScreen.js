import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { Image } from 'react-native-elements';
const util = require('util');

export default class HomeScreen extends React.Component {
  static navigationOptions ={
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../../assets/img/logo.jpeg')}
          style={{width: 200, height: 200}}
        />

        <View style={styles.loginPanel}>
            
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
