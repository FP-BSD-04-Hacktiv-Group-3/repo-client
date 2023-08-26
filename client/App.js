import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Splash from "./screens/on-board/Splash";
import GetStarted from "./screens/on-board/GetStarted";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Home from "./screens/user/Home";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar hidden />
        {/* <GetStarted /> */}
        {/* <Splash /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
