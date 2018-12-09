import React from 'react';
import {View, Alert, Text} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../components/basicComponents/HeaderIcon";
import CardModified from "../components/CardModified";
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import {fetchActivitats,changeIterador, changeBuscarActivityForm} from "../actions/index";
import Description from '../components/basicComponents/Description';
import { Constants, Location, Permissions } from 'expo';

class BuscarActivitatScreen extends React.Component {

    constructor(props){
        super(props);
        this._onPressDenegar = this._onPressDenegar.bind(this);
        this._onPressAcceptar = this._onPressAcceptar.bind(this);
        this.esTres = this.esTres.bind(this);
    }

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            console.log('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
        } else {
            this._getLocationAsync();
        }

        //this.props.fetchActivitats()

    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        this.props.changeBuscarActivityForm(JSON.stringify(location));
    };
    
    _onPressDenegar(){
        Alert.alert(
            'Denegar Actividad',
            'La actividad '+ this.props.activitats_trobades[this.props.iterador].nom +' se añadira a la lista de NO APUNTADAS.',
            [
              {text: 'OK', onPress: () => this.props.changeIterador()},
            ],
            { cancelable: false }
        );    
    }

    _onPressAcceptar(){
        Alert.alert(
            'Aceptar Actividad',
            'La actividad '+ this.props.activitats_trobades[this.props.iterador].nom +' se añadira a la lista de APUNTADAS.',
            [
              {text: 'OK', onPress: () => this.props.changeIterador()},
            ],
            { cancelable: false }
        );
    }
    
    esTres(){
        const activitatsTranslate= {
            art: {source: require('../images/artPES2.jpg')},
            sports: {source: require('../images/esportPES2.jpg')},
            culture: {source: require('../images/culturaPES2.jpg')},
            trips: {source: require('../images/excursionesPES2.jpg')},
            workshops: {source: require('../images/talleresPES2.jpg')},
            leisure: {source: require('../images/ocioPES3.jpg')}
        };
        if(this.props.iterador == this.props.activitats_trobades.length){
            return(
                <View style = {styles.viewbuitStyle}>
                    <Description textExpl = "No se encuentran más actividades"/>
                </View>
            )
        }
        else {
            return(
                <View>
                <View style = {styles.viewCard}>
                    <CardModified image = {activitatsTranslate[this.props.activitats_trobades[this.props.iterador].tipus].source}
                            nom =  {this.props.activitats_trobades[this.props.iterador].nom}
                            ubicacio = {this.props.activitats_trobades[this.props.iterador].ubicacio}
                            dataIni = {this.props.activitats_trobades[this.props.iterador].dataIni}
                            dataFi = {this.props.activitats_trobades[this.props.iterador].dataFi}
                            horaIni = {this.props.activitats_trobades[this.props.iterador].horaIni}
                            horaFi = {this.props.activitats_trobades[this.props.iterador].horaFi}/>
                </View>
                <View style={styles.footer}>
                <View style={styles.circle} backgroundColor = {APP_COLORS.color_header}>
                    <Ionicons name="md-close" size={70} color={APP_COLORS.color_neutral}
                    onPress = {this._onPressDenegar} />
                </View>
                <View style={styles.circle} backgroundColor = {APP_COLORS.color_back}>
                    <Ionicons name="md-information" size={70} color={APP_COLORS.color_neutral}/>
                </View>
                <View style={styles.circle} backgroundColor = "#125E38">
                    <Ionicons name="md-checkmark" size={70} color={APP_COLORS.color_neutral} 
                    onPress = {this._onPressAcceptar}/>
                </View>
            </View>
            </View>
            ); 
        }
    }

    render(){
        const {viewStyle} = styles;
        
        return(
            <View style = {viewStyle}>
                <HeaderIcon headerText = "Buscar Actividad"
                                iconName={ 'home'}
                                colorName={ APP_COLORS.color_neutral}
                                size = {75}
                                textSize = {35}
                                path={() => Actions.home()}
                />
                {this.esTres()} 
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
    viewbuitStyle:{
        alignItems: 'center',
        paddingTop: '50%'
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
        iterador: state.buscarActivity.iterador,
        location: state.buscarActivity.location,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchActivitats: ()=>dispatch(fetchActivitats()),
        changeIterador: ()=>dispatch(changeIterador()),
        changeBuscarActivityForm: (value)=> dispatch(changeBuscarActivityForm(value)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BuscarActivitatScreen)


