import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import type {PressableProps} from 'react-native';

interface ButtonProps {
  label?: string;
}

interface Props extends ButtonProps, PressableProps {}

export const PrimaryButton = ({
  label,
  onPress,
  onLongPress,
}: Props) => {
  return (
    <Pressable
      onPress={(e) => onPress && onPress(e)}
      onLongPress={(e) => onLongPress && onLongPress(e)}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746ab' : 'white',
  },
  buttonText: {
    color: Platform.OS === 'android' ? 'white' : '#4746ab',
  },
});
