import React from 'react';
import {View} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import ActivitatItem from "../components/ActivitatItem";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../components/basicComponents/HeaderIcon";
import { fetchActivities } from "../actions/ListActivitiesActions";

class ActivitatListScreen extends React.Component {
    componentWillMount() {
        this.props.fetchActivities()
    }

    render() {
        const {viewStyle,activitatStyle} = styles;
        console.log(this.props.activities.length)
        return (
            <View style = {viewStyle}>

                <HeaderIcon headerText = { 'Activitats Creades'}
                            iconName={ 'home'}
                            colorName={ APP_COLORS.color_neutral}
                            path={() => Actions.home()}
                            size = {60}
                            textSize = {31}
                            isEvilType = {true}
                />
                {
                    this.props.activities.map((activity) => {
                        return (
                            <ActivitatItem key={activity.id} nomActivitat = {activity.name} style = {activitatStyle} id={activity.id} screen = 'Creades'/>
                        )
                    })
                }


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
    activitatStyle: {
        paddingTop: '5%'
    }
}

const mapStateToProps = (state) => {
    return {

        activities: state.listActivities.activities
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchActivities: ()=>dispatch(fetchActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitatListScreen)