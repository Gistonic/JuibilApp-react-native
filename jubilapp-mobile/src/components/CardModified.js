import {APP_COLORS} from "../constants/colors";

import {View, Image, Text} from 'react-native';
import React from "react";
import { Card } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';


class CardModified extends React.Component {
    constructor(props) {
        super(props)
    }

    pintar_preu(){
        if(this.props.preu == 0){
            return(
                <View style = {styles.viewpriceStyle}>
                    <Text style = {styles.text2Style}>GRATIS!</Text>
                </View>
            )
        }
        else{
            return(
                <View style = {styles.viewpriceStyle}>
                    <Text style = {styles.text2Style}>{this.props.preu}</Text>
                </View>
            )
        }
    }

    render() {
        const {viewpriceStyle,textStyle,text2Style, titleStyle, imatgeStyle, texticonStyle, cardStyle, iconStyle,titlepriceStyle} = styles;
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
                    <Text style = {textStyle}> {this.props.dataIni}-{this.props.dataFi}</Text>
                </View>
                <View style = {texticonStyle}>
                    <EvilIcons name="clock" size={40} color = {APP_COLORS.text_color} style = {iconStyle}/>
                    <Text style = {textStyle}> {this.props.horaIni}-{this.props.horaFi}</Text>
                </View>
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
        width: '25%',
        borderWidth: 3,
        borderRadius: 15,
        marginLeft: '30%',
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
        fontFamily: 'sans-serif-condensed',
        fontSize: 27,
        fontWeight: 'bold',
        color:APP_COLORS.text_color
    },
    cardStyle: {
        height: '100%',
        borderRadius: 15,
        paddingRight: '5%'
    },
    textStyle: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 21,
        color:APP_COLORS.text_color
    },
    text2Style: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center',
        color:APP_COLORS.text_color
    },
    imageStyle: {
        height: '48%'
    }
}

export default CardModified;