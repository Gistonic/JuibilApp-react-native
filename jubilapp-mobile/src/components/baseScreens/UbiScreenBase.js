import React from 'react';
import {View, KeyboardAvoidingView,Alert} from 'react-native';
import Formulari from '../basicComponents/Formulari';
import HeaderIcon from '../basicComponents/HeaderIcon';
import NextButton from '../basicComponents/NextButton';
import ButtonBack from '../basicComponents/ButtonBack';
import {APP_COLORS} from "../../constants/colors";
import { Actions } from 'react-native-router-flux';
import {pressPopup} from "../../pressPopup";
import Description from "../basicComponents/Description";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class NameScreenBase extends React.Component {
    render() {
        const {viewStyle, vista1Style, container, formStyle, viewStyle1} = styles;
        return (
            <View style = {viewStyle}>
                    <HeaderIcon headerText = {this.props.headerName}
                                iconName={ 'home'}
                                colorName={ APP_COLORS.color_neutral}
                                size = {75}
                                textSize = {35}
                                path={() => pressPopup('Salir', 'Desea ir al menú principal y perder todos los cambios?')}
                    />
                    <View style = {viewStyle1}>
                        <View style = {vista1Style}>
                            <Description textExpl = "Introduce la ubicación"/>

                            <GooglePlacesAutocomplete
                                placeholder='Ubicación'
                                minLength={2}
                                autoFocus={false}
                                returnKeyType={'search'}
                                listViewDisplayed='auto'
                                fetchDetails={true}
                                renderDescription={row => row.description}
                                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                                    this.props.changeFormLatitude(details.geometry.location.lat);
                                    this.props.changeFormLongitude(details.geometry.location.lng);
                                }}
                                query={{
                                    // available options: https://developers.google.com/places/web-service/autocomplete
                                    key: 'YOUR API KEY',
                                    language: 'es', // language of the results
                                }}
                                styles={{
                                    textInputContainer: {
                                        marginTop: '5%',
                                        backgroundColor: 'rgba(0,0,0,0)',
                                        borderBottomWidth:2,
                                        borderTopWidth:0,
                                        marginLeft: '5%',
                                        marginRight: '5%',
                                    },
                                    textInput: {
                                        height: 35,
                                        color: '#5d5d5d',
                                        fontSize: 27,
                                    },
                                    listView: {
                                        marginLeft: '5%',
                                        marginRight: '5%',
                                    },
                                    description: {
                                        fontSize: 16,
                                    }
                                }}
                                currentLocation={false}
                            />
                        </View>
                        <View style = {container}>
                            <ButtonBack buttonText = {'Atrás'}
                                        path = {this.props.previousScreen}/>
                            <NextButton buttonText = {this.props.buttonNext}
                                        path = {this.props.nextScreen}/>
                        </View>
                    </View>
            </View>
        );
    }
}

const styles ={
    viewStyle: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
    },
    viewStyle1: {
        flex:1,
        justifyContent: 'space-between'
    },
    vista1Style: {
        flex:1,
        marginTop: '15%'
    },
    container: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',

    },
}

