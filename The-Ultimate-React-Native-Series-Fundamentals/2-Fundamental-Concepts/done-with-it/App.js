import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Text pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Click me
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',

  },
});
