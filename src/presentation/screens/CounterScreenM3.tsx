import {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

// import Icon from 'react-native-vector-icons/Ionicons';

// import {PrimaryButton} from '../components';

export const CounterScreenM3 = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>

      <Text>Hola</Text>
      {/* <Icon name="accessibility-outline" size={25} /> */}
      <FAB
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        style={globalStyles.fabPrimaryButton}
        // label="+1"
        icon="add-outline"
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 80,
//     textAlign: 'center',
//     color: 'black',
//     fontWeight: '300',
//     // padding: 20,
//   },
// });
