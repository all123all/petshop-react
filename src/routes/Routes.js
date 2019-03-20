import {DrawerNavigator}    from 'react-navigation';
import App                  from '../../App';
import SignUpScreen         from '../screens/signup/SignUpScreen';

export default DrawerNavigator({
    LoginScreen:{
        screen: App
    },
    SignUpScreen:{
        screen: 'SignUpScreen'
    }
});