import {View, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4d9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  greenBox: {
    backgroundColor: 'green',
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
