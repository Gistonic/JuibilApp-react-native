import React from 'react';
import {APP_COLORS} from "../constants/colors";
import {Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const Interes = (props) => {

    return(
        <TouchableOpacity style={styles.buttonStyle}>
            <ImageBackground source={require('../images/artPES.jpg')} style={styles.imageStyle}>
                    <Text style={styles.textStyle}> {props.name} </Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles ={

    buttonStyle:{
        justifyContent: 'center',
        alignItems: 'center', //horizontal
        height: '70%',
        width: '45%',
        marginTop: 5,
        marginStart: 8,
        marginEnd: 8
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        //backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: APP_COLORS.color_header
    },
    textStyle:{
        fontSize:20,
        color: 'black',
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold'
    }
}
export default Interes;

//onPress={this.props.onPress}> estava al TouchableOpacity