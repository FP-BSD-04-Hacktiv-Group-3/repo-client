import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../screens/user/Chat";
import ChatDetails from "../screens/user/ChatDetails";

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator initialRouteName="ChatPage">
      <Stack.Screen
        name="ChatPage"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatDetails"
        component={ChatDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
