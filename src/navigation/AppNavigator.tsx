import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AddPartyList from '../screens/AddPartyList';
import SeachPartyList from '../screens/SearchPartyList';
import { ROUTES_KEYS } from '../constants/RoutesKeys';

const MainNavigator = createStackNavigator({
  [ROUTES_KEYS.AddPartyList] : {
    screen: AddPartyList,
    navigationOptions: {
      title: 'Add Party'
    }
  },
  [ROUTES_KEYS.SeachPartyList] : {
    screen: SeachPartyList,
    navigationOptions: {
      title: 'Search',
    }
  },
},
{
  initialRouteName: ROUTES_KEYS.AddPartyList,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#015E54',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);

const AppNavigator: Function = createAppContainer(MainNavigator);
export default AppNavigator;