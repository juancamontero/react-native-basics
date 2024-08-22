import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

// import {PrimaryButton} from '../components';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      {/* <PrimaryButton
        onLongPress={() => setCounter(0)}
        onPress={() => setCounter(counter + 1)}
        label="Subir 1"
      /> */}
      <Button
        onLongPress={() => setCounter(0)}
        onPress={() => setCounter(counter + 1)}
        mode="contained"
        >
        Press me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    color: 'black',
    fontWeight: '300',
    // padding: 20,
  },
});
