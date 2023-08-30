import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/user/Home";
import AllProducts from "../screens/user/AllProducts";
import Cart from "../screens/user/Cart";
import ProductDetails from "../screens/user/ProductDetails";
import InfoSeller from "../screens/user/InfoSeller";
import SearchPage from "../screens/user/SearchPage";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomePage">
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
      <Stack.Screen
        name="InfoSellerPage"
        component={InfoSeller}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
