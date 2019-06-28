import React from 'react';
import { StyleSheet, Text, View, TextInput, ListView, TouchableHighlight, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
const util = require('util');

export default class LoginScreen extends React.Component {
  static navigationOptions ={
    title: 'Login'
  };

  constructor(props){
    super(props);

    this.state = {
      //isLoading: true,
      TextInputUsername: '',
      TextInputPassword: '',
    }
  }

  UserLogin = () => {
    fetch('http://192.168.56.1/petshop-react/src/con/login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.TextInputUsername,
        password: this.state.TextInputPassword,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson == "success"){
          this.props.navigation.navigate('HomeScreen');
        }else{
          this.props.navigation.navigate('LoginScreen');
          alert(responseJson);
        }        
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../../assets/img/logo.jpeg')}
          style={{width: 200, height: 200}}
        />

        <View style={styles.loginPanel}>
            <TextInput 
              placeholder="usuario"
              style={styles.loginPanelInput}
              onChangeText={username => this.setState({TextInputUsername : username})}
            />
            <TextInput 
              placeholder="senha"
              style={styles.loginPanelInput}
              secureTextEntry={true}
              onChangeText={password => this.setState({TextInputPassword : password})}
            />
            <TouchableHighlight style={styles.loginPanelBtn}
            onPress={this.UserLogin}>
              <Text style={{color: 'white'}}>LOGIN</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.loginPanelBtnAlt}
              onPress={() => this.props.navigation.navigate('SignUpScreen')}>
              <Text style={{color: 'white'}} onPress={() => this.props.navigation.navigate('SignUpScreen')}>CADASTRAR</Text>
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
    backgroundColor: '#E95C41',
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
    backgroundColor: '#ACACAC',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    height: '10%'
  },
});
