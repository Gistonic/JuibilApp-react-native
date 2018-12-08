import React from 'react';
import {View, Image, Text, Alert} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../components/basicComponents/HeaderIcon";
import CardModified from "../components/CardModified";
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import {fetchActivitats,changeIterador} from "../actions/index";

class BuscarActivitatScreen extends React.Component {

    constructor(props){
        super(props);
        this._onPressDenegar = this._onPressDenegar.bind(this);
        this._onPressAcceptar = this._onPressAcceptar.bind(this);
    }

    _onPressDenegar(){
        Alert.alert(
            'Denegar Actividad',
            'La actividad se añadira a la lista de NO APUNTADAS.',
            [
              {text: 'OK', onPress: () => this.props.changeIterador()},
            ],
            { cancelable: false }
        );    
    }

    _onPressAcceptar(){
        Alert.alert(
            'Aceptar Actividad',
            'La actividad se añadira a la lista de APUNTADAS.',
            [
              {text: 'OK', onPress: () => this.props.changeIterador()},
            ],
            { cancelable: false }
        );
    }
    

    render(){
        const {texticonStyle,footer,circle,viewStyle,cardStyle,titleStyle,viewCard,textStyle,imageStyle,iconStyle} = styles;
        const activitatsTranslate= {
            art: {source: require('../images/artPES2.jpg')},
            sports: {source: require('../images/esportPES2.jpg')},
            culture: {source: require('../images/culturaPES2.jpg')},
            trips: {source: require('../images/excursionesPES2.jpg')},
            workshops: {source: require('../images/talleresPES2.jpg')},
            leisure: {source: require('../images/ocioPES3.jpg')}
        }
        {console.log("HOLAAAAA", this.props.activitats_trobades);}
        {console.log("HOLAA1",this.props.iterador)}
        return(
            <View style = {viewStyle}>
                <HeaderIcon headerText = "Buscar Actividad"
                                iconName={ 'home'}
                                colorName={ APP_COLORS.color_neutral}
                                size = {75}
                                textSize = {35}
                                path={() => Actions.home()}
                />
                <View>
                    <View style = {viewCard}>
                        <CardModified image = {activitatsTranslate[this.props.activitats_trobades[this.props.iterador].tipus].source}
                                        nom =  {this.props.activitats_trobades[this.props.iterador].nom}
                                        ubicacio = {this.props.activitats_trobades[this.props.iterador].ubicacio}
                                        dataIni = {this.props.activitats_trobades[this.props.iterador].dataIni}
                                        dataFi = {this.props.activitats_trobades[this.props.iterador].dataFi}
                                        horaIni = {this.props.activitats_trobades[this.props.iterador].horaIni}
                                        horaFi = {this.props.activitats_trobades[this.props.iterador].horaFi}
                        />
                    </View>
                    <View style={footer}>
                        <View style={circle} backgroundColor = {APP_COLORS.color_header}>
                            <Ionicons name="md-close" size={70} color={APP_COLORS.color_neutral}
                            onPress = {this._onPressDenegar} />
                        </View>
                        <View style={circle} backgroundColor = {APP_COLORS.color_back}>
                            <Ionicons name="md-information" size={70} color={APP_COLORS.color_neutral}/>
                        </View>
                        <View style={circle} backgroundColor = "#125E38">
                            <Ionicons name="md-checkmark" size={70} color={APP_COLORS.color_neutral} 
                            onPress = {this._onPressAcceptar}/>
                        </View>
                    </View>
                </View>  
            </View>         
        );
    }

}

const styles ={
    viewCard: { 
        paddingTop: '5%',
        backgroundColor: APP_COLORS.color_neutral,
        height: '72%'
    },
    texticonStyle: {
        flexDirection: 'row',
        margin: '2%'
    },
    circle:{
        width: 75,
        height: 75,
        borderRadius: 32,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "gray",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 2
    },
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
    },
    container: {
        width: '40%',
        height: '40%'
    },
    name: {
        color: "black",
        fontSize: 32
    },
    footer: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '5%'
    },
    overlay: {
        flex:1,
        justifyContent: "space-between",
        padding:16
    },
    activitatStyle: {
        paddingTop: '5%'
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

const mapStateToProps = (state) => {
    return {
        activitats_trobades: state.buscarActivity.activitats_trobades,
        iterador: state.buscarActivity.iterador
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchActivitats: ()=>dispatch(fetchActivitats()),
        changeIterador: ()=>dispatch(changeIterador())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BuscarActivitatScreen)

