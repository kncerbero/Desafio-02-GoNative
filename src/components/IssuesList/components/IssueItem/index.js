import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssueItem = ({ issue }) => (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={{ uri: issue.avatar }} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.issueName} numberOfLines={1}>{issue.title}</Text>
      <Text style={styles.issueUser}>{issue.user}</Text>
    </View>
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => Linking.openURL(issue.url)}>
        <Icon name="angle-right" size={16} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default IssueItem;
