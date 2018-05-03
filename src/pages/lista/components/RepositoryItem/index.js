import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository, navigation, filter }) => (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>
      <Image style={styles.avatar} source={{ uri: repository.avatar }} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.repoName}>{repository.nome}</Text>
      <Text style={styles.repoOwner}>{repository.org}</Text>
    </View>
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Issues', { repository: repository.id, title: repository.nome, filtering: filter })}>
        <Icon name="angle-right" size={16} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    nome: PropTypes.string,
    org: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  filter: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default RepositoryItem;
