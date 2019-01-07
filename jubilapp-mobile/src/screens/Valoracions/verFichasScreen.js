import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import HeaderIcon from '../../components/basicComponents/HeaderIcon';
import Description from '../../components/basicComponents/Description';
import ButtonBack from '../../components/basicComponents/ButtonBack';
import connect from "react-redux/es/connect/connect";
import {Actions} from 'react-native-router-flux';
import ProgressCircle from 'react-native-progress-circle'
import { Ionicons } from '@expo/vector-icons';
import { fetchFichas} from "../../actions";

class verFichasScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchFichas();
    }

    render() {
        const {viewStyle, container, explStyle,iconStyle, progressCircleStyle} = styles;
        const {isFetching}=this.props;
        const fichas= this.props.fichas ? this.props.fichas:0
        const info = "Tienes "+fichas+" fichas!";

        return (
            <View style = {viewStyle}>
                <HeaderIcon headerText = {'Ver fichas'}
                iconName={ 'home'}
                colorName={ APP_COLORS.color_neutral}
                size = {75}
                textSize = {35}
                path={() => Actions.home()}/>
                
                
                
                <Description textExpl= {info}/>

                <View style={progressCircleStyle }>
                    <ProgressCircle
                        percent={(fichas * 100)/20}
                        radius={70}
                        borderWidth={10}
                        color={APP_COLORS.color_header}
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 50 ,
                        color: APP_COLORS.color_next}}>{'5 €'}</Text>
                    </ProgressCircle>

                </View>


                <Description style={explStyle} textExpl= {'Quieres más información sobre como funcionan las fichas?'}/>
                <Ionicons style = {iconStyle} name={'ios-information-circle-outline'} size={75} 
                            color= {APP_COLORS.color_button_1} onPress = {() => {Actions.verinfofichas()}}/>
                <View style = {container}>
                    <ButtonBack buttonText = {'Finalizar'}
                        path = {() => Actions.veurevaloracions()}
                        colorBoto = {APP_COLORS.color_header}/>
                </View>
            </View>   
        );
    }
}
  const styles ={
    iconStyle: {
        paddingLeft: '41%'
    },
    viewkmStyle: {
        width: '100%', 
        height: '25%',
        alignContent: 'center',
        paddingTop: '5%',
        paddingLeft: '37%',
        paddingBottom: '1%'
    },
      progressCircleStyle:{
        alignItems:'center'
      },

    textStyle: {
        color: 'white',
       fontSize: 50,
       fontWeight: 'bold',
    },
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%', 
        height: '100%'
    },
    circle:{
        width: 100,
        height: 100,
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
    },
      explStyle: {
          marginTop: '5%',
          marginLeft: '5%',
          marginRight: '5%',
          marginBottom: '3%'
      }
  }

const mapStateToProps = (state) => {
    return {
        fichas: state._fichas.fichas,
        isFetching: state._fichas.isFetching
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchFichas: ()=>dispatch(fetchFichas()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (verFichasScreen);