import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { Image, Input } from 'react-native-elements';
const util = require('util');

export default class SignUpScreen extends React.Component {
  static navigationOptions ={
    title: 'Cadastrar'
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Image 
          source={require('./assets/img/logo.jpeg')}
          style={{width: 200, height: 200}}
        /> */}

        <View>
            <Text>
                INFORME ALGUNS DADOS
            </Text>
        </View>

        <View style={styles.loginPanel}>
          <TextInput 
            placeholder="Nome completo"
            style={styles.loginPanelInput}
          />
          <TextInput 
            placeholder="e-mail"
            style={styles.loginPanelInput}
          />
          <TextInput 
            placeholder="usuario"
            style={styles.loginPanelInput}
          />
          <TextInput 
            placeholder="senha"
            style={styles.loginPanelInput}
          />
          <TouchableHighlight style={styles.loginPanelBtnAlt}
          onPress={() => this.props.navigation.navigate('LoginScreen')}>
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
