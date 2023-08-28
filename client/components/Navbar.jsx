import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { useFonts, DMSans_500Medium } from "@expo-google-fonts/dm-sans";

const NavDiv = styled.View`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-top: 14px;
  elevation: 2;
`;

const NavLogo = styled.Image`
  height: 18px;
`;

const NavBackIconDiv = styled.Pressable`
  height: 100%;
  width: 20px;
  margin: 0 28px;
  display: flex;
  justify-content: center;
`;

const NavBackIconLink = styled.View`
  height: 20px;
  width: 20px;
  margin-bottom: 3px;
`;

const NavIconDiv = styled.Pressable`
  height: 20px;
  width: 20px;
  margin: 0 28px;
`;

const NavIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: DMSans_500Medium;
  text-align: center;
`;

export default function Navbar({ back, title }) {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    DMSans_500Medium,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  } else {
    return (
      <NavDiv>
        {back ? (
          <>
            <NavBackIconDiv onPress={() => navigation.goBack()}>
              <NavBackIconLink>
                <Ionicons name="chevron-back-outline" size={24} color="black" />
              </NavBackIconLink>
            </NavBackIconDiv>
            <Title>{title}</Title>
          </>
        ) : (
          <>
            <NavIconDiv></NavIconDiv>
            <NavLogo
              source={require("../assets/brand/logo-hd.png")}
              resizeMode="contain"
            />
          </>
        )}

        {title === "Pesan" || title === "Pengaturan" ? (
          <NavIconDiv />
        ) : (
          <NavIconDiv onPress={() => navigation.navigate("CartPage")}>
            <NavIcon
              source={require("../assets/icons/shopping-cart.png")}
              resizeMode="contain"
            />
          </NavIconDiv>
        )}
      </NavDiv>
    );
  }
}
