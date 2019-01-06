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
import Description from "../../components/basicComponents/Description";

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

            const startDateDay = moment(startDate).format("DD/MM/YYYY");
            const index = this.indexOfByProperty(sections, "title", startDateDay);

            if (index < 0) {
                sections.push({
                    title: startDateDay,
                    data: [activity]
                })
            } else {
                sections[index].data.push(activity)
            }
        })

        console.log(sections)

        return sections
    }

    renderActivities() {
        const { activitatStyle, sectionHeaderStyle, textStyle } = styles;
        const { isFetching, activities } = this.props;

        if (isFetching) {
            return (
                <View style = {{justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%'}}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        } else {
            if (activities.length === 0) {
                return  (
                    <Description textExpl = "No hay actividades en esta lista"/>
                )

            }
            else {
                return (
                    <SectionList
                        renderItem={({item, index, section}) => {
                            const activity = {...item}
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
                        renderSectionHeader={({section: {title}}) => {
                            return (
                                <View style={sectionHeaderStyle}>
                                    <Text style={textStyle}>{title}</Text>
                                </View>
                            )
                        }}
                        sections={this.getActivitySections()}
                        keyExtractor={(activity, index) => activity.id}
                    />
                )
            }
        }
    }

    render() {
        const {viewStyle} = styles;
        return (
            <View style = {viewStyle}>

                <HeaderIcon headerText = {this.props.headerText}
                            iconName={ 'list-ul'}
                            colorName={ APP_COLORS.color_neutral}
                            path={() => Actions.llistesActs()}
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
    textStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        color: APP_COLORS.color_button_1,
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        fontWeight: 'bold'
    },
    sectionHeaderStyle: {
        paddingTop: '5%',
        paddingLeft: '5%'
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