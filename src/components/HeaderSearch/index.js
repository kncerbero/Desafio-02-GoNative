import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

class index extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    repositorio: '',
  }

  listRepositories = () => {
    if (this.state.repositorio.length === 0) return;
    const { dispatch } = this.props.navigation;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Lista', params: { repositorio: this.state.repositorio } }),
      ],
    });
    dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.input}
            placeholder="Adicionar repositório"
            onChangeText={repositorio => this.setState({ repositorio })}
          />
          <TouchableOpacity onPress={this.listRepositories}>
            <Icon name="plus" size={16} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default index;
