import React from 'react';

import {View, Text,Alert} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import {EvilIcons} from "@expo/vector-icons";
import {Actions} from "react-native-router-flux";

class ActivitatItem extends React.Component {
    constructor(props) {
        super(props)
        this._onPress = this._onPress.bind(this)


    }
    _onPress() {
        Alert.alert(
            'Eliminar actividad',
            'Seguro que desea eliminar la actividad '+this.props.nomActivitat+'?',
            [
                {text: 'No'},
                {text: 'Sí', onPress: () => this.props.deleteActivity(this.props.id)},
            ],
            { cancelable: false }
        );    
        Actions.home();
    }
    render ()
    {
        return (
            <View style={styles.viewStyle}>
                <View>
                    <Text style={styles.textStyle}>{this.props.nomActivitat}</Text>
                </View>
                <View style={styles.viewIconStyle}>
                    <EvilIcons name='eye' size={60} color={APP_COLORS.color_button_1} style={styles.iconStyle}
                               onPress={() => {
                                   Actions.info({id: this.props.id, screen: this.props.screen})
                               }}/>
                    <EvilIcons name='pencil' size={60} color={APP_COLORS.color_next} style={styles.iconStyle}
                               onPress={() => {
                                   Actions.modificaractivitat()
                               }}/>
                    <EvilIcons name='trash' size={60} color={APP_COLORS.color_header} style={styles.iconStyle}
                               onPress = {this._onPress}/>
                </View>
            </View>
        );
    }
};

const styles = {
    viewStyle: {

        width: '90%',
        paddingRight: '5%',
        paddingTop: '5%',
        borderColor: APP_COLORS.color_button_1,
        borderWidth: 2,
        marginTop: '5%',
        marginStart:'5%',
        marginEnd:'5%',
        borderRadius: 10
    },
    viewIconStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginStart:30,
        marginEnd:30,
        marginBottom:20,
        marginTop: 20


    },

    iconStyle: {
        backgroundColor: '#D9D9D9',

        borderRadius: 10

    },
    textStyle: {
        paddingLeft: '8%',
        paddingRight: '8%',
        backgroundColor: APP_COLORS.color_neutral,
        color: APP_COLORS.text_color,
        fontFamily: 'sans-serif-condensed',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
}

export default ActivitatItem;

