import React from 'react';
import {Scene, Actions} from 'react-native-router-flux';

import RegLogScreen from './screens/RegLogScreen';
import Inici from './screens/Inici';
import Welcome from './screens/Welcome';
import RegistreNomCogScreen from './screens/RegistreNomCogScreen';
import RegistreCorreoScreen from './screens/RegistreCorreoScreen';
import RegistrePsswScreen from './screens/RegistrePsswScreen';
import RegistreTelfScreen from './screens/RegistreTelfScreen';


const Scenes = Actions.create(
	<Scene key="root" hideNavBar={true} duration={0}>
		<Scene key="inici" component={Inici} initial/>
		<Scene key="login" component={RegLogScreen} type="replace"/>
		<Scene key="welcome" component={Welcome}/>
		<Scene key="r1" component={RegistreNomCogScreen}/>
		<Scene key="r2" component={RegistreCorreoScreen}/>
		<Scene key="r3" component={RegistrePsswScreen}/>
		<Scene key="r4" component={RegistreTelfScreen}/>
	</Scene>
)

export default Scenes