import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import Header from "../../components/basicComponents/Header";
import CardActionCreades from "../CardActionCreades";
import CardActionApuntades from "../CardActionApuntades";
import CardActionCancelades from "../CardActionCancelades";
import CardActionBuscar from "../CardActionBuscar";
import Moment from 'react-moment';
import 'moment-timezone';
import CardActionValorar from "../CardActionValorar";
import { EvilIcons } from '@expo/vector-icons';

export default class
ActivityInfoBase extends React.Component {
    _selectSource(type) {
        if (type === 'art') return require('../../images/artPES2.jpg');
        if (type === 'sports') return require('../../images/esportPES2.jpg');
        if (type === 'culture') return require('../../images/culturaPES2.jpg');
        if (type === 'trips') return require('../../images/excursionesPES2.jpg');
        if (type === 'workshops') return require('../../images/talleresPES2.jpg');
        if (type === 'leisure') return require('../../images/ocioPES3.jpg');
    }
    _cardActionSelector(screen,att) {
        if (screen === '/own') return <CardActionCreades deleteAct = {this.props.deleteAct} id = {this.props.id} nom = {this.props.nomActivitat}/>;
        else if (screen === "/attending") {
            if (att === 'yes') return <CardActionApuntades notAttend = {this.props.notAttend} id = {this.props.id} nom = {this.props.nomActivitat}/>;
            else return <CardActionCancelades attend = {this.props.attend} id = {this.props.id} nom = {this.props.nomActivitat}/>
        }
        else if (screen === "buscar") {
            return <CardActionBuscar notAttend = {this.props.notAttend} id = {this.props.id} attend = {this.props.attend}/>
        }
        else {
            return <CardActionValorar/>
        }
    }
   render() {
        const {momentStyle, iconStyle, viewStyle,textStyle,viewImageStyle, subtitleStyle, titleStyle, textStyleDescription, ViewRow} = styles;
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
                    <ScrollView >
                        <View style = {{flex: 1}}>
                            <View style = {ViewRow}>
                                <EvilIcons name="user" size={40} color = {APP_COLORS.text_color} style = {iconStyle}/>
                                <Text style = {subtitleStyle}>{this.props.nomCasal}</Text>
                            </View>
                            
                            <View style = {ViewRow}>
                                <EvilIcons name="location" size={40} color = {APP_COLORS.text_color} style = {iconStyle}/>
                                <Text style = {textStyle}>{this.props.ubicacioactual}</Text>
                            </View>
                            
                        <View style={ViewRow}>
                            <EvilIcons name="calendar" size={40} color = {APP_COLORS.text_color} style = {iconStyle}/>
                            <Text style = {textStyle}> Fecha inicio: </Text>
                            <Moment style = {momentStyle} element={Text} format="DD/MM/YYYY HH:mm">
                                {this.props.dataIni}
                            </Moment>
                        </View>

                        <View style={ViewRow}>
                            <EvilIcons name="calendar" size={40} color = {APP_COLORS.text_color} style = {iconStyle}/>
                            <Text style = {textStyle}> Fecha fin: </Text>
                            <Moment style = {momentStyle} element={Text} format="DD/MM/YYYY HH:mm">
                                {this.props.dataFi}
                            </Moment>
                        </View>

                        <Text style = {textStyleDescription}>{this.props.descripcio}</Text>
                        </View>


                    </ScrollView>


                    <View style = {{height: 70, paddingBottom: '5%'}}>
                        {this._cardActionSelector(this.props.screen, this.props.att)}
                    </View>
                </View>
        );
    }
}
const styles ={
    momentStyle: {
        fontSize: 20,
        paddingBottom: '2%',
        paddingRight: '3%',
        color: APP_COLORS.text_color,
    },
    iconStyle: {
        paddingLeft: '2%'
    },
    subtitleStyle: {
        fontSize: 26,
        marginLeft: '3%',
        paddingBottom: '2%',
        paddingRight: '3%',
        fontWeight: 'bold',
        color: APP_COLORS.text_color,
    },
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        flex: 1,
    },

    textStyle: {
        fontSize: 20,
        marginLeft: '3%',
        paddingBottom: '2%',
        paddingRight: '3%',
        color: APP_COLORS.text_color,
    },
    textStyleDescription: {
        fontSize: 20,
        paddingTop:'5%',
        marginLeft: '3%',
        paddingBottom: '2%',
        paddingRight: '3%',
        marginBottom: '3%',

        color: APP_COLORS.text_color,
    },
    viewImageStyle: {
        width: '100%',
        height: '27%',
    },
    titleStyle: {
        fontSize: 35,
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: '2%',
        borderBottomColor: APP_COLORS.color_header,
        borderBottomWidth: 3,
        color: APP_COLORS.text_color,
        fontWeight: 'bold',
    },
    ViewRow:{
        flexDirection: 'row',
    }
}