import {APP_COLORS} from "../constants/colors";
import {View} from 'react-native';
import React from "react";
import ButtonBack from "./basicComponents/ButtonBack";
import {Actions} from "react-native-router-flux";
import {EvilIcons} from "@expo/vector-icons";


const CardActionCreades = () => {
    return (
        <View style = {styles.container}
            separator={true}
            inColumn={false}>
            <ButtonBack buttonText = "Atrás"
                        path = {() => Actions.activitatlist()}
            />
            <EvilIcons name='pencil' size={60} color= {APP_COLORS.color_next} style = {[styles.iconStyle, {marginLeft: '7%'}]} onPress= { () => {Actions.modificaractivitat()}}/>
            <EvilIcons name='trash' size={60} color= {APP_COLORS.color_header} style = {[styles.iconStyle, {marginLeft: '0%'}]}/>
        </View>
    )
};

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: '5%',
        borderTopColor: '#E9E9E9',
        borderTopWidth: 1,
    },
    iconStyle: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginRight: '8%'
    },
}

export default CardActionCreades;