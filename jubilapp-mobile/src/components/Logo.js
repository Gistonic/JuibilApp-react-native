import React from 'react';
import {Image} from 'react-native';

const Logo = () => {
    return (
        <Image source={require('../images/logo.png')} style = {styles.imageStyle}
        ></Image>
    );
};

const styles = {
    imageStyle: {
        width: 150,
        height: 150,
        // Set border width.
        borderWidth: 5,
 
        // Set border Hex Color Code Here.
        borderColor: '#864EE8',

        borderRadius: 150
    }

}

export default Logo;