import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AlertError extends Component {
    render() {
        const { containerStyle, textStyle } = styles;
        const { message } = this.props

        return (
            <View style={containerStyle}>
                <Text style={textStyle}>{message}</Text>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ee3333',
        padding: '5%'
    },
    textStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
};

export default AlertError;