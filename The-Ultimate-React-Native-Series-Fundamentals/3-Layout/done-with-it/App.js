import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

export default function App() {
  const screen = Dimensions.get("screen");

  console.log(screen);

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "dodgerblue",
          // width: 150,
          width: "50%",
          height: 70,
        }}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
