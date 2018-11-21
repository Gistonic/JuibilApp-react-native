import React from 'react';
import { Text, View} from 'react-native'

const Numbers = (props) => {

    return (
              <Text style = {[styles.button,  {backgroundColor: props.backcolor}]}>
              {props.buttonText}
              </Text>
     )
  };
  const styles = {
    button: {
       padding: 30,
       textAlign: 'center',
       borderColor: '#286AFF',
       color: 'white',
       fontSize: 35,
       borderRadius: 75,
    }
 }
export default Numbers;