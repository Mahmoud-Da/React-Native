import { View } from "react-native";

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'column',
      justifyContent: 'center', // primary Axis react-native main=column, CSS main=row
      alignItems: 'center', // secondary Axis react-native main=row, CSS main=column
      alignContent: 'center',
      flexWrap: 'nowrap',

    }}>
      <View style={{ backgroundColor: 'dodgerblue', width: 100, height: 100, flex: -1 }} />
      <View style={{ backgroundColor: 'gold', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'gray', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'greenyellow', width: 100, height: 100 }} />
    </View>
  );
}
