import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import Header from "../../components/basicComponents/Header";
import CardActionCreades from "../CardActionCreades";

export default class ActivityInfoBase extends React.Component {
    _selectSource(type) {
        if (type === 'art') return require('../../images/artPES2.jpg');
        if (type === 'sports') return require('../../images/esportPES2.jpg');
        if (type === 'culture') return require('../../images/culturaPES2.jpg');
        if (type === 'trips') return require('../../images/excursionesPES2.jpg');
        if (type === 'workshops') return require('../../images/talleresPES2.jpg');
        if (type === 'leisure') return require('../../images/ocioPES3.jpg');
    }
    _cardActionSelector(screen) {
        if (screen === 'Creades') return <CardActionCreades/>
        //if (screen === 'Apuntades')
        //if (screen === 'Cancelades')
    }
    render() {
        const {viewStyle,textStyle,viewImageStyle, titleStyle} = styles;
        return (
            <View style = {viewStyle}>
                <Header headerText = {'JubilApp'}/>
                <View style ={viewImageStyle}>
                    <ImageBackground
                        source={this._selectSource(this.props.tipus)}
                        style={{width: '100%', height: '100%'}}
                    />
                </View>
                <Text style = {titleStyle}>
                    {this.props.nomActivitat}
                </Text>
                <Text style = {textStyle}>{`C/Jordi Girona 21, Barcelona${"\n"}Data Inici: 05/12/2018 12:00 AM${"\n"}Data Fi: 05/12/2018 13:00 AM${"\n"}${"\n"}${this.props.descripcio}`}</Text>

                {this._cardActionSelector(this.props.screen)}

            </View>
        );
    }
}
const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%'
    },
    textStyle: {
        fontSize: 20,
        paddingBottom: '4%',
        paddingLeft: '3%',
        paddingRight: '3%',
        height: '35%',
        width: '100%',
        color: APP_COLORS.text_color,
    },
    viewImageStyle: {
        width: '100%',
        height: '27%',
        paddingBottom: '3%'
    },
    titleStyle: {
        fontSize: 35,
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: '5%',
        borderBottomColor: APP_COLORS.color_header,
        borderBottomWidth: 3,
        marginBottom: '2%',
        color: APP_COLORS.text_color,
        fontWeight: 'bold',
    }
}