import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListItem from "./app/components/ListItem";
import Screen from "./app/screens/Screen.js";
import Icon from "./app/components/Icon.js";

export default function App() {
  return (<GestureHandlerRootView style={{ flex: 1 }}>
    <Screen>
      <ListItem
        title="My title"
        subtitle="My subtitle"
        ImageComponent={<Icon name="email" />} />
    </Screen>
  </GestureHandlerRootView>)
}
