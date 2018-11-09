import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';

const BotoArt = (props) => {
    return(
        <View style = {viewStyle}>
            <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
                <Image source={require("./images/artPES.jpg")}/>
            </TouchableOpacity>
        </View>
    );
};
export default BotoArt;