import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import HeaderIcon from '../../components/basicComponents/HeaderIcon';
import Description from '../../components/basicComponents/Description';
import ButtonBack from '../../components/basicComponents/ButtonBack';
import connect from "react-redux/es/connect/connect";
import {Actions} from 'react-native-router-flux';




class veureKilometresScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {viewStyle, container, textStyle,viewkmStyle,containerPrincipal} = styles;
        return (
            <View style = {viewStyle}>
                <HeaderIcon headerText = {'Ver perfil'}
                iconName={ 'home'}
                colorName={ APP_COLORS.color_neutral}
                size = {75}
                textSize = {35}
                path={() => Actions.home()}/>
                
                <Description textExpl= {'Tu radio de kilómetros seleccionado es:'}/>

                <View style = {viewkmStyle}>
                <View style = {styles.circle} backgroundColor = {APP_COLORS.color_button_1}>
                    <Text style = {textStyle}>{this.props.km}</Text>
                </View>
                </View>

                <View style = {container}>
                    <ButtonBack buttonText = {'Finalizar'}
                        path = {() => Actions.modperfil({textExpl: 'Ver perfil', pathinteressos: () => Actions.veureinteressosperfil(), pathkm: () => Actions.veurekm(), fraseExpl: 'Que quieres ver de tu perfil?'})}
                        colorBoto = {APP_COLORS.color_header}/>
                </View>
            </View>   
        );
    }
}
  const styles ={
    viewkmStyle: {
        width: '100%', 
        height: '50%',
        alignContent: 'center',
        paddingTop: '20%',
        paddingLeft: '25%'
    },
    textStyle: {
        color: 'white',
       fontSize: 50,
       fontWeight: 'bold',
    },
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%', 
        height: '100%',
        alignContent: 'center'
    },
    circle:{
        width: 200,
        height: 200,
        borderRadius: 100,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "gray",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 2
    },
    containerPrincipal: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    container: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '8%'
    }
  }

  const mapStateToProps = (state) => {
    return {
        km: state.modifyPerfil.km
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchName: ()=>dispatch(fetchName())
    }
}

  export default connect (mapStateToProps,mapDispatchToProps)(veureKilometresScreen);