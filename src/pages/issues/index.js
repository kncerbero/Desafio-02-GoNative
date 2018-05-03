import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import HeaderLeft from 'components/HeaderLeft';
import createNavigator from './tabs';

class index extends Component {
static navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.state.params.title,
  headerTitleStyle: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
  },
  headerRight: <View />,
  headerLeft: <HeaderLeft navigation={navigation} />,
});

static propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};

render() {
  const Routes = createNavigator(this.props.navigation.state.params.filtering);
  return <Routes screenProps={{ repository: this.props.navigation.state.params.repository }} />;
}
}

export default index;
