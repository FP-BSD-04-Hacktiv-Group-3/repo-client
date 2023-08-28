import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TabNav from "./navigators/TabNav";
import Splash from "./screens/on-board/Splash";
import GetStarted from "./screens/on-board/GetStarted";
import AllProducts from "./screens/user/AllProducts";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />
        <TabNav />
        {/* <Splash/> */}
        {/* <GetStarted /> */}
        {/* <AllProducts title="All Products" /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
