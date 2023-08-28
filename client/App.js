import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TabNav from "./navigators/TabNav";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Splash from "./screens/on-board/Splash";
import GetStarted from "./screens/on-board/GetStarted";
import AllProducts from "./screens/user/AllProducts";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />
        {/* <Splash /> */}
        {/* <GetStarted /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <TabNav />

        {/* <AllProducts title="All Products" /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
