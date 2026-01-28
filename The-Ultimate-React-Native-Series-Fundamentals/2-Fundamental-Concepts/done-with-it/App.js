import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('Text pressed');
  };

  console.log(require('./assets/icon.png'));

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
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

      <Button
        title="Click me"
        color="blue"
        onPress={() => alert('Button tapped')}
      />

      <Button
        title="Click me"
        color="purple"
        onPress={() => Alert.alert(
          'My Title',
          'My Message',
          [
            { text: 'Yes' },
            { text: 'No' },
          ]
        )}
      />

      <Button
        title="Click me"
        color="black"
        onPress={() => Alert.alert(
          'My Title',
          'My Message',
          [
            {
              text: 'Yes',
              onPress: () => console.log('Yes'),
            },
            {
              text: 'No',
              onPress: () => console.log('No'),
            },
          ]
        )}
      />

      <Button
        title="Click me"
        color="red"
        onPress={() => Alert.prompt(
          'My Title',
          'Enter something',
          text => console.log(text)
        )}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = {
  backgroundColor: 'orange',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
