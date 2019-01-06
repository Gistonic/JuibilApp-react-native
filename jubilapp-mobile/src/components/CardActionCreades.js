import {APP_COLORS} from "../constants/colors";
import {View} from 'react-native';
import React from "react";
import ButtonBack from "./basicComponents/ButtonBack";
import {Actions} from "react-native-router-flux";
import {EvilIcons} from "@expo/vector-icons";


class CardActionCreades extends React.Component {
    constructor(props) {
        super(props)
        this._onPress = this._onPress.bind(this)


    }
    _onPress() {
        this.props.deleteAct(this.props.id);
        Actions.llistesActs();
    }
    render() {
        return (
            <View style={styles.container}
                  separator={true}
                  inColumn={false}>
                <ButtonBack buttonText="Atrás"
                            colorBoto= {APP_COLORS.color_back}
                            path={() => Actions.activitatlist({url: "/own", headerText: "Creadas"})}
                />
                <EvilIcons name='pencil' size={52} color={APP_COLORS.color_next}
                           style={[styles.iconStyle, {marginLeft: '7%'}]} onPress={() => {
                    Actions.modificaractivitat()
                }}/>
                <EvilIcons name='trash' size={52} color={APP_COLORS.color_header}
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
        paddingTop: '4%',
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

export default CardActionCreades;