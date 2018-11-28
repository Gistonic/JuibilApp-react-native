import React from 'react';
import {View} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import Header from "../../components/basicComponents/Header";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class ActivityInfoBase extends React.Component {


    render() {
        const {viewStyle} = styles;
        return (
            <View style = {viewStyle}>
                <Header headerText = {'JubilApp'}/>
                <Card>
                    <CardImage
                        source={require('../../images/artPES2.jpg')}
                    />
                    <CardTitle
                        subtitle={this.props.id}
                    />
                    <CardContent text="Clifton, Western Cape" />
                    <CardAction
                        separator={true}
                        inColumn={false}>
                        <CardButton
                            onPress={() => {}}
                            title="Share"
                            color="#FEB557"
                        />
                        <CardButton
                            onPress={() => {}}
                            title="Explore"
                            color="#FEB557"
                        />
                    </CardAction>
                </Card>

            </View>
        );
    }
}
const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%'
    },
}