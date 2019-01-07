import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import Description from '../components/basicComponents/Description';
import ButtonBack from '../components/basicComponents/ButtonBack';
import PopUp from '../components/basicComponents/PopUp';
import {APP_COLORS} from "../constants/colors";
import Modal from 'react-native-modal';

class provaScreen extends React.Component {
    state = {
        visibleModal: null,
    };
    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text style = {styles.textStyle}>{text}</Text>
          </View>
        </TouchableOpacity>
      );
    
    _obrirModal(){
        if(this.state.visibleModal ===1){
            return(
                <PopUp button1Text = {'Cancelar'}
                    button2Text = {'Ok'}
                    titleText = {'Desea ir al menú principal y perder todos los cambios?'}/>
            );
        }
        else{
            return null;
        }
    }
    render() {
        const {viewStyle, viewBig} = styles;
        return (
            
            <View style = {viewBig}>   
                <ButtonBack buttonText = {'Modal'}
                                    path = {() => this.setState({ visibleModal: 1 })}
                                    colorBoto = {APP_COLORS.color_next}/>
                <Modal isVisible={this.state.visibleModal === 1}>
                    <View style={styles.modalContent}>
                        <Text style = {styles.titleStyle}>Desea ir al menú principal y perder todos los cambios?</Text>
                            <View style = {styles.container1}>
                                {this._renderButton('Cancelar', () => this.setState({ visibleModal: null }))}
                                {this._renderButton('Ok', () => this.setState({ visibleModal: null }))}
                            </View>
                    </View>
                </Modal> 
            </View>  
            
        );
    }
  }
  const styles ={
    container1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:'5%'
    },
    titleStyle:{
        color:APP_COLORS.text_color ,
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textStyle:{
        color:APP_COLORS.color_neutral,
        fontFamily: 'open-sans-bold',
        fontSize: 17,
        fontWeight: 'bold',
        //textAlign: 'center'
    },
    modalContent: {
        paddingLeft:'3%',
        paddingRight:'3%',
        paddingTop: '3%',
        paddingBottom:'2%',
        backgroundColor: APP_COLORS.color_neutral,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        borderColor: APP_COLORS.color_header,
        borderWidth: 7,
        height: '35%'
    },
    button: {
        backgroundColor: APP_COLORS.color_header,
        padding: 22,
        margin: 16,
        height: '13%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
    },
    viewBig: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%', 
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '75%'
    }
}

export default provaScreen;

/*<Modal isVisible={this.state.visibleModal === 1}>
                    <View style={styles.modalContent}>
                        <Text style = {styles.titleStyle}>Desea ir al menú principal y perder todos los cambios?</Text>
                        <View style = {styles.container1}>
                            {this._renderButton('Cancelar', () => this.setState({ visibleModal: null }))}
                            {this._renderButton('Ok', () => this.setState({ visibleModal: null }))}
                        </View>
                    </View>
                </Modal>
                
                <View>
                    {this._obrirModal()}
                    {()=>this.setState({visibleModal:0})}
                    {console.log("hola2 ",this.state.visibleModal)}
                </View>   */