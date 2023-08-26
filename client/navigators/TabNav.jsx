import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/auth/Login";
import Home from "../screens/user/Home";
import Splash from "../screens/on-board/Splash";
import GetStarted from "../screens/on-board/GetStarted";
import { Image, View } from "react-native";
import styled from "styled-components/native";

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
            color: "red",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused
                ? "ic_menu_home"
                : "ic_menu_home_outline";

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
          component={Login}
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
          name="Order"
          component={Splash}
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
          component={GetStarted}
          options={{
            // tabBarIcon: ({ focused, color, size }) => {
            //   return (
            //     <StyledIcon
            //       source={
            //         focused
            //           ? require("../assets/icons/ic_menu_wishlist.png")
            //           : require("../assets/icons/ic_menu_wishlist_outline.png")
            //       }
            //       size={22}
            //     />
            //   );
            // },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
