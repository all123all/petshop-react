import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, AppRegistry } from 'react-native';
import { Image, Input } from 'react-native-elements';
//import console = require('console');
const util = require('util');

export default class SignUpScreen extends React.Component {
  static navigationOptions ={
    title: 'Cadastrar'
  };

  constructor(props){
    super(props)

    this.state ={
      TextInputName: '',
      TextInputEmail: '',
      TextInputUsername: '',
      TextInputPassword: '',
    }
  }

  UserRegistration = () => {
    fetch('http://192.168.56.1/petshop-react/src/con/submit_user_info.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.TextInputName,
        email: this.state.TextInputEmail,
        username: this.state.TextInputUsername,
        password: this.state.TextInputPassword,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson == "Choose another email."){
          this.props.navigation.navigate('SignUpScreen');
        }else{
          this.props.navigation.navigate('LoginScreen');
        }
        alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../../assets/img/logo.jpeg')}
          style={{width: 100, height: 100}}
        />

        <View>
            <Text>
                INFORME ALGUNS DADOS
            </Text>
        </View>

        <View style={styles.loginPanel}>
          <TextInput 
            placeholder="Nome completo"
            style={styles.loginPanelInput}
            onChangeText={name => this.setState({TextInputName : name})}
          />
          <TextInput 
            placeholder="e-mail"
            style={styles.loginPanelInput}
            onChangeText={email => this.setState({TextInputEmail : email})}
          />
          <TextInput 
            placeholder="usuario"
            style={styles.loginPanelInput}
            onChangeText={username => this.setState({TextInputUsername : username})}
          />
          <TextInput 
            placeholder="senha"
            secureTextEntry={true}
            onChangeText={password => this.setState({TextInputPassword : password})}
            style={styles.loginPanelInput}
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
