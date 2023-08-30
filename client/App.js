import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import AuthStack from "./navigators/AuthStack";
import TabNav from "./navigators/TabNav";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Splash from "./screens/on-board/Splash";
import GetStarted from "./screens/on-board/GetStarted";
import AllProducts from "./screens/user/AllProducts";
import store from "./stores";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { API_URL } from "./config/api";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OngkirForm from "./screens/user/OngkirForm";
import ToastManager from "toastify-react-native";

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden />
            <ToastManager style={{ width: "100%" }} />
            <NavigationContainer>
              <Stack.Navigator initialRouteName="UnAuthNavStack">
                <Stack.Screen
                  name="UnAuthNavStack"
                  component={AuthStack}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="AuthNavStack"
                  component={TabNav}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="OngkirForm"
                  component={OngkirForm}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>

            {/* <Splash /> */}
            {/* <GetStarted /> */}
            {/* <AuthStack /> */}
            {/* <Register /> */}
            {/* <TabNav /> */}
            {/* <AllProducts title="All Products" /> */}
          </SafeAreaView>
        </SafeAreaProvider>
      </ApolloProvider>
    </Provider>
  );
}
