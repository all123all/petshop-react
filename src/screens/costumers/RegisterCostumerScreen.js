import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { Image, Input } from 'react-native-elements';
const util = require('util');

export default class RegisterCostumerScreen extends React.Component {
  static navigationOptions ={
    title: 'Cadastrar'
  };

  constructor(props){
    super(props)

    this.state={
      TextInputOwnerName: '',
      TextInputEmail: '',
      TextInputName: '',
      TextInputAge: '',
    }
  }

  UserRegistration = () => {
    fetch('http://192.168.56.1/petshop-react/src/con/create/RegisterCostumer.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.TextInputName,
        email: this.state.TextInputEmail,
        owner_name: this.state.TextInputOwnerName,
        age: this.state.TextInputAge,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson == "invalid"){
          this.props.navigation.navigate('LoginScreen');
        }else{
          this.props.navigation.navigate('CostumersScreen');
        }
        alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text>
                Tela de Cadastro de Pet
            </Text>
        </View>

        <View style={styles.loginPanel}>
          <TextInput 
            placeholder="Nome completo do Dono"
            style={styles.loginPanelInput}
            onChangeText={owner_name => this.setState({TextInputOwnerName : owner_name})}
          />
          <TextInput 
            placeholder="E-mail"
            style={styles.loginPanelInput}
            onChangeText={email => this.setState({TextInputEmail : email})}
          />
          <TextInput 
            placeholder="Nome do Pet"
            style={styles.loginPanelInput}
            onChangeText={name => this.setState({TextInputName : name})}
          />
          <TextInput 
            placeholder="Idade do Pet"
            style={styles.loginPanelInput}
            keyboardType="number-pad"
            onChangeText={age => this.setState({TextInputAge : age})}
          />
          <TouchableHighlight style={styles.loginPanelBtnAlt}
            onPress={this.UserRegistration}>
            <Text style={{color: 'white'}}>CONCLUIR</Text>
          </TouchableHighlight>
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
  loginPanelInput:{
    marginTop: '3%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%',
    height: '10%',
    padding: 4,
  },
  loginPanelBtn:{
    width: '100%',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3402E',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    height: '10%'
  },
  loginPanelBtnAlt:{
    width: '100%',
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E95C41',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    height: '10%'
  },
});
