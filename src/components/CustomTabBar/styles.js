import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  tabContainer: {
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding * 2,
    paddingVertical: metrics.basePadding / 3,
    borderRadius: metrics.baseRadius,
  },
  tab: {
    color: colors.darkTransparent,
  },
  focusedTab: {
    color: colors.dark,
    fontWeight: 'bold',
  },
});

export default styles;
