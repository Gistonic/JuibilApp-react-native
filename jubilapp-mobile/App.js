import React from 'react';
import { View, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux'
import Scenes from './src/Scenes';
import { store } from './src/store';
import { Font } from 'expo';
import AlertError from './src/components/AlertError'

console.disableYellowBox = true

const ConnectedRouter = connect()(Router);

export default class App extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            'open-sans-bold': require('./assets/fonts/Roboto-Bold.ttf' ),
            'open-sans': require('./assets/fonts/Roboto-Regular.ttf' ),
        });
    }
  render() {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <ConnectedRouter scenes={Scenes}/>
                <AlertError />
            </View>
        </Provider>
    );
  }
}
