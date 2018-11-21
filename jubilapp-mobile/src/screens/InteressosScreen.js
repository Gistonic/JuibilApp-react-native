import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import Header from '../components/basicComponents/Header';

import { Actions } from 'react-native-router-flux';
import Description from "../components/basicComponents/Description";
import ButtonBack from "../components/basicComponents/ButtonBack";
import NextButton from "../components/basicComponents/NextButton";
import {changeCreateActivityFormProperty} from "../actions/index";
import connect from "react-redux/es/connect/connect";

class InteressosScreen extends React.Component {

    onPressTouchable = (tipus) => {
        const { changeArte, selected_Arte, changeCultura, selected_Cultura, changeDeporte,selected_Deporte, changeExcursiones, selected_Excursiones, changeTalleres, selected_Talleres, changeOcio, selected_Ocio} = this.props;
        if(tipus === "Arte")changeArte(!selected_Arte);
        if(tipus === "Cultura")changeCultura(!selected_Cultura);
        if(tipus === "Deporte")changeDeporte(!selected_Deporte);
        if(tipus === "Excursiones")changeExcursiones(!selected_Excursiones);
        if(tipus == "Talleres")changeTalleres(!selected_Talleres);
        if(tipus == "Ocio")changeOcio( !selected_Ocio);
    }
    render() {
        const {viewStyle, container, container1, viewInteressos} = styles;
        const { changeArte, selected_Arte, changeCultura, selected_Cultura, changeDeporte,selected_Deporte, changeExcursiones, selected_Excursiones, changeTalleres, selected_Talleres, changeOcio, selected_Ocio} = this.props;
        return (
            <View style = {viewStyle}>

                <Header headerText = {'JubilApp'}/>
                <Description textExpl = {'Selecciona tus intereses'}/>
                <View style = {viewInteressos} >
                    <View style = {container}>
                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              changeArte( !selected_Arte);
                                          }}>
                            <ImageBackground source={require('../images/artPES.jpg')} style={styles.imageStyle}/>
                                <CheckBox title = 'Arte' checked = {selected_Arte} style = {styles.checkBoxStyle}
                                          onPress = {() => changeArte( !selected_Arte)}
                                />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              changeDeporte(!selected_Deporte);
                                          }}>
                            <ImageBackground source={require('../images/esportPES.jpg')} style={styles.imageStyle}/>
                                <CheckBox title = 'Deporte' checked = {this.state.selected_Deporte} style = {styles.checkBoxStyle}
                                          onPress = {() => changeDeporte( !selected_Deporte)}
                                />
                        </TouchableOpacity>

                    </View>

                    <View style = {container}>
                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              changeCultura( !selected_Cultura);
                                          }}>
                            <ImageBackground source={require('../images/culturaPES.png')} style={styles.imageStyle}/>
                                <CheckBox title = 'Cultura' checked = {this.state.selected_Cultura} style = {styles.checkBoxStyle}
                                          onPress = {() => this.setState({selected_Cultura: !this.state.selected_Cultura})}
                                />
                        </TouchableOpacity>

                       <TouchableOpacity style={styles.buttonStyle}
                                         onPress={ () => {
                                             this.setState({
                                                 selected_Excursiones: !this.state.selected_Excursiones
                                             });
                                         }}>
                            <ImageBackground source={require('../images/excursionsPES.jpg')} style={styles.imageStyle}/>
                                <CheckBox title = 'Excursiones' checked = {this.state.selected_Excursiones} style = {styles.checkBoxStyle}
                                          onPress = {() => this.setState({selected_Excursiones: !this.state.selected_Excursiones})}
                                />
                        </TouchableOpacity>
                    </View>

                    <View style = {container}>
                        <TouchableOpacity style={styles.buttonStyle} style={styles.buttonStyle}
                                          onPress={ () => {
                                              this.setState({
                                                  selected_Talleres: !this.state.selected_Talleres
                                              });
                                          }}>
                            <ImageBackground source={require('../images/tallersPES.jpg')} style={styles.imageStyle}/>
                                <CheckBox title = 'Talleres' checked = {this.state.selected_Talleres} style = {styles.checkBoxStyle}
                                          onPress = {() => this.setState({selected_Talleres: !this.state.selected_Talleres})}
                                />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              this.setState({
                                                  selected_Ocio: !this.state.selected_Ocio
                                              });
                                          }}>
                            <ImageBackground source={require('../images/ocioPES.jpg')} style={styles.imageStyle}/>
                                <CheckBox title = 'Ocio' checked = {this.state.selected_Ocio} style = {styles.checkBoxStyle}
                                          onPress = {() => this.setState({selected_Ocio: !this.state.selected_Ocio})}
                                />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {container1}>
                    <ButtonBack buttonText = {'Atrás'}
                                path = {() => Actions.home()}/>
                    <NextButton buttonText = {'Siguiente'}
                                path = {() => Actions.km()}/>
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
        flexDirection: 'column'
    },
    container: {
        width: '100%',
        height: '20%',
        flex:1,
        flexDirection: 'row'
    },
    container1: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    buttonStyle:{
        justifyContent: 'center',
        alignItems: 'center', //horizontal
        height: '100%',
        width: '50%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '2%',
    },
    imageStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: APP_COLORS.color_header,
    },
    textStyle:{
        fontSize:20,
        color: 'black',
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold'
    },
    textSelectedStyle: {
        fontSize:17,
        color: APP_COLORS.color_header,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    checkBoxStyle:{
        center:true,
    },
    viewInteressos: {
        flex: 6,
        flexDirection:'column',
        justifyContent: 'space-between',
    }
}

const mapStateToProps = (state) => {
    return {
        selected_Arte: state.createActivityForm.selected_Arte,
        selected_Deporte: state.createActivityForm.selected_Deporte,
        selected_Cultura: state.createActivityForm.selected_Cultura,
        selected_Excursiones: state.createActivityForm.selected_Excursiones,
        selected_Talleres: state.createActivityForm.selected_Talleres,
        selected_Ocio: state.createActivityForm.selected_Ocio
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        changeArte: (value) => dispatch(changeCreateActivityFormProperty("selected_Arte", value)),
        changeDeporte: (value) => dispatch(changeCreateActivityFormProperty("selected_Deporte", value)),
        changeCultura: (value) => dispatch(changeCreateActivityFormProperty("selected_Cultura", value)),
        changeExcursiones: (value) => dispatch(changeCreateActivityFormProperty("selected_Excursiones", value)),
        changeTalleres: (value) => dispatch(changeCreateActivityFormProperty("selected_Talleres", value)),
        changeOcio: (value) => dispatch(changeCreateActivityFormProperty("selected_Ocio", value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InteressosScreen);

