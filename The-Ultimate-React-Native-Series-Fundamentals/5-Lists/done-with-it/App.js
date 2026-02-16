import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountScreen from "./app/screens/AccountScreen.js";

export default function App() {
  return (<GestureHandlerRootView style={{ flex: 1 }}>
    <AccountScreen />
  </GestureHandlerRootView>)
}
