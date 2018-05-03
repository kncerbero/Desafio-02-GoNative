import React, { Component } from 'react';
import HeaderSearch from 'components/HeaderSearch';
import PropTypes from 'prop-types';
import api from 'services/api';

import {
  View,
  ActivityIndicator,
  FlatList,
  AsyncStorage,
  Text,
} from 'react-native';

import styles from './styles';
import RepositoryItem from './components/RepositoryItem';


class Lista extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  static navigationOptions = {
    header: props => <HeaderSearch {...props} />,
  };

  state = {
    data: [],
    filter: 'issuesAll',
    loading: true,
    param: false,
    refreshing: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.getRepository();
      this.loadStorageData();
    }, 1000);
  }

  getRepository = async () => {
    this.setState({ refreshing: true });
    const { params } = this.props.navigation.state;
    const repositorio = params ? params.repositorio : null;
    if (!repositorio) {
      await this.setState({ refreshing: false });
      return;
    }
    this.props.navigation.state.params.repositorio = null;
    await this.setState({ param: true });
    const response = await api.get(`/repos/${repositorio}`);
    await this.saveRepositories(response);
  }

  loadStorageData = async () => {
    const repository = JSON.parse(await AsyncStorage.getItem('@desafio02:data'));
    if (repository) await this.setState({ data: [...this.state.data, ...repository] });
    const stateIssue = await AsyncStorage.getItem('@filtro');
    if (stateIssue) await this.setState({ filter: stateIssue });
    await this.setState({
      loading: false,
      refreshing: false,
    });
  }

  saveRepositories = async (response) => {
    const repositorySearched = [];
    repositorySearched.push({
      id: response.data.id,
      nome: response.data.name,
      org: response.data.owner.login,
      avatar: response.data.owner.avatar_url,
    });
    await this.setState({ data: [...repositorySearched, ...this.state.data] });
    try {
      await AsyncStorage.setItem('@desafio02:data', JSON.stringify(this.state.data));
    } catch (err) {
      // error
    }
  }

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.getRepository}
      refreshing={this.state.refreshing}
    />
  );

  renderListItem = ({ item }) =>
    (<RepositoryItem
      repository={item}
      navigation={this.props.navigation}
      filter={this.state.filter}
    />)

  render() {
    const empty = (
      <View style={styles.empty}>
        <Text>Não tem repositório nenhum registrado</Text>
      </View>);
    let result;
    if ((this.state.data.length === 0) && (!this.state.param)) {
      result = empty;
    } else {
      result = this.renderList();
    }

    return (
      <View style={styles.container}>
        {
          this.state.loading
          ? <View style={styles.loading}><ActivityIndicator /></View>
          : result
        }
      </View>
    );
  }
}

export default Lista;
