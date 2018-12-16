import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import HeaderIcon from '../../components/basicComponents/HeaderIcon';
import Description from '../../components/basicComponents/Description';
import NextButton from '../../components/basicComponents/NextButton';
import ButtonBack from '../../components/basicComponents/ButtonBack';
import Numbers from '../../components/basicComponents/Numbers';
import connect from "react-redux/es/connect/connect";
import {fetchKilometres,changeKilometresProfileProperty,kilometresProfile} from "../../actions/index";
import {Actions} from 'react-native-router-flux';




class KilometreScreen extends React.Component {

    constructor(props) {
        super(props)
        this.onNextPressed = this.onNextPressed.bind(this)


    }

    componentWillMount() {
        this.props.fetchKilometres()
    }

    selected(num){
        if(num == this.props.km_selected) return true;
        else return false;
    }

    dibuixarKilometres(num){
        return this.props.array_codi.map((totsID)=> {
            if((totsID.id %2) == num) {
                return  (
                    <TouchableOpacity key = {totsID.id} style = {styles.tStyle}
                            onPress={() => {this.props.changeEstat(totsID.num);}}>
                        <Numbers key = {totsID.id} buttonText = {totsID.num}
                        backcolor = {this.selected(totsID.num) ? APP_COLORS.color_button_1 : APP_COLORS.text_color}></Numbers>
                    </TouchableOpacity>
                );
            }
        });
    }

    onNextPressed(){
        this.props.kilometresProfile(this.props.km_selected);
    }

    render() {
        const {viewStyle, container, container2,containerColumna,containerPrincipal} = styles;
        return (
            <View style = {viewStyle}>
              <HeaderIcon headerText = {'Modificar kilometros'}
                    iconName={ 'home'}
                    colorName={ APP_COLORS.color_neutral}
                        size = {75}
                        textSize = {35}
                        path={() => Actions.home()}
                        
                    />
              <Description textExpl= {'Escoge el radio de kilómetros'}/>
              
              <View style = {containerPrincipal}>
                        <View style = {containerColumna}>
                            {this.dibuixarKilometres(0)}
                        </View>
                        <View style = {containerColumna}>
                            {this.dibuixarKilometres(1)}
                        </View>
                </View>
              <View style = {container}>
                <ButtonBack buttonText = {'Atras'}
                            path = {() => Actions.modperfil()}/>
                <NextButton buttonText = {'Aceptar'}
                            path = {() => this.onNextPressed()}/>
              </View>
            </View>   
        );
    }
  }
  const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%', 
        height: '100%',
        alignContent: 'center'
    },
    tStyle: {
        width: 130,
        height: 130,
        paddingLeft: '10%',
    },
    containerColumna: {
        width: '50%',
        flexDirection: 'column'
    },
    containerPrincipal: {
        width: '100%',
        flex:1,
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '7%'
    },
    container: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '8%'
    },
    container2: {
        flex: 2,
        padding: 20,
        paddingLeft: '10%',
        paddingRight: '20%',
        flexDirection: 'row',
        justifyContent:'space-between'
    }
  }

const mapStateToProps = (state) => {
    return {
        km_selected: state.kilometresProfile.km_selected,
        array_codi:  state.kilometresProfile.array_codi
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeEstat: (km_num)=>dispatch(changeKilometresProfileProperty(km_num)),
        kilometresProfile: (km_num)=> dispatch(kilometresProfile(km_num)),
        fetchKilometres: ()=>dispatch(fetchKilometres())
    }
}

  export default connect (mapStateToProps,mapDispatchToProps)(KilometreScreen);