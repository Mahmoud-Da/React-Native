import { useEffect } from "react";
import * as Permissions from "expo-permissions";
import Screen from "./app/components/Screen";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen />;
}
