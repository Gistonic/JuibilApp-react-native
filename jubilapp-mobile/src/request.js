import {AsyncStorage} from "react-native";

export const request = async (method = "GET", path = "", body) => {
    return new Promise((res, rej) => {
        AsyncStorage.getItem('token').then((token) => {
            fetch(path, {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                body
            }).then(response => {
                console.log(response)
                if (response.ok) {
                    console.log(response.ok)
                    return res(response.json())
                } else {
                    console.log('Error sending create activity')
                    rej()
                }
            }).catch(err => {
                rej(err)
                console.log("Fetch error", err)
            })
        });
    })

}