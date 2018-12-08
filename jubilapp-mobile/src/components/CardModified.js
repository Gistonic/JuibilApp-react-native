import {APP_COLORS} from "../constants/colors";

import {View, Image, Text} from 'react-native';
import React from "react";
import { Card } from 'react-native-elements';
import { EvilIcons, Ionicons } from '@expo/vector-icons';


class CardModified extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {textStyle, titleStyle, imageStyle, texticonStyle, cardStyle, iconStyle} = styles;
        return (
            <Card image = {this.props.image} style = {cardStyle}
                imageStyle = {imageStyle} >
                <Text style = {titleStyle}> {this.props.nom}  </Text>
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
    texticonStyle: {
        flexDirection: 'row',
        margin: '2%'
    },
    imageStyle: {
        borderRadius: 8,
        height: '60%',
        width: '80%'
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
        borderRadius: 15
    },
    textStyle: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 21,
        color:APP_COLORS.text_color
    },
    imageStyle: {
        height: '48%'
    }
}

export default CardModified;