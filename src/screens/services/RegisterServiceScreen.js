import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Picker} from 'react-native';
import { Image } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const util = require('util');

export default class RegisterServiceScreen extends React.Component {
  static navigationOptions ={
    title: 'Novo Serviço'
  };

  constructor(){
      super();
      this.state={
          PickerSelectedVal: ''
      }
  }

  getSelectedPickerValue =() =>{
      Alert.alert("Serviço selecionado: " + this.state.PickerSelectedVal);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnPanel}>
            <Picker
                selectedValue={this.state.PickerSelectedVal}
                style={styles.servicePicker}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({PickerSelectedVal: itemValue})}>

                <Picker.Item label="Tosa" value="tosa" />
                <Picker.Item label="Banho" value="banho" />
                <Picker.Item label="Tosa e Banho" value="tosa-banho" />
            </Picker>
            <TouchableOpacity 
            style={styles.btnOptionClientes}
            onPress={() => this.props.navigation.navigate('')}>
                <Text style={{color: 'white', alignSelf: 'center'}}>Salvar serviço</Text>
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
    justifyContent: 'center'
  },
  servicePicker:{
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  btnOptionClientes:{
    marginTop: '3%',
    width: '100%',
    height: '25%',
    backgroundColor: '#AF3E2E',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
