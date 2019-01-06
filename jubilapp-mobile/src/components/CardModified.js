import {APP_COLORS} from "../constants/colors";

import {View, Image, Text} from 'react-native';
import React from "react";
import { Card } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
import Moment from 'react-moment';
import 'moment-timezone';


class CardModified extends React.Component {
    constructor(props) {
        super(props)
    }

    pintar_preu(){
        if(this.props.valorar === false){
            if(this.props.preu === 0){
                return(
                    <View style = {styles.viewpriceStyle}>
                        <Text style = {styles.text2Style}>GRATIS!</Text>
                    </View>
                )
            }
            else{
                var preu_txt = this.props.preu + ' €';
                return(
                    <View style = {styles.viewpriceStyle}>
                        <Text style = {styles.text2Style}>{preu_txt}</Text>
                    </View>
                )
            }
        }
    }

    render() {
        const {textStyle, titleStyle, imatgeStyle, texticonStyle, cardStyle, iconStyle,titlepriceStyle, ViewRow} = styles;
        return (
            <Card image = {this.props.image} style = {cardStyle}
                imageStyle = {imatgeStyle} >
                <View style = {titlepriceStyle}>
                    <Text style = {titleStyle}> {this.props.nom}  </Text>
                    {this.pintar_preu()}    
                </View>
                <View style = {texticonStyle}>
                    <EvilIcons name="location" size={40} color = {APP_COLORS.text_color} style = {iconStyle}/>
                    <Text style = {textStyle}> {this.props.ubicacio} </Text>
                </View>
                <View style = {texticonStyle}>
                    <EvilIcons name="calendar" size={40} color = {APP_COLORS.text_color} style = {iconStyle}/>
                    <View style={ViewRow}>

                        <Moment style = {textStyle} element={Text} format="DD/MM/YYYY">
                            {this.props.dataIni}
                        </Moment>
                        <Text style = {textStyle}> - </Text>
                        <Moment style = {textStyle} element={Text} format="DD/MM/YYYY">
                            {this.props.dataFi}
                        </Moment>
                    </View>
                </View>
                {this.props.valorar ? null:<View style = {texticonStyle}>
                    <EvilIcons name="clock" size={40} color = {APP_COLORS.text_color} style = {iconStyle}/>
                    <View style={ViewRow}>

                        <Moment style = {textStyle} element={Text} format="hh:mm">
                            {this.props.horaIni}
                        </Moment>
                        <Text style = {textStyle}> - </Text>
                        <Moment style = {textStyle} element={Text} format="hh:mm">
                            {this.props.horaFi}
                        </Moment>
                    </View>
                </View>}
            </Card>
        )
    }
};

const styles = {
    viewCard: { 
        paddingTop: '5%',
        backgroundColor: APP_COLORS.color_neutral,
        height: '72%'
    },
    viewpriceStyle: {
        width: '30%',
        borderWidth: 3,
        borderRadius: 15,
        marginLeft: '22%',
        borderColor: APP_COLORS.text_color
    },
    texticonStyle: {
        flexDirection: 'row',
        margin: '2%',
        paddingRight: '5%'
    },
    titlepriceStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imatgeStyle: {
        borderRadius: 8,
        height: '35%',
        width: '100%'
    },
    iconStyle: {
        paddingLeft: '2%'
    },
    titleStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 27,
        color:APP_COLORS.text_color
    },
    cardStyle: {
        height: '90%',
        borderRadius: 15,
        paddingRight: '5%'
    },
    textStyle: {
        fontFamily: 'open-sans',
        fontSize: 21,
        color:APP_COLORS.text_color
    },
    text2Style: {
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        textAlign: 'center',
        color:APP_COLORS.text_color
    },
    imageStyle: {
        height: '48%'
    },
    ViewRow:{
        flexDirection: 'row',
    }
}

export default CardModified;