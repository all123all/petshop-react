import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, AppRegistry } from 'react-native';
import { Image, Input } from 'react-native-elements';
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

  InsertDataToServer = () => {
    const {TextInputName} = this.state;
    const {TextInputEmail} = this.state;
    const {TextInputUsername} = this.state;
    const {TextInputPassword} = this.state;

    //alert('Cadastro realizado com sucesso!');
    //this.props.navigation.navigate('LoginScreen');

    fetch('http://127.0.1.1/petshop-react/test.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

        body: JSON.stringify({ 
          // name: TextInputName,     
          // email: TextInputEmail,     
          // username: TextInputUsername,
          // password: TextInputPassword,
          'key': 'test',
      })     
    })
    
    // .then((response) => response.json())
    //       .then((responseJson) => {
     
    //         Alert.alert(responseJson);
     
    //       }).catch((error) => {
    //         console.error(error);
    //       });

      .then((response) => response.json())
      .then((res) => {
        alert(res.message);
      })

      .done();
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
            onChangeText={TextInputName => this.setState({TextInputName})}
          />
          <TextInput 
            placeholder="e-mail"
            style={styles.loginPanelInput}
            onChangeText={TextInputEmail => this.setState({TextInputEmail})}
          />
          <TextInput 
            placeholder="usuario"
            style={styles.loginPanelInput}
            onChangeText={TextInputUsername => this.setState({TextInputUsername})}
          />
          <TextInput 
            placeholder="senha"
            onChangeText={TextInputPassword => this.setState({TextInputPassword})}
            style={styles.loginPanelInput}
          />
          <TouchableHighlight style={styles.loginPanelBtnAlt}
            onPress={() => this.props.navigation.navigate('LoginScreen')}
            onPress={this.InsertDataToServer()}>
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
