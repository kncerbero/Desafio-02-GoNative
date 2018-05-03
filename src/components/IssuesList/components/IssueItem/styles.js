import { StyleSheet } from 'react-native';
import { colors, general, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  issueName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  issueUser: {
    fontSize: 12,
    color: colors.regular,
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  icon: {
    color: colors.darker,
    fontSize: fonts.fontBig,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
