import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/user/Orders";
import OrderDetails from "../screens/user/OrderDetails";
import OngkirForm from "../screens/user/OngkirForm";
import Payment from "../screens/user/Payment";

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
