import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

export default class index extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  toList = async () => {
    const { dispatch } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Lista' }),
      ],
    });
    dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toList}>
          <Icon name="chevron-left" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
