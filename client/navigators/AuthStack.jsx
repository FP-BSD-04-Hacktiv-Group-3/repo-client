import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import TabNav from "./TabNav";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="LoginPage"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RegisterPage"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TabNavHome"
        component={TabNav}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
