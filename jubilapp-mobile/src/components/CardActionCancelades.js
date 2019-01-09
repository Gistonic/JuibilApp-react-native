import {APP_COLORS} from "../constants/colors";
import {View, Alert} from 'react-native';
import React from "react";
import ButtonBack from "./basicComponents/ButtonBack";
import {Actions} from "react-native-router-flux";
import {EvilIcons} from "@expo/vector-icons";


class CardActionCancelades extends React.Component {
    constructor(props) {
        super(props)
        this._onPress = this._onPress.bind(this)


    }
    _onPress() {
        Alert.alert(
            'Aceptar Actividad',
            'La actividad '+this.props.nom+' se añadira a la lista de APUNTADAS.',
            [
                {text: 'No'},
                {text: 'Sí', onPress: () => {this.props.attend(this.props.id, () => Actions.llistesActs());}},
            ],
            { cancelable: false }
        );
    }
    render() {
        return (
            <View style={styles.container}
                  separator={true}
                  inColumn={false}>
                <ButtonBack buttonText="Atrás"
                            colorBoto= {APP_COLORS.color_back}
                            path={() => Actions.activitatlist({url: "/attending", att: "no", headerText: "Canceladas"})}
                />
                <EvilIcons name='check' size={52} color={APP_COLORS.color_next}
                           style={[styles.iconStyle, {marginLeft: '0%'}]}
                           onPress = {this._onPress}/>
            </View>
        )
    }
};

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    iconStyle: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginRight: '15%',
        overflow: "hidden",
    },
}

export default CardActionCancelades;