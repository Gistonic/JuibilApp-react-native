import React from 'react';
import {Text, View,ImageBackground} from 'react-native';
import { Font } from 'expo';
import { Actions } from 'react-native-router-flux';
import {APP_COLORS} from "../../constants/colors";
import connect from "react-redux/es/connect/connect";
import Description from "../../components/basicComponents/Description";
import HeaderIcon from "../../components/basicComponents/HeaderIcon";
import ButtonBack from "../../components/basicComponents/ButtonBack";
import {fetchInteressos} from "../../actions/index";
import { FontAwesome } from '@expo/vector-icons';



class veureInteressosPerfilScreen extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentWillMount() {
        this.props.fetchInteressos()
    }
    
    dibuixarInteressos(num)
    {
        //el num es per distingir a quina columna aniran, la dreta es per tots aquells que tenen id parell i lesquerra pels ids imparells
        return this.props.interessos_info.map((totsID)=> {
            if((totsID.id %2) == num) {
                return  (<View key={totsID.id} style={styles.buttonStyle}>
                            {totsID.estat ? <ImageBackground source={totsID.icon} style={styles.imageStyle}/>:
                                            <ImageBackground source={totsID.iconBlancNegre} style={styles.imageStyle}/>}
                            {totsID.estat ? <View style={styles.viewIconStyle}>
                                                <Text style={styles.textStyle}>{totsID.nom}</Text>
                                                <FontAwesome name='check-square-o' size={25} color= {APP_COLORS.color_checked} style = {styles.iconStyle}/>
                                            </View>:
                                            <Text style={styles.textStyle}>{totsID.nom}</Text>}
                        </View>
                        );
            }
        });
    }

    render() {
        const {viewStyle,container1,container,containerColumna} = styles;
        return (
            
            <View style = {viewStyle}>
                <HeaderIcon headerText = {'Ver perfil'}
                    iconName={ 'home'}
                    colorName={ APP_COLORS.color_neutral}
                        size = {75}
                        textSize = {35}
                        path={() => Actions.home()}/>
                
                    <Description textExpl={'Tus intereses son:'}/>
                    <View style = {container}>
                        <View style = {containerColumna}>
                            {this.dibuixarInteressos(0)}
                        </View>
                        <View style = {containerColumna}>
                            {this.dibuixarInteressos(1)}
                        </View>
                    </View>

                    <View style = {container1}>
                    <ButtonBack buttonText = {'Finalizar'}
                                path = {() => Actions.modperfil({textExpl: 'Ver perfil', pathinteressos: () => Actions.veureinteressosperfil(), pathkm: () => Actions.veurekm(), fraseExpl: 'Que quieres ver de tu perfil?'})}
                                colorBoto = {APP_COLORS.color_header}/>

                    </View>
            </View>
            
        );
    }
  }
const styles ={
    iconStyle: {
        marginTop: '2%',
        marginStart: '5%'
    },
    container1: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '8%'
    },
    textStyle:{
        color: APP_COLORS.text_color,
        fontFamily: 'open-sans-bold',
        fontSize: 23,
        fontWeight: 'bold'
    },
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
    },
    container: {
        width: '100%',
        flex:1,
        flexDirection: 'row',
        marginTop: '5%'
    },
    viewIconStyle: {
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent: 'space-between'
    },
    imageStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: APP_COLORS.color_header,
    },
    buttonStyle:{
        justifyContent: 'center',
        alignItems: 'center', //horizontal
        height: '35.5%',
        width: '90%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '2%',
        marginStart: '5%',
        marginEnd: '5%',
    },
    containerColumna: {
        width: '50%',
        flexDirection: 'column'
    }
  }
const mapStateToProps = (state) => {
    return {
        interessos_info: state.interessosProfile.interessos_info
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchInteressos: ()=>dispatch(fetchInteressos())
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(veureInteressosPerfilScreen);

