import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux'
import Scenes from './src/Scenes';
import { store } from './src/store'

const ConnectedRouter = connect()(Router);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <ConnectedRouter scenes={Scenes}/>
        </Provider>
    );
  }
}
