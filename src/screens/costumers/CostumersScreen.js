import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,} from 'react-native';
import { Image } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const util = require('util');

export default class CostumersScreen extends React.Component {
  static navigationOptions ={
    title: 'Clientes'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnPanel}>          
          <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('RegisterCostumerScreen')}>
            <Text style={{color: 'white'}}>Cadastro de Pet</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('')}>
            <Text style={{color: 'white'}}>Consulta</Text>
          </TouchableOpacity>
          <Image 
            source={require('../../../assets/img/pug.jpg')}
            style={styles.imgContainer}
          />
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
  btnOptionClientes:{
    marginTop: '1%',
    width: '100%',
    height: '13%',
    backgroundColor: '#AF3E2E',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer:{
    marginTop: '80%',
    width: 50,
    height: 55,
    alignSelf: 'center',
  },
});
