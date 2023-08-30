import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../screens/user/Chat";
import ChatDetails from "../screens/user/ChatDetails";
import OngkirForm from "../screens/user/OngkirForm";
import Payment from "../screens/user/Payment";

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
      <Stack.Screen
        name="OngkirForm"
        component={OngkirForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
