import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppPicker from "./app/components/AppPicker.js";
import AppTextInput from "./app/components/AppTextInput.js";
import Screen from "./app/components/Screen.js";


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <AppPicker
          placeholder="Category"
          icon="apps"
        />

        <AppTextInput
          placeholder="Email"
          icon="email"
        />
      </Screen>

    </GestureHandlerRootView>)
}
