import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TabNav from "./navigators/TabNav";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />
        <TabNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
