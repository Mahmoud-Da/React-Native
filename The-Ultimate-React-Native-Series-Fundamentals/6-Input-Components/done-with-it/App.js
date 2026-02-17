import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppTextInput from "./components/AppTextInput";

export default function App() {
  return (<GestureHandlerRootView style={{ flex: 1 }}>
    <AppTextInput
      icon="email"
      placeholder="Email"
    />
  </GestureHandlerRootView>)
}
