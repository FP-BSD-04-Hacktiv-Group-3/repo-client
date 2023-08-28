import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/user/Orders";
import OrderDetails from "../screens/user/OrderDetails";

const Stack = createNativeStackNavigator();

export default function OrderStack() {
  return (
    <Stack.Navigator initialRouteName="OrdersPage">
      <Stack.Screen
        name="OrdersPage"
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderDetailsPage"
        component={OrderDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
