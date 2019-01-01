import React from 'react';
import {View, Alert, Text} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../../components/basicComponents/HeaderIcon";
import ButtonBack from '../../components/basicComponents/ButtonBack';
import CardModified from "../../components/CardModified";
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';


class ferValoracionsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.onStarPressed = this.onStarPressed.bind(this)
        this.state = {
            estrelles : [
                {id:0,marcada: false},
                {id:1,marcada: false},
                {id:2,marcada: false},
                {id:3,marcada: false},
                {id:4,marcada: false}
            ]
        }
    }
    
    onStarPressed(i){
        new_estrelles = this.state.estrelles;
        var y;
        for(y = 0; y < 5; y++){
            if(y <= i){
                new_estrelles[y].marcada = true;
            }
            else new_estrelles[y].marcada = false;
        }
        this.setState({estrelles: new_estrelles});
    }
    pintar_estrelles(){
            return this.state.estrelles.map((estrella)=> {
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

    pintarCard(){
        const activitatsTranslate= {
            art: {source: require('../../images/artPES2.jpg')},
            sports: {source: require('../../images/esportPES2.jpg')},
            culture: {source: require('../../images/culturaPES2.jpg')},
            trips: {source: require('../../images/excursionesPES2.jpg')},
            workshops: {source: require('../../images/talleresPES2.jpg')},
            leisure: {source: require('../../images/ocioPES3.jpg')}
        };
        /*if(this.props.iterador == this.props.activitats_trobades.length){
            return(
                <View style = {styles.viewbuitStyle}>
                    <Description textExpl = "No se encuentran más actividades"/>
                </View>
            )
        }*/
        //else {
            return(
                <View style = {styles.viewCardStarStyle}>
                    <View style = {styles.viewCard}>
                        <CardModified image = {activitatsTranslate['art'].source}
                                nom =  {'Clase pintura'}
                                ubicacio = {'Casal avis Eixample'}
                                dataIni = {'24/01/2018'}
                                dataFi = {'24/01/2018'}
                                valorar = {true}/>
                    </View>
                    <View style= {styles.iconview2Style}>
                        <View style = {styles.iconviewStyle}>
                            {this.pintar_estrelles()}
                        </View>
                    </View>
                    <View style = {styles.buttonviewStyle}>
                        <Ionicons name={'ios-information-circle-outline'} size={75} 
                            color= {APP_COLORS.color_back} />
                        <ButtonBack buttonText = {'Valorar'} colorBoto = {APP_COLORS.color_next}/>
                    </View>
                </View>
            ); 
        //}
    }

    render(){
        const {viewStyle} = styles;
        
        return(
            <View style = {viewStyle}>
                <HeaderIcon headerText = "Valorar Actividad"
                                iconName={ 'arrow-circle-left'}
                                colorName={ APP_COLORS.color_neutral}
                                size = {60}
                                textSize = {35}
                                path={() => Actions.veurevaloracions()}
                />
                <View style = {styles.descrView}>
                    <Text adjustsFontSizeToFit={true}  style = {styles.descrStyle}>Puntua la actividad del 1 al 5 con ayuda de las estrellas</Text>
                </View>
                {this.pintarCard()} 
            </View>         
        );
    }

}

const styles ={
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
        fontFamily: 'sans-serif-condensed',
        fontSize: 27,
        fontWeight: 'bold',
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
        height: '42%'
    }
}

export default ferValoracionsScreen;