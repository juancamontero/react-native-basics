import {StyleSheet, useWindowDimensions} from 'react-native';
import {View} from 'react-native';
// import {Dimensions} from 'react-native';
import {Text} from 'react-native-paper';

// const {height, width} = Dimensions.get('window'); //no se actualiza en real time

export const DimensionsScreen = () => {
  const {height, width} = useWindowDimensions(); // cambia con rotación
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.6}} />
      </View>

      <Text style={styles.title} >
        w: {width}, h: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 300,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
