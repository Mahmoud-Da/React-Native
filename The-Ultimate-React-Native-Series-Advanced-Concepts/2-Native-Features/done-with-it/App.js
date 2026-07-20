import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image } from "react-native";

export default function App() {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
      <ImageInput imageUri={imageUri} />;
    </Screen>
  );
}
