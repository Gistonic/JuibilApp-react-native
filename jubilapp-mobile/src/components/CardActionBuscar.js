import {APP_COLORS} from "../constants/colors";
import {View} from 'react-native';
import React from "react";
import ButtonBack from "./basicComponents/ButtonBack";
import {Actions} from "react-native-router-flux";
import {EvilIcons} from "@expo/vector-icons";


class CardActionBuscar extends React.Component {
    constructor(props) {
        super(props);
        this._onPressN = this._onPressN.bind(this);
        this._onPressY = this._onPressY.bind(this);


    }
    _onPressN() {
        this.props.notAttend(this.props.id);
        Actions.buscar();
    }
    _onPressY() {
        this.props.attend(this.props.id);
        Actions.buscar();
    }
    render() {
        return (
            <View style={styles.container}
                  separator={true}
                  inColumn={false}>
                <ButtonBack buttonText="Atrás"
                            colorBoto= {APP_COLORS.color_back}
                            path={() => Actions.buscar()}
                />
                <EvilIcons name='check' size={52} color={APP_COLORS.color_next}
                           style={[styles.iconStyle, {marginLeft: '7%'}]}
                           onPress = {this._onPressY}/>
                <EvilIcons name='close-o' size={52} color={APP_COLORS.color_header}
                           style={[styles.iconStyle, {marginLeft: '0%'}]}
                           onPress = {this._onPressN}/>
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
        paddingTop: '5%',
        borderTopColor: '#E9E9E9',
        borderTopWidth: 1,
    },
    iconStyle: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        marginRight: '10%',
        overflow: "hidden",
    },
}

export default CardActionBuscar;