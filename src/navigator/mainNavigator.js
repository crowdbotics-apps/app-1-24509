import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps204909Navigator from '../features/Maps204909/navigator';
import Additem204908Navigator from '../features/Additem204908/navigator';
import Maps204904Navigator from '../features/Maps204904/navigator';
import UserProfile204900Navigator from '../features/UserProfile204900/navigator';
import Settings204860Navigator from '../features/Settings204860/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps204909: { screen: Maps204909Navigator },
Additem204908: { screen: Additem204908Navigator },
Maps204904: { screen: Maps204904Navigator },
UserProfile204900: { screen: UserProfile204900Navigator },
Settings204860: { screen: Settings204860Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
