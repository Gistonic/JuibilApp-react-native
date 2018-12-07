import React from 'react';
import {View, Image, Text} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../components/basicComponents/HeaderIcon";
import CardModified from "../components/CardModified";
import { fetchActivities , deleteActivity} from "../actions/ListActivitiesActions";
import { Card } from 'react-native-elements';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

class BuscarActivitatScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activitats: [
                {
                    id:0,
                    nom: "Classe de Pintura",
                    ubicacio: "Casal avis les Corts",
                    dataIni: "22/12/2018",
                    dataFi: "22/12/2018",
                    horaIni: "17:30",
                    horaFi: "19:00",
                    descripcio: "Classe de pintura per aprendre els colors.",
                    tipus: "art"
                }
            ]
        }
    }

    render(){
        const {texticonStyle,footer,circle,viewStyle,cardStyle,titleStyle,viewCard,textStyle,imageStyle,iconStyle} = styles;
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
                        <CardModified image = {require('../images/artPES2.jpg')}
                                        nom =  {this.state.activitats[0].nom}
                                        ubicacio = {this.state.activitats[0].ubicacio}
                                        dataIni = {this.state.activitats[0].dataIni}
                                        dataFi = {this.state.activitats[0].dataFi}
                                        horaIni = {this.state.activitats[0].horaIni}
                                        horaFi = {this.state.activitats[0].horaFi}
                        />
                    </View>
                    <View style={footer}>
                        <View style={circle} backgroundColor = {APP_COLORS.color_header}>
                            <Ionicons name="md-close" size={70} color={APP_COLORS.color_neutral} />
                        </View>
                        <View style={circle} backgroundColor = {APP_COLORS.color_back}>
                            <Ionicons name="md-information" size={70} color={APP_COLORS.color_neutral}/>
                        </View>
                        <View style={circle} backgroundColor = "#125E38">
                            <Ionicons name="md-checkmark" size={70} color={APP_COLORS.color_neutral} />
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

export default BuscarActivitatScreen;
