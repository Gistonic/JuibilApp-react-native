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
        this.props.activitiesTypes.set('art', {name: 'Arte', path: '../images/artPES.jpg'});
        this.props.activitiesTypes.set('sports', {name: 'Deportes', path: '../images/esportPES.jpg'});
        this.props.activitiesTypes.set('culture', {name: 'Cultura', path: '../images/culturaPES.png'});
        this.props.activitiesTypes.set('trips', {name: 'Excursiones', path: '../images/excursionsPES.jpg'});
        this.props.activitiesTypes.set('workshops', {name: 'Talleres', path: '../images/tallersPES.jpg'});
        this.props.activitiesTypes.set('leisure', {name: 'Ocio', path: '../images/ocioPES.jpg'});
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
                            <ActivitatItem key={activity.id} nomActivitat = {activity.name} style = {activitatStyle}/>
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

        activities: state.listActivities.activities,
        activitiesTypes: state.listActivities.activitiesTypes
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchActivities: ()=>dispatch(fetchActivities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitatListScreen)