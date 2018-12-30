import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import HeaderIcon from '../../components/basicComponents/HeaderIcon';
import Description from '../../components/basicComponents/Description';
import ButtonBack from '../../components/basicComponents/ButtonBack';
import connect from "react-redux/es/connect/connect";
import {Actions} from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';

class veureInfoFichas extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {viewStyle, container, textStyle,viewkmStyle,iconStyle} = styles;
        return (
            <View style = {viewStyle}>
                <HeaderIcon headerText = {'Info fichas'}
                iconName={ 'home'}
                colorName={ APP_COLORS.color_neutral}
                size = {75}
                textSize = {35}
                path={() => Actions.home()}/>

                <Description textExpl= {'Pantalla per explicar que son les fichas, perque serveixen, com van els descomptes, etc.'}/>
                <Description textExpl= {'Segurament caldra algun tipo de paginacio, lscroll no anava qquan ho vaig intentar'}/>
                
                
                <View style = {container}>
                    <ButtonBack buttonText = {'Atrás'}
                        path = {() => Actions.verfichas()}
                        colorBoto = {APP_COLORS.color_header}/>
                </View>
            </View>   
        );
    }
}
  const styles ={
    iconStyle: {
        paddingLeft: '41%'
    },
    viewkmStyle: {
        width: '100%', 
        height: '25%',
        alignContent: 'center',
        paddingTop: '5%',
        paddingLeft: '37%',
        paddingBottom: '1%'
    },
    textStyle: {
        color: 'white',
       fontSize: 50,
       fontWeight: 'bold',
    },
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%', 
        height: '100%'
    },
    circle:{
        width: 100,
        height: 100,
        borderRadius: 100,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "gray",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 2
    },
    containerPrincipal: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    container: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '8%'
    }
  }


export default veureInfoFichas;