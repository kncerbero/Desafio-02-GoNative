import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const CustomTabBar = ({
  navigation,
  navigationState,
  getLabel,
  renderIcon,
}) => (
  <View style={styles.tabContainer}>
    {navigationState.routes.map((route) => {
      const { routes, index } = navigation.state;
      const isFocused = routes[index].routeName === route.routeName;
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(route.routeName);
          }}
          style={styles.tabTouch}
          key={route.routeName}
        >
          <Text style={[styles.tab, isFocused ? styles.focusedTab : null]}>
            {renderIcon({ route })}
            {getLabel({ route })}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

CustomTabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  navigationState: PropTypes.object.isRequired,
  getLabel: PropTypes.func.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

export default CustomTabBar;
