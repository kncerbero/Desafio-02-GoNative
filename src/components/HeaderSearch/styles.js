import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: 54 + metrics.statusBarHeight,
    paddingTop: metrics.statusBarHeight,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  icon: {
    color: colors.darker,
    flex: 0,
    marginLeft: metrics.baseMargin,
    fontSize: fonts.fontMedium,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.light,
    height: 36,
    borderRadius: metrics.baseRadius,
    flex: 1,
    fontSize: fonts.fontSmall,
    paddingLeft: 10,
  },
});

export default styles;
