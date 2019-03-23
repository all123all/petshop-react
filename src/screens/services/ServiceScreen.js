import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,} from 'react-native';
import { Image } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const util = require('util');

export default class ServiceScreen extends React.Component {
  static navigationOptions ={
    title: 'Serviços'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnPanel}>        
          <Image 
            source={require('../../../assets/img/pet-groomer.png')}
            style={styles.imgContainer}
          />
          <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('ConsultServiceScreen')}>
            <Text style={{color: 'white'}}>Serviços em aberto</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('RegisterServiceScreen')}>
            <Text style={{color: 'white'}}>Realizar novo serviço</Text>
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
    justifyContent: 'space-between'
  },
  btnOptionClientes:{
    marginTop: '1%',
    width: '100%',
    height: '20%',
    backgroundColor: '#AF3E2E',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer:{
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: '20%',
  },
});
