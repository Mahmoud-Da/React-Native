import AppTextInput from "./app/components/AppTextInput.js";
import AppPicker from "./app/components/AppPicker.js";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppPicker
        placeholder="Category"
        icon="apps"
      />

      <AppTextInput
        placeholder="Email"
        icon="email"
      />
    </GestureHandlerRootView>)

}
