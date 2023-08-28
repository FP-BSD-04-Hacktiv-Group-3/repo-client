import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../../components/Navbar";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const profile = {
  name: "Benedict C",
  email: "benedict_c@gmail.com",
  profile_pict: require("../../assets/profile/profile.png"),
  Store: {
    name: "Nike Club",
    location: "Jakarta, Indonesia",
    created_at: "18th September 2019",
    total_products: 1276,
  },
};

const ScrollDiv = styled.ScrollView`
  background: white;
  flex: 1;
  padding: 24px;
`;

const Header = styled.View`
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettingsIcon = styled.Pressable`
  position: absolute;
  top: 0;
  right: 6px;
`;

const HeaderImageDiv = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
`;

const HeaderImage = styled.Image`
  resize-mode: contain;
`;

const HeaderDetailsDiv = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-bottom: 28px;
`;

const HeaderTitle = styled.Text`
  font-size: 16px;
  font-family: DMSans_500Medium;
`;

const HeaderSubitle = styled.Text`
  font-size: 14px;
  font-family: DMSans_400Regular;
`;

const HeaderPressable = styled.Pressable`
  border: 1px solid black;
  border-radius: 20px;
  padding: 3px 10px;
`;

const HeaderPressableText = styled.Text`
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const StoreDiv = styled.View`
  padding: 0 24px;
  display: flex;
  align-items: center;
  margin: 40px 0 12px 0;
`;

const StoreRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  width: 80%;
`;

const IconImg = styled.Image`
  width: 24px;
  height: 24px;
`;

const StoreText = styled.Text`
  font-size: 14px;
  font-family: DMSans_400Regular;
`;

const Separator = styled.View`
  background: #ededed;
  padding: 0.6px;
  elevation: 1;
  width: 84%;
  margin: 0 auto;
`;

const LogoutBtnDiv = styled.Pressable`
  width: 80%;
  height: 50px;
  background: #feaf27;
  margin: 20px auto;
  margin-bottom: 80px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LogoutBtnText = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

export default function Profile() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Navbar />

        <ScrollDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          <Header>
            <SettingsIcon onPress={() => navigation.navigate("Settings")}>
              <Ionicons name="md-settings-outline" size={24} color="black" />
            </SettingsIcon>

            <HeaderImageDiv>
              <HeaderImage source={profile.profile_pict} />
            </HeaderImageDiv>

            <HeaderDetailsDiv>
              <HeaderTitle>{profile.name}</HeaderTitle>
              <HeaderSubitle>{profile.email}</HeaderSubitle>
            </HeaderDetailsDiv>

            <HeaderPressable>
              <HeaderPressableText>
                {profile.Store ? "Manage Store" : "Create Store"}
              </HeaderPressableText>
            </HeaderPressable>
          </Header>

          <StoreDiv>
            <StoreRow>
              <IconImg source={require("../../assets/icons/store.png")} />
              <StoreText>{profile.Store.name}</StoreText>
            </StoreRow>
            <StoreRow>
              <IconImg source={require("../../assets/icons/location.png")} />
              <StoreText>{profile.Store.location}</StoreText>
            </StoreRow>
            <StoreRow>
              <IconImg source={require("../../assets/icons/time.png")} />
              <StoreText>{profile.Store.created_at}</StoreText>
            </StoreRow>
            <StoreRow>
              <IconImg source={require("../../assets/icons/box.png")} />
              <StoreText>
                {profile.Store.total_products}&nbsp;
                {profile.Store.total_products > 1 ? "products" : "product"}
              </StoreText>
            </StoreRow>
          </StoreDiv>

          <Separator />

          <LogoutBtnDiv>
            <MaterialIcons name="logout" size={22} color="#0C1A30" />
            <LogoutBtnText>Keluar</LogoutBtnText>
          </LogoutBtnDiv>
        </ScrollDiv>
      </View>
    );
  }
}
