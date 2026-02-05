import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>
      <View style={{ backgroundColor: 'dodgerblue', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'gold', width: 100, height: 100 }} />
      <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
    </View>
  );
}
