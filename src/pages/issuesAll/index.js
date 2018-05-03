import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import IssuesList from 'components/IssuesList';

class issuesAll extends Component {
static propTypes = {
  screenProps: PropTypes.shape({
    repository: PropTypes.number,
  }).isRequired,
};

componentDidMount() {
  this.saveFilter();
}

saveFilter = async () => {
  try {
    await AsyncStorage.setItem('@filtro', 'issuesAll');
  } catch (err) {
    // error
  }
}

render() {
  return (
    <IssuesList repository={this.props.screenProps.repository} />
  );
}
}

export default issuesAll;
