import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { Image, Input } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const util = require('util');

export default class ConsultCostumerScreen extends React.Component {
  static navigationOptions ={
    title: 'Consultar'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnPanel}>          
          <Input 
            placeholder="Digite o nome do PET"
          />
          <TouchableOpacity 
          style={styles.btnProcurar}
          onPress={() => this.props.navigation.navigate('ListCostumer')}>
              <Text style={{color: 'white', alignSelf: 'center'}}>Procurar...</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.btnProcurar}
          onPress={() => this.props.navigation.navigate('RegisterCostumerScreen')}>
              <Text style={{color: 'white', alignSelf: 'center'}}>Cadastrar novo PET</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }
}

export class ListCostumer extends React.Component {
    static navigationOptions ={
      title: 'Consultar'
    };
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.btnPanel}>          
            <Text>Lista de PETS, donos e algumas informações</Text>
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
    justifyContent: 'center'
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
  btnProcurar:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#AF3E2E',
    height: '20%',
    marginTop: '5%',
  },
});
