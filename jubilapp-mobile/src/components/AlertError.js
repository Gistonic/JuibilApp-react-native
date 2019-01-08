import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class AlertError extends Component {
    render() {
        const { containerStyle, textStyle } = styles;
        const { error } = this.props
        console.log(error)
        if (error) {
            return (
                <View style={containerStyle}>
                    <Text style={textStyle}>{error}</Text>
                </View>
            )
        }

        return (<View></View>)
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

const mapStateToProps = (state) => {
    return {
        error: state.error.error
    }
}

export default connect(mapStateToProps)(AlertError);