import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}>
        <Text style={styles.title}>Hola wey</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    margin: 20,
  },
});
