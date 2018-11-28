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
import NameUbi from './screens/crearActivitatScreens/NameUbiCreate';
import IniDate from './screens/crearActivitatScreens/IniDateCreate';
import FinDate from './screens/crearActivitatScreens/FinDateCreate';
import IniHour from './screens/crearActivitatScreens/IniHourCreate';
import FinHour from './screens/crearActivitatScreens/FinHourCreate';
import ModificarActivitatScreen from './screens/ModificarActivitatScreen';
import ActDescription from './screens/crearActivitatScreens/ActDescriptionCreate';
import SelectType from './screens/crearActivitatScreens/SelectTypeCreate';
import ActivitatListScreen from './screens/ActivitatListScreen';
import Interessos2 from './screens/Interessos2';
import NameModify from "./screens/modificarActivitatScreens/NameModify";
import IniHourModify from "./screens/modificarActivitatScreens/IniHourModify";
import FinHourModify from "./screens/modificarActivitatScreens/FinHourModify";
import IniDateModify from "./screens/modificarActivitatScreens/IniDateModify";
import FinDateModify from "./screens/modificarActivitatScreens/FinDateModify";
import ActDescriptionModify from "./screens/modificarActivitatScreens/ActDescriptionModify";
import ActivityInfo from "./screens/ActivityInfo";


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
		<Scene key="iniDate" component={IniDate}/>
        <Scene key="finDate" component={FinDate}/>
        <Scene key="iniHour" component={IniHour}/>
        <Scene key="finHour" component={FinHour}/>
        <Scene key="actdescr" component={ActDescription}/>
        <Scene key="modificaractivitat" component={ModificarActivitatScreen}/>
        <Scene key="seltype" component={SelectType}/>
        <Scene key="activitatlist" component={ActivitatListScreen}/>
        <Scene key="interessos" component={Interessos2}/>
		<Scene key="nameMod" component={NameModify}/>
		<Scene key="iniHourMod" component={IniHourModify}/>
		<Scene key="finHourMod" component={FinHourModify}/>
        <Scene key="iniDateMod" component={IniDateModify}/>
        <Scene key="finDateMod" component={FinDateModify}/>
        <Scene key="actdescrMod" component={ActDescriptionModify}/>
		<Scene key="info" component={ActivityInfo}/>


	</Scene>
)

export default Scenes