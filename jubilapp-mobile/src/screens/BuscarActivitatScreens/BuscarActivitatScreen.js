import React from 'react';
import {View, Alert, Text, TouchableOpacity} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../../components/basicComponents/HeaderIcon";
import CardModified from "../../components/CardModified";
import { Ionicons } from '@expo/vector-icons';
import {
    fetchActivitats,
    changeIterador,
    changeBuscarActivityForm,
    changeBuscarActivityFormProperty,
    attend,
    notAttend
} from "../../actions/index";
import Description from '../../components/basicComponents/Description';
import { Constants, Location, Permissions } from 'expo';
import Geocoder from 'react-native-geocoding';
import {MAPS_KEY} from "../../constants";

const date1 = new Date();
const initial_hour = date1.getHours();
const initial_minute = date1.getMinutes()

class BuscarActivitatScreen extends React.Component {

    constructor(props){
        super(props);
        this._onPressDenegar = this._onPressDenegar.bind(this);
        this._onPressAcceptar = this._onPressAcceptar.bind(this);
        this.esTres = this.esTres.bind(this);
    }
    componentWillMount() {
        /*if (Platform.OS === 'android' && !Constants.isDevice) {
            console.log('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
        } else {
            this._getLocationAsync();
        }*/
        let hour = 0;
        let minute = 0;
        console.log("dia avui", date1.getDate().toString(), date1.getMonth().toString(), date1.getFullYear().toString());
        console.log("dia triat", this.props.fromDate.day, this.props.fromDate.month, this.props.fromDate.year);

        if ((this.props.fromDate.day === date1.getDate()) && (this.props.fromDate.month === date1.getMonth()) && (this.props.fromDate.year === date1.getFullYear())) {
            hour = initial_hour;
            minute = initial_minute;
        }
        const stringISOfromDate = new Date(this.props.fromDate.year, this.props.fromDate.month, this.props.fromDate.day, hour, minute).toISOString();
        const stringISOtoDate = new Date(this.props.toDate.year, this.props.toDate.month, this.props.toDate.day).toISOString();
        Geocoder.init(MAPS_KEY.key, {language: 'es'});
        this.props.fetchActivitats(stringISOfromDate, stringISOtoDate);


    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        this.props.changeBuscarActivityForm(location);
    };
    getLocationfromCoords() {
        Geocoder.from({lat: this.props.activitats_trobades[this.props.iterador].latitude, lng: this.props.activitats_trobades[this.props.iterador].longitude})
            .then(json => {
                this.props.changeUbicacioActual(json.results[0].formatted_address);
            })
            .catch(error => console.warn(error));
    }
    
    _onPressDenegar(){
        Alert.alert(
            'Denegar Actividad',
            'La actividad '+ this.props.activitats_trobades[this.props.iterador].name +' se añadira a la lista de NO APUNTADAS.',
            [
                {text: 'Cancelar'},
                {text: 'OK', onPress: () => this.props.changeIterador()},
            ],
            { cancelable: false }
        );
        this.props.notAttend(this.props.activitats_trobades[this.props.iterador].id);
    }


    _onPressAcceptar(){
        Alert.alert(
            'Aceptar Actividad',
            'La actividad '+ this.props.activitats_trobades[this.props.iterador].name +' se añadira a la lista de APUNTADAS.',
            [
                {text: 'Cancelar'},
                {text: 'OK', onPress: () => this.props.changeIterador()},
            ],
            { cancelable: false }
        );
        this.props.attend(this.props.activitats_trobades[this.props.iterador].id);
    }
    
    esTres(){
        const activitatsTranslate= {
            art: {source: require('../../images/artPES2.jpg')},
            sports: {source: require('../../images/esportPES2.jpg')},
            culture: {source: require('../../images/culturaPES2.jpg')},
            trips: {source: require('../../images/excursionesPES2.jpg')},
            workshops: {source: require('../../images/talleresPES2.jpg')},
            leisure: {source: require('../../images/ocioPES3.jpg')}
        };
        if(this.props.iterador === this.props.activitats_trobades.length){
            return(
                <View style = {styles.viewbuitStyle}>
                    <View style = {styles.paddingViewStyle}>
                        <Description textExpl = "No se encuentran más actividades"/>
                    </View>
                    <Ionicons name='ios-refresh' size={60} color={APP_COLORS.color_neutral}/>
                </View>
            )
        }
        else {
            this.getLocationfromCoords();
            return(
                <View style = {{width: '100%', height: '100%', paddingBottom: '7%'}}>
                    <View style = {styles.viewCard}>
                        <CardModified image = {activitatsTranslate[this.props.activitats_trobades[this.props.iterador].type].source}
                                nom =  {this.props.activitats_trobades[this.props.iterador].name}
                                ubicacio = {this.props.ubicacioactual}
                                dataIni = {this.props.activitats_trobades[this.props.iterador].startDate}
                                dataFi = {this.props.activitats_trobades[this.props.iterador].endDate}
                                horaIni = {this.props.activitats_trobades[this.props.iterador].startDate}
                                horaFi = {this.props.activitats_trobades[this.props.iterador].endDate}
                                preu = {this.props.activitats_trobades[this.props.iterador].price}
                                valorar = {false}
                                      margin = '3%'
                                fontsizeTitleStyle = {27}
                                fontsizeTextStyle = {21}/>
                    </View>
                    <View style={styles.footer}>
                            <View style={styles.circle} backgroundColor = {APP_COLORS.color_header}>
                                <TouchableOpacity onPress = {this._onPressDenegar} style = {{width:'100%', height: '100%', alignItems: 'center'}}>
                                    <Ionicons name="md-close" size={60} color={APP_COLORS.color_neutral}
                                    onPress = {this._onPressDenegar} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.circle} backgroundColor = {APP_COLORS.color_back} >
                                <TouchableOpacity onPress={() => {
                                    Actions.info({id: this.props.activitats_trobades[this.props.iterador].id, screen: "buscar"})
                                }} style = {{width:'100%', height: '100%', alignItems: 'center'}}>
                                    <Ionicons name="md-information" size={60}
                                              color={APP_COLORS.color_neutral}
                                              onPress={() => {
                                                  Actions.info({id: this.props.activitats_trobades[this.props.iterador].id, screen: "buscar"})
                                              }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View backgroundColor = {APP_COLORS.color_checked} style={styles.circle}>
                                <TouchableOpacity onPress = {this._onPressAcceptar} style = {{width:'100%', height: '100%', alignItems: 'center'}}>
                                    <Ionicons name="md-checkmark" size={60} color={APP_COLORS.color_neutral}
                                    onPress = {this._onPressAcceptar}/>
                                </TouchableOpacity>
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
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    paddingViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '20%',
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
        marginBottom: '15%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '5%'
    },
    activitatStyle: {
        paddingTop: '5%'
    },
    iconStyle: {
        paddingLeft: '2%'
    },
    titleStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 27,
        color:APP_COLORS.text_color
    },
    cardStyle: {
        height: '100%',
        borderRadius: 15
    },
    textStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        color:APP_COLORS.text_color
    },
    imageStyle: {
        height: '42%'
    }
}

const mapStateToProps = (state) => {
    return {
        activitats_trobades: state.buscarActivity.activitats_trobades,
        iterador: state.buscarActivity.iterador,
        location: state.buscarActivity.location,
        fromDate: state.buscarActivity.fromDate,
        toDate: state.buscarActivity.toDate,
        ubicacioactual: state.buscarActivity.ubicacioactual,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchActivitats: (stringISOfromDate, stringISOtoDate)=>dispatch(fetchActivitats(stringISOfromDate, stringISOtoDate)),
        changeIterador: ()=>dispatch(changeIterador()),
        changeBuscarActivityForm: (value)=> dispatch(changeBuscarActivityForm(value)),
        changeUbicacioActual: (value) => dispatch(changeBuscarActivityFormProperty("ubicacioactual",value)),
        attend: (value) => dispatch(attend(value)),
        notAttend: (value) => dispatch(notAttend(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BuscarActivitatScreen)


