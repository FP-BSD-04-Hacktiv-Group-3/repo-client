import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/user/Profile";
import Settings from "../screens/user/Settings";
import MyStore from "../screens/user/MyStore";
import EditProfileForm from "../screens/user/EditProfileForm";
import Language from "../screens/user/Language";
import AddProductForm from "../screens/user/AddProductForm";
import EditProductForm from "../screens/user/EditProductForm";
import AddStoreForm from "../screens/user/AddStoreForm";
import EditStoreForm from "../screens/user/EditStoreForm";

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
      <Stack.Screen
        name="MyStore"
        component={MyStore}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddProductForm"
        component={AddProductForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProductForm"
        component={EditProductForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfileForm"
        component={EditProfileForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddStoreForm"
        component={AddStoreForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditStoreForm"
        component={EditStoreForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
