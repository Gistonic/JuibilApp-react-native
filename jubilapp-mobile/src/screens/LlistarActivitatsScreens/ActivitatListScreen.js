import React from 'react';
import {View, Text, ActivityIndicator, SectionList} from 'react-native';
import moment from "moment";
import {APP_COLORS} from "../../constants/colors";
import ActivitatItem from "../../components/ActivitatItem";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../../components/basicComponents/HeaderIcon";
import { fetchActivities , deleteActivity, setModifyActivityId} from "../../actions/ListActivitiesActions";
import {attend, notAttend} from "../../actions/buscarActivityActions";

class ActivitatListScreen extends React.Component {
    constructor(props) {
        super(props)

        this.renderActivities = this.renderActivities.bind(this)
        this.getActivitySections = this.getActivitySections.bind(this)
        this.indexOfByProperty = this.indexOfByProperty.bind(this)
    }

    componentWillMount() {
        this.props.fetchActivities(this.props.url, this.props.att);
    }

    indexOfByProperty(list, propertyName, value) {
        let result = -1

        list.forEach((element, index) => {
            if (element[propertyName] === value) {
                result = index;
            }
        });

        return result
    }

    getActivitySections() {
        const { activities } = this.props

        let sections = []
        activities.forEach((activity) => {
            const { startDate } = activity

            const startDateDay = moment(startDate).format("YYYY/MM/DD");
            const index = this.indexOfByProperty(sections, "date", startDateDay);

            if (index < 0) {
                sections.push({
                    title: startDateDay,
                    data: [activity]
                })
            } else {
                sections[index].data.push(activity)
            }
        })

        return sections
    }

    renderActivities() {
        const { activitatStyle } = styles;
        const { isFetching, activities } = this.props;

        if (isFetching) {
            return (
                <View style = {{justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%'}}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        } else {
            return (
                <SectionList
                    renderItem={({item, index, section}) => {
                        const activity = { ...item }
                        return (
                            <ActivitatItem dataIni={activity.startDate}
                                           dataEnd={activity.endDate}
                                           nomActivitat={activity.name}
                                           style={activitatStyle}
                                           id={activity.id} screen={this.props.url}
                                           att={this.props.att}
                                           deleteActivity={this.props.deleteActivity}
                                           attend={this.props.attend}
                                           notAttend={this.props.notAttend}
                                           setModifyActivityId={this.props.setModifyActivityId}/>
                        )
                    }}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold'}}>{title}</Text>
                    )}
                    sections={this.getActivitySections()}
                    keyExtractor={(activity, index) => activity.id}
                />
            )
            /*return activities.map((activity) => {
                return (
                    <ActivitatItem key={activity.id}
                                   dataIni ={activity.startDate}
                                   dataEnd ={activity.endDate}
                                   nomActivitat = {activity.name}
                                   style = {activitatStyle}
                                   id={activity.id} screen = {this.props.url}
                                   att = {this.props.att}
                                   deleteActivity = {this.props.deleteActivity}
                                   attend = {this.props.attend}
                                   notAttend = {this.props.notAttend}
                                   setModifyActivityId={this.props.setModifyActivityId}/>
                )
            });*/
        }
    }

    render() {
        const {viewStyle} = styles;
        return (
            <View style = {viewStyle}>

                <HeaderIcon headerText = {this.props.headerText}
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
        fetchActivities: (value, att)=>dispatch(fetchActivities(value, att)),
        deleteActivity: (value) => dispatch(deleteActivity(value)),
        setModifyActivityId:(id) => dispatch(setModifyActivityId(id)),
        attend: (value) => dispatch(attend(value)),
        notAttend: (value) => dispatch(notAttend(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitatListScreen)