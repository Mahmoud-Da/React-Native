import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Text pressed');
  };

  console.log(require('./assets/icon.png'));

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Click me
      </Text>
      {/* <Image source={require('./assets/icon.png')} /> */}
      <TouchableOpacity onPress={() => console.log('Image tapped')}>
        <Image
          blurRadius={10}
          source={{
            uri: 'https://picsum.photos/200/300',
            width: 200,
            height: 300,
          }}
          loadingIndicatorSource={require('./assets/icon.png')}
        />
      </TouchableOpacity>

      <Button
        title="Click me"
        color="orange"
        onPress={() => console.log('Button tapped')}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
