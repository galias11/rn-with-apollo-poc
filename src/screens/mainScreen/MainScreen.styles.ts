// vendors
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.select({ android: 20, ios: 60 }),
  },
  transitionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
