import {StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen  from './src/screens/signin/LoginScreen';
import SignUpScreen from './src/screens/signup/SignUpScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import { SettingsScreen } from './src/screens/settings/SettingsScreen';
import CostumersScreen from './src/screens/costumers/CostumersScreen';
import RegisterCostumerScreen from './src/screens/costumers/RegisterCostumerScreen';

const AppNavigator = createStackNavigator({
  LoginScreen:              {screen: LoginScreen},
  SignUpScreen:             {screen: SignUpScreen},
  HomeScreen:               {screen: HomeScreen},
  SettingsScreen:           {screen: SettingsScreen},
  CostumersScreen:          {screen: CostumersScreen},
  RegisterCostumerScreen:   {screen: RegisterCostumerScreen},
});

export default createAppContainer(AppNavigator);
