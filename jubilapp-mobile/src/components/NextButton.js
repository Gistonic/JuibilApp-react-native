import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native'
import {APP_COLORS} from "../constants/colors"


const NextButton = (props) => {
    return (
        <View style = {styles.viewStyle}>
            <TouchableOpacity onPress= {props.path}>
                <Text style = {styles.buttonTextStyle}>
                    {props.buttonText}
                </Text>

            </TouchableOpacity>
        </View>
    )
};

const styles = {
    viewStyle: {
        flex: 1,
        alignItems: 'center',
    },
    buttonTextStyle: {
        borderWidth: 3,
        padding: 8,
        backgroundColor: APP_COLORS.color_next,
        borderColor: APP_COLORS.color_next,
        color: APP_COLORS.color_neutral,
        borderRadius: 10,
        fontSize: 25,
        height: 55,
        width: 125,
        textAlign:'center'
    }
}
export default NextButton;