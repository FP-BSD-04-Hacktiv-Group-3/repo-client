import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/user/Home";
import AllProducts from "../screens/user/AllProducts";
import Cart from "../screens/user/Cart";
import ProductDetails from "../screens/user/ProductDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AllProductsPage"
        component={AllProducts}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CartPage"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetailsPage"
        component={ProductDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
