import {StyleSheet, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  box1: {
    flex: 1,
    backgroundColor: '#5856d6',
  },
  box2: {
    flex: 2,
    backgroundColor: '#494888',
  },
  box3: {
    flex: 3,
    backgroundColor: '#24233f',
  },
});
