import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux'
import Scenes from './src/Scenes';
import { store } from './src/store';
import { Font } from 'expo';

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
            <ConnectedRouter scenes={Scenes}/>
        </Provider>
    );
  }
}
