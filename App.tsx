/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView, StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';

import {FlexDirectionScreen} from './src/presentation/screens/FlexDirectionScreen';
import {HomeworkScreen} from './src/presentation/screens/HomeworkScreen';

const IconComponent = (props: React.ComponentProps<typeof IonIcon>) => (
  <IonIcon {...props} />
);

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: IconComponent,
      }}>
      <SafeAreaView style={styles.container}>
        {/* <HelloWordScreen name="Juank Montero Osorio" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterScreenM3 /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionsScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexDirectionScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
