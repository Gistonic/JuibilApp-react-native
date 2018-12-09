import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import {APP_COLORS} from "../constants/colors";
import ActivitatItem from "../components/ActivitatItem";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../components/basicComponents/HeaderIcon";
import { fetchActivities , deleteActivity} from "../actions/ListActivitiesActions";

class ActivitatListScreen extends React.Component {
    constructor(props) {
        super(props)

        this.renderActivities = this.renderActivities.bind(this)
    }

    componentWillMount() {
        this.props.fetchActivities('/own')
    }

    renderActivities() {
        const { activitatStyle } = styles;
        const { activities, isFetching } = this.props;
        console.log('IsFetching: ' + isFetching)
        if (isFetching) {
            return (
                <View>
                    <ActivityIndicator size="large"/>
                </View>
            );
        } else {
            return activities.map((activity) => {
                return (
                    <ActivitatItem key={activity.id} nomActivitat = {activity.name} style = {activitatStyle} id={activity.id} screen = 'Creades' deleteActivity = {this.props.deleteActivity}/>
                )
            });
        }
    }

    render() {
        const {viewStyle} = styles;
        //console.log('IsFetching: ' + this.props)
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
                    this.renderActivities()
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
        activities: state.listActivities.activities,
        isFetching: state.listActivities.isFetching
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchActivities: (value)=>dispatch(fetchActivities(value)),
        deleteActivity: (value) => dispatch(deleteActivity(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitatListScreen)