import React from 'react';
import {Scene, Actions} from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import Inici from './screens/Inici';
import Welcome from './screens/Welcome';
import RegistreNomCogScreen from './screens/RegistreNomCogScreen';
import RegistreCorreoScreen from './screens/RegistreCorreoScreen';
import RegistrePsswScreen from './screens/RegistrePsswScreen';
import RegistreTelfScreen from './screens/RegistreTelfScreen';
import KilometreScreen from './screens/KilometreScreen';
import HomeScreen from './screens/HomeScreen';
import NameUbi from './screens/NameUbi';
import IniDate from './screens/IniDate';
import FinDate from './screens/FinDate';
import IniHour from './screens/IniHour';
import FinHour from './screens/FinHour';
import InteressosScreen from './screens/InteressosScreen';
import ModificarActivitatScreen from './screens/ModificarActivitatScreen';
import ActDescription from './screens/ActDescription';
import SelectType from './screens/SelectType';


const Scenes = Actions.create(
	<Scene key="root" hideNavBar={true} duration={0}>
		<Scene key="inici" component={Inici} initial/>
		<Scene key="login" component={LoginScreen} type="replace"/>
		<Scene key="welcome" component={Welcome}/>
		<Scene key="r1" component={RegistreNomCogScreen}/>
		<Scene key="r2" component={RegistreCorreoScreen}/>
		<Scene key="r3" component={RegistrePsswScreen}/>
		<Scene key="r4" component={RegistreTelfScreen}/>
        <Scene key="km" component={KilometreScreen}/>
		<Scene key="home" component={HomeScreen}/>
		<Scene key="nameUbi" component={NameUbi}/>
        <Scene key="interessos" component={InteressosScreen}/>
		<Scene key="iniDate" component={IniDate}/>
        <Scene key="finDate" component={FinDate}/>
        <Scene key="iniHour" component={IniHour}/>
        <Scene key="finHour" component={FinHour}/>
        <Scene key="actdescr" component={ActDescription}/>
        <Scene key="modificaractivitat" component={ModificarActivitatScreen}/>
        <Scene key="seltype" component={SelectType}/>
	</Scene>
)

export default Scenes