import { View } from "react-native";

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'center', // primary Axis react-native main=column, CSS main=row
      alignItems: 'center', // secondary Axis react-native main=row, CSS main=column
    }}>
      <View style={{ backgroundColor: 'dodgerblue', width: 100, height: 100 }} />
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'gold',
          width: 100,
          height: 100,
          top: 20,
          left: 20,
        }}
      />
      <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
    </View>
  );
}
