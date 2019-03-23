import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,} from 'react-native';
import { Image } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const util = require('util');

export default class ConsultServiceScreen extends React.Component {
  static navigationOptions ={
    title: 'Consultar Serviços'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnPanel}>

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
  btnPanel:{
    width: '80%',
    justifyContent: 'space-between'
  },
});
