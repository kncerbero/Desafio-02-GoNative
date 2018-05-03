import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import IssuesList from 'components/IssuesList';

class issuesOpen extends Component {
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
    await AsyncStorage.setItem('@filtro', 'issuesOpen');
  } catch (err) {
    // error
  }
}

render() {
  console.tron.log(this.props);
  return (
    <IssuesList status="open" repository={this.props.screenProps.repository} />
  );
}
}

export default issuesOpen;
