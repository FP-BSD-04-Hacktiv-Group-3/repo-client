import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/user/Profile";
import Settings from "../screens/user/Settings";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="ProfilePage">
      <Stack.Screen
        name="ProfilePage"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
