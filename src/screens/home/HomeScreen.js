import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,} from 'react-native';
import { Image } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const util = require('util');

export default class HomeScreen extends React.Component {
  static navigationOptions ={
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnPanel}>          
          <View style={styles.welcomeContainer}>
            <Image 
              source={require('../../../assets/img/logo.jpeg')}
              style={{width: 80, height: 80, marginBottom: '5%'}}
            />
            <Text style={{marginBottom: '5%'}}>Bem-vindo(a) ao app do Pet-Shop!</Text>
          </View>
          <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('CostumersScreen')}>
            <Text style={{color: 'white'}}>Clientes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('')}>
            <Text style={{color: 'white'}}>Vendas</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('')}>
            <Text style={{color: 'white'}}>Compras</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('ServiceScreen')}>
            <Text style={{color: 'white'}}>Serviços</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('')}>
            <Text style={{color: 'white'}}>Transporte</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('')}>
            <Text style={{color: 'white'}}>Relatórios</Text>
          </TouchableOpacity>
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
  },
  btnOptionClientes:{
    marginTop: '1%',
    width: '100%',
    height: '10%',
    backgroundColor: '#AF3E2E',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
});
