import { TabNavigator } from 'react-navigation';

import issuesAll from 'pages/issuesAll';
import issuesOpen from 'pages/issuesOpen';
import issuesClose from 'pages/issuesClose';
import CustomTabBar from 'components/CustomTabBar';

const createNavigator = route => (
  TabNavigator({
    issuesAll: { screen: issuesAll, navigationOptions: { title: 'Todas' } },
    issuesOpen: { screen: issuesOpen, navigationOptions: { title: 'Abertas' } },
    issuesClose: { screen: issuesClose, navigationOptions: { title: 'Fechadas' } },
  }, {
    initialRouteName: `${route}`,
    tabBarComponent: CustomTabBar,
  }, {
    swipeEnabled: true,
  })
);
export default createNavigator;
