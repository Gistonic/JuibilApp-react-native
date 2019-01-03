import React from 'react';
import {View, Text, Alert} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../../components/basicComponents/HeaderIcon";
import ButtonBack from '../../components/basicComponents/ButtonBack';
import Description from '../../components/basicComponents/Description';
import CardModified from "../../components/CardModified";
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import {fetchActivitatsValorar,changeStar,changeIterator,reiniciarStars} from '../../actions/index';

class ferValoracionsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.onValorarPressed = this.onValorarPressed.bind(this);
    }

    componentWillMount(){
        this.props.fetchActivitatsValorar();
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

    pintarCard(){
        const activitatsTranslate= {
            art: {id:1,source: require('../../images/artPES2.jpg')},
            sports: {source: require('../../images/esportPES2.jpg')},
            culture: {source: require('../../images/culturaPES2.jpg')},
            trips: {source: require('../../images/excursionesPES2.jpg')},
            workshops: {source: require('../../images/talleresPES2.jpg')},
            leisure: {source: require('../../images/ocioPES3.jpg')}
        };
        if(this.props.iterador == this.props.activitats_valorar.length){
            return(
                <View style = {styles.viewbuitStyle}>
                    <Description textExpl = "No hay más actividades pendientes de valorar"/>
                </View>
            )
        }
        else{
            return(
                <View>
                    <View style = {styles.descrView}>
                        <Text adjustsFontSizeToFit={true}  style = {styles.descrStyle}>Puntua la actividad del 1 al 5 con ayuda de las estrellas</Text>
                    </View>
                    <View style = {styles.viewCardStarStyle}>
                        <View style = {styles.viewCard}>
                            <CardModified image = {activitatsTranslate[this.props.activitats_valorar[this.props.iterador].tipus].source}
                                            nom =  {this.props.activitats_valorar[this.props.iterador].nom}
                                            ubicacio = {this.props.activitats_valorar[this.props.iterador].ubicacio}
                                            dataIni = {this.props.activitats_valorar[this.props.iterador].dataIni}
                                            dataFi = {this.props.activitats_valorar[this.props.iterador].dataFi}
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
                            <ButtonBack buttonText = {'Valorar'} colorBoto = {APP_COLORS.color_next}
                                    path = {this.onValorarPressed}/>
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
                <HeaderIcon headerText = "Valorar Actividad"
                                iconName={ 'arrow-circle-left'}
                                colorName={ APP_COLORS.color_neutral}
                                size = {60}
                                textSize = {35}
                                path={() => Actions.veurevaloracions()}
                />
                
                {this.pintarCard()} 
            </View>         
        );
    }

}

const styles ={
    viewbuitStyle: {
        alignItems: 'center',
        paddingTop: '50%'
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
        fontSize: 27,
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
        num_estrelles: state.valorarActivity.num_estrelles
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchActivitatsValorar: ()=>dispatch(fetchActivitatsValorar()),
        changeStar: (i)=>dispatch(changeStar(i)),
        changeIterator: ()=>dispatch(changeIterator()),
        reiniciarStars: ()=>dispatch(reiniciarStars())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ferValoracionsScreen)

/*<CardModified image = {activitatsTranslate[this.props.activitats_trobades[this.props.iterador].type].source}
                                nom =  {this.props.activitats_trobades[this.props.iterador].name}
                                ubicacio = {this.props.ubicacioactual}
                                dataIni = {this.props.activitats_trobades[this.props.iterador].startDate}
                                dataFi = {this.props.activitats_trobades[this.props.iterador].endDate}
                                valorar = {false}/>*/