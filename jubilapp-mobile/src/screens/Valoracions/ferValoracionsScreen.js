import React from 'react';
import {View, Text, Alert, ActivityIndicator} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../../components/basicComponents/HeaderIcon";
import ButtonBack from '../../components/basicComponents/ButtonBack';
import Description from '../../components/basicComponents/Description';
import CardModified from "../../components/CardModified";
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import {changePropietat,fetchActivitatsValorar,changeStar,changeIterator,reiniciarStars,valorarActivitat} from '../../actions/index';

import { Constants, Location, Permissions } from 'expo';
import Geocoder from 'react-native-geocoding';
import {MAPS_KEY} from "../../constants";
class ferValoracionsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.onValorarPressed = this.onValorarPressed.bind(this);
    }

    componentWillMount(){
        this.props.fetchActivitatsValorar();
        Geocoder.init(MAPS_KEY.key, {language: 'es'});
    }
    onStarPressed(i){
        this.props.changeStar(i);
    }
    onValorarPressed(){
        if(this.props.num_estrelles == 0){
            Alert.alert(
                'Valorar Actividad',
                'Se tiene que valorar la actividad con un mínimo de 1 estrella',
                [
                    {text: 'OK'}
                ],
                { cancelable: false}
            );
        }
        else{
            Alert.alert(
                'Valorar Actividad',
                'La actividad '+ this.props.activitats_valorar[this.props.iterador].nom +' se valorará con '+this.props.num_estrelles+' estrellas.',
                [
                    {text: 'Cancelar'},
                    {text: 'OK', onPress: () => {this.props.changeIterator();
                                                this.props.reiniciarStars();
                                                }
                    },
                ],
                { cancelable: false }
            );
            const rating = {rating: this.props.num_estrelles}
            this.props.valorarActivitat(this.props.activitats_valorar[this.props.iterador].id, rating);
        }
        
    }
    pintar_estrelles(){
            return this.props.estrelles.map((estrella)=> {
                if(!estrella.marcada){
                    return(
                        <FontAwesome key = {estrella.id} name='star' size={65} color= {APP_COLORS.text_color}
                                    onPress = {this.onStarPressed.bind(this,estrella.id)}/>
                    );
                }
                else{
                    return(
                        <FontAwesome key = {estrella.id} name='star' size={65} color= {APP_COLORS.color_back}
                                    onPress = {this.onStarPressed.bind(this,estrella.id)}/>
                    );  
                }
            });      
    }

    getLocationfromCoords() {
        Geocoder.from({lat: this.props.activitats_valorar[this.props.iterador].latitude, lng: this.props.activitats_valorar[this.props.iterador].longitude})
            .then(json => {
                this.props.changePropietat(json.results[0].formatted_address);
            })
            .catch(error => console.warn(error));
    }

    pintarCard(){
        const activitatsTranslate= {
            art: {id:1,source: require('../../images/artPES2.jpg')},
            sports: {source: require('../../images/esportPES2.jpg')},
            culture: {source: require('../../images/culturaPES2.jpg')},
            trips: {source: require('../../images/excursionesPES2.jpg')},
            workshops: {source: require('../../images/talleresPES2.jpg')},
            leisure: {source: require('../../images/ocioPES3.jpg')}
        };
        if (this.props.isFetching) {
            return (
                <View style = {{justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%'}}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
        else{
            if(this.props.iterador == this.props.activitats_valorar.length){
                return(
                    <View style = {styles.viewbuitStyle}>
                        <Description textExpl = "No hay más actividades pendientes de valorar"/>
                    </View>
                )
            }
            else{
                this.getLocationfromCoords();
                return(
                    <View style = {{width:'100%', height:'100%', paddingBottom: '7%',paddingTop:'5%'}}>
                        <View style = {styles.descrView}>
                            <Text adjustsFontSizeToFit={true}  style = {styles.descrStyle}>Puntua la actividad del 1 al 5 con ayuda de las estrellas</Text>
                        </View>
                        <View style = {styles.viewCardStarStyle}>
                            <View style = {styles.viewCard}>
                                <CardModified image = {activitatsTranslate[this.props.activitats_valorar[this.props.iterador].type].source}
                                                nom =  {this.props.activitats_valorar[this.props.iterador].name}
                                                ubicacio = {this.props.ubicacioActual}
                                                dataIni = {this.props.activitats_valorar[this.props.iterador].startDate}
                                                dataFi = {this.props.activitats_valorar[this.props.iterador].endDate}
                                                valorar = {true}
                                                fontsizeTitleStyle = {25}
                                                fontsizeTextStyle = {23}/>
                            </View>
                            <View style= {styles.iconview2Style}>
                                <View style = {styles.iconviewStyle}>
                                    {this.pintar_estrelles()}
                                </View>
                            </View>
                            <View style = {styles.buttonviewStyle}>
                                <Ionicons name={'ios-information-circle-outline'} size={75} 
                                    color= {APP_COLORS.color_back} 
                                    onPress={() => {
                                        Actions.info({id: this.props.activitats_valorar[this.props.iterador].id, screen: "buscar"})
                                    }}/>
                                <ButtonBack buttonText = {'Valorar'} colorBoto = {APP_COLORS.color_next}
                                        path = {this.onValorarPressed}/>
                            </View>
                        </View>
                    </View>
                );
            }
        }
        
        
    }

    render(){
        const {viewStyle} = styles;
        
        return(
            <View style = {viewStyle}>
                <HeaderIcon headerText = "Valorar Actividad"
                                iconName={ 'arrow-left'}
                                colorName={ APP_COLORS.color_neutral}
                                size = {60}
                                textSize = {31}
                                isEvilType = {true}
                                path={() => Actions.veurevaloracions()}
                />
                
                {this.pintarCard()} 
            </View>         
        );
    }

}

const styles ={
    viewbuitStyle:{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '20%',
    },
    iconview2Style: {
        paddingLeft: '8%',
        paddingRight: '8%',
        margin: '2%',
        backgroundColor: APP_COLORS.color_neutral,
    },
    descrView: {
        paddingRight: '5%',
        paddingLeft:'5%'
    },
    buttonviewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '15%'
    },
    iconviewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewCardStarStyle: {
        paddingTop:'1%',
        margin:'1%',
        backgroundColor: APP_COLORS.color_neutral,
    },
    descrStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 25,
        color:APP_COLORS.text_color,
        textAlignVertical: "center",
        textAlign: "center"
    },
    viewCard: { 
        paddingTop: '1%',
        height: '58%'
        
    },
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%'
    },
    footer: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
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
        fontFamily: 'open-sans',
        fontSize: 21,
        color:APP_COLORS.text_color
    },
    imageStyle: {
        height: '42%'
    }
}
const mapStateToProps = (state) => {
    return {
        activitats_valorar: state.valorarActivity.activitats_valorar,
        estrelles: state.valorarActivity.estrelles,
        iterador: state.valorarActivity.iterador,
        num_estrelles: state.valorarActivity.num_estrelles,
        isFetching: state.valorarActivity.isFetching,
        ubicacioActual:state.valorarActivity.ubicacioActual
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchActivitatsValorar: ()=>dispatch(fetchActivitatsValorar()),
        changeStar: (i)=>dispatch(changeStar(i)),
        changeIterator: ()=>dispatch(changeIterator()),
        reiniciarStars: ()=>dispatch(reiniciarStars()),
        valorarActivitat: (id,rating)=>dispatch(valorarActivitat(id,rating)),
        changePropietat: (a)=>dispatch(changePropietat(a))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ferValoracionsScreen)

/*<CardModified image = {activitatsTranslate[this.props.activitats_trobades[this.props.iterador].type].source}
                                nom =  {this.props.activitats_trobades[this.props.iterador].name}
                                ubicacio = {this.props.ubicacioactual}
                                dataIni = {this.props.activitats_trobades[this.props.iterador].startDate}
                                dataFi = {this.props.activitats_trobades[this.props.iterador].endDate}
                                valorar = {false}/>*/