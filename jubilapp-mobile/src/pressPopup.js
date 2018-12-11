import {Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
export const pressPopup = (title,message) =>{
    Alert.alert(
        title,
        message,
        [
            {text: 'No'},
            {text: 'Sí', onPress: () => Actions.home()},
        ],
        { cancelable: false }
    );    
}