import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from 'services/api';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import IssueItem from './components/IssueItem';
import styles from './styles';

export default class index extends Component {
static propTypes = {
  repository: PropTypes.number.isRequired,
  status: PropTypes.string,
};

state = {
  data: [],
  loading: true,
  refreshing: false,
};

componentDidMount() {
  setTimeout(() => {
    this.getIssues();
  }, 1000);
}

getIssues = async () => {
  this.setState({ refreshing: true });
  const repositorio = this.props.repository;
  let state = null;
  if (this.props.status) { state = `?state=${this.props.status}`; } else { state = ''; }
  const response = await api.get(`/repositories/${repositorio}/issues${state}`);
  await this.saveStateIssues(response);
};

saveStateIssues = async (response) => {
  const issuesList = [];
  for (const i in response.data) {
    issuesList.push({
      title: response.data[i].title,
      user: response.data[i].user.login,
      avatar: response.data[i].user.avatar_url,
      url: response.data[i].html_url,
      state: response.data[i].state,
    });
  }
  await this.setState({ data: [...issuesList] });
  await this.setState({
    loading: false,
    refreshing: false,
  });
}

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.getIssues}
      refreshing={this.state.refreshing}
    />
  );

  renderListItem = ({ item }) => <IssueItem issue={item} />

  render() {
    const empty = <View style={styles.empty}><Text>Não tem issue nenhum registrado</Text></View>;
    let result;
    if (this.state.data.length === 0) {
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
