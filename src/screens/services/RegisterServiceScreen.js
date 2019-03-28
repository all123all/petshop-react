import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Picker, TextInput} from 'react-native';
import { Image } from 'react-native-elements';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DatePicker from 'react-native-datepicker';

const util = require('util');

export default class RegisterServiceScreen extends React.Component {
  static navigationOptions ={
    title: 'Novo Serviço'
  };

  constructor(){
      super();
      this.state={
          PickerSelectedVal: '',
          date: '23-08-1998',
      }
  }

  getSelectedPickerValue =() =>{
      Alert.alert("Serviço selecionado: " + this.state.PickerSelectedVal);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnPanel}>
          <Text>Selecione o serviço desejado: </Text>
          <View 
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: '100%',
              marginBottom: '3%',
              marginTop: '3%',
            }}
          />
          <View style={styles.servicePicker}>
            <Picker
                selectedValue={this.state.PickerSelectedVal}                
                onValueChange={(itemValue, itemIndex) =>
                this.setState({PickerSelectedVal: itemValue})}>

                <Picker.Item label="Tosa" value="tosa" />
                <Picker.Item label="Banho" value="banho" />
                <Picker.Item label="Tosa e Banho" value="tosa-banho" />
            </Picker>
          </View>          
          <TextInput 
            placeholder="digite o valor"
            keyboardType="number-pad"
            style={styles.serviceValueInput}
          />
          <View>
            <DatePicker
              style={styles.serviceDatePicker}
              date={this.state.date} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="24-03-2019"
              maxDate="01-12-2019"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
          </View>
          <TouchableOpacity 
          style={styles.btnOptionClientes}
          onPress={() => this.props.navigation.navigate('ServiceScreen')}>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  servicePicker:{
    width: '100%',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: '3%',
  },
  serviceValueInput: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    height: '18%',
    fontSize: 28,
    padding: '1%',
  },
  serviceDatePicker: {
    //width: '100%',
    marginTop: '3%',
  },
  btnOptionClientes:{
    marginTop: '3%',
    width: '100%',
    height: '15%',
    backgroundColor: '#AF3E2E',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
