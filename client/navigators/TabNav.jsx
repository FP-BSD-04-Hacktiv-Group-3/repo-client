import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import Order from "../screens/user/Order";
import Wishlist from "../screens/user/Wishlist";
import { Ionicons } from "@expo/vector-icons";
import ChatStack from "./ChatStack";

const Tab = createBottomTabNavigator();

const StyledIcon = styled(Image)`
  width: ${(props) => `${props.size}px` || "24px"};
  height: ${(props) => `${props.size}px` || "24px"};
`;

export default function TabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#FF7537",
          tabBarInactiveTintColor: "#0C1A30",
          tabBarStyle: {
            height: 50,
            backgroundColor: "white",
            borderTopWidth: 0,
            padding: 8,
            color: "0C1A30",
          },
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 6,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <StyledIcon
                  source={
                    focused
                      ? require("../assets/icons/ic_menu_home.png")
                      : require("../assets/icons/ic_menu_home_outline.png")
                  }
                  size={22}
                />
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <StyledIcon
                  source={
                    focused
                      ? require("../assets/icons/ic_menu_wishlist.png")
                      : require("../assets/icons/ic_menu_wishlist_outline.png")
                  }
                  size={22}
                />
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const iconColor = focused ? "#FF7537" : "#0C1A30";
              return (
                // <Ionicons
                //   name="ios-chatbubbles-outline"
                //   size={22}
                //   color={iconColor}
                // />
                <Ionicons
                  name="md-chatbubble-ellipses-outline"
                  size={22}
                  color={iconColor}
                />
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <StyledIcon
                  source={
                    focused
                      ? require("../assets/icons/ic_menu_pesanan.png")
                      : require("../assets/icons/ic_menu_pesanan_outline.png")
                  }
                  size={22}
                />
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Account"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const iconColor = focused ? "#FF7537" : "#0C1A30";
              return <FontAwesome name="user-o" size={21} color={iconColor} />;
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
