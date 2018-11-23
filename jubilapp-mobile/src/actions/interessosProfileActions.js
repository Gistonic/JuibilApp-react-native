import {Actions} from "react-native-router-flux";
import {INTERESSOS_PROFILE_ACTIONS} from "../constants/actions";


export const interessosProfile = (interessosInfo) => {
    return () => {
        fetch('http://ordinadorcasa.no-ip.org:4100/profile/events', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(interessosInfo)
        }).then(response => {
            console.log(response)
            if (response.ok) {
                console.log(response.ok)

                return response.json()

            } else {
                console.log('Error sending interessos profile')
            }
        }).catch(err => {
            console.log(err)
        })
        Actions.km();
    }
}