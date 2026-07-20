import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];

  const [category, setCategory] = useState();

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>

      <Screen>

        <AppPicker
          placeholder="Category"
          items={categories}
          icon="apps"
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
        />

        <AppTextInput
          placeholder="Email"
          icon="email"
        />
      </Screen>
    </GestureHandlerRootView>
  );
}