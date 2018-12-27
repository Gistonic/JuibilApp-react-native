import React from 'react';
import {Scene, Actions} from 'react-native-router-flux';

import LoginScreen from './screens/LoginScreen';
import Inici from './screens/Inici';
import Welcome from './screens/Welcome';
import RegistreNomCogScreen from './screens/RegistreScreens/RegistreNomCogScreen';
import RegistreCorreoScreen from './screens/RegistreScreens/RegistreCorreoScreen';
import RegistrePsswScreen from './screens/RegistreScreens/RegistrePsswScreen';
import RegistreTelfScreen from './screens/RegistreScreens/RegistreTelfScreen';
import KilometreScreen from './screens/Profile/KilometreScreen';
import HomeScreen from './screens/HomeScreen';
import NameCreate from './screens/crearActivitatScreens/NameCreate';
import UbiCreate from './screens/crearActivitatScreens/UbiScreenCreate';
import IniDate from './screens/crearActivitatScreens/IniDateCreate';
import FinDate from './screens/crearActivitatScreens/FinDateCreate';
import IniHour from './screens/crearActivitatScreens/IniHourCreate';
import FinHour from './screens/crearActivitatScreens/FinHourCreate';
import ModificarActivitatScreen from './screens/modificarActivitatScreens/ModificarActivitatScreen';
import ActDescription from './screens/crearActivitatScreens/ActDescriptionCreate';
import SelectType from './screens/crearActivitatScreens/SelectTypeCreate';
import ActivitatListScreen from './screens/LlistarActivitatsScreens/ActivitatListScreen';
import Interessos2 from './screens/Profile/Interessos2';
import NameModify from "./screens/modificarActivitatScreens/NameModify";
import IniHourModify from "./screens/modificarActivitatScreens/IniHourModify";
import FinHourModify from "./screens/modificarActivitatScreens/FinHourModify";
import IniDateModify from "./screens/modificarActivitatScreens/IniDateModify";
import FinDateModify from "./screens/modificarActivitatScreens/FinDateModify";
import ActDescriptionModify from "./screens/modificarActivitatScreens/ActDescriptionModify";
import ActivityInfo from "./screens/MostrarInfoActScreens/ActivityInfo";
import BuscarActivitatScreen from "./screens/BuscarActivitatScreens/BuscarActivitatScreen";
import ListsActivitiesScreen from "./screens/LlistarActivitatsScreens/ListsActivitiesScreen";
import modificarPerfilScreen from "./screens/Profile/modificarPerfilScreen";
import PerfilScreen from "./screens/Profile/PerfilScreen";
import veureInteressosPerfilScreen from "./screens/Profile/veureInteressosPerfilScreen";
import SelectFromDate from "./screens/BuscarActivitatScreens/SelectFromDate";
import SelectToDate from "./screens/BuscarActivitatScreens/SelectToDate";
import veureKilometresScreen from './screens/Profile/veureKilometresScreen';
import veureValoracionsFichas from './screens/Valoracions/veureValoracionsFichas';
import verFichasScreen from './screens/Valoracions/verFichasScreen';


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
		<Scene key="name" component={NameCreate}/>
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
		<Scene key="buscar" component={BuscarActivitatScreen}/>
		<Scene key="llistesActs" component={ListsActivitiesScreen}/>
		<Scene key="modperfil" component={modificarPerfilScreen}/>
		<Scene key="perfil" component={PerfilScreen}/>
		<Scene key="ubi" component={UbiCreate}/>
		<Scene key="veureinteressosperfil" component={veureInteressosPerfilScreen}/>
        <Scene key="toDate" component={SelectToDate}/>
        <Scene key="fromDate" component={SelectFromDate}/>
		<Scene key="veurekm" component={veureKilometresScreen}/>
		<Scene key="veurevaloracions" component={veureValoracionsFichas}/>
		<Scene key="verfichas" component={verFichasScreen}/>


	</Scene>
)

export default Scenes