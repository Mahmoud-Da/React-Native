import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppPicker from "./app/components/AppPicker.js";
import AppTextInput from "./app/components/AppTextInput.js";
import Screen from "./app/components/Screen.js";


export default function App() {
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <AppPicker
          placeholder="Category"
          icon="apps"
          items={categories}
        />

        <AppTextInput
          placeholder="Email"
          icon="email"
        />
      </Screen>

    </GestureHandlerRootView>)
}
