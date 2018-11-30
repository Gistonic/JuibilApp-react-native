import {AsyncStorage} from "react-native";
const baseUrl = "";
export const request = async (method = "GET", path = "", body) => {
    return new Promise((res, rej) => {
        AsyncStorage.getItem('token').then((token) => {
          let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          };
          if(token != null)headers.Authorization = 'Bearer ' + token;
          const finalPath = baseUrl + path;
          fetch(finalPath, {
                method,
                headers,
                body
            }).then(response => {
                console.log(response)
                if (response.ok) {
                    console.log(response.ok)
                    return res(response.json())
                } else {
                    console.log('Error sending create activity')
                    rej(new Error('Server responded with ' + response.code))
                }
            }).catch(err => {
                rej(err)
                console.log("Fetch error", err)
            })
        });
    })

}
