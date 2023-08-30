import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "../screens/user/ProductDetails";
import Wishlist from "../screens/user/Wishlist";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="WishlistPage">
      <Stack.Screen
        name="WishlistPage"
        component={Wishlist}
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
