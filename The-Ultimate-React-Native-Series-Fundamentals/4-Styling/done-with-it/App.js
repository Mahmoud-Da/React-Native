import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 50,

          // iOS Shadow
          shadowColor: "gray",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.5,
          shadowRadius: 10,

          // Android Shadow
          elevation: 20,
        }}
      />
    </View>
  );
}
