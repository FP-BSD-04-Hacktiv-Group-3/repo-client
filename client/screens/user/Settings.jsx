import { FlatList, Switch, Text, View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import { Ionicons } from "@expo/vector-icons";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const Container = styled.View`
  flex: 1;
  background: white;
`;

const Div = styled.View`
  padding: 0 24px;
  display: flex;
  align-items: center;
  margin: 32px 0 12px 0;
`;

const ItemRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
  width: 90%;
`;

const ItemIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const ItemText = styled.Text`
  font-size: 14px;
  font-family: DMSans_400Regular;
  flex: 1;
`;

const NavDiv = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

const ItemText2 = styled.Text`
  font-size: 14px;
  font-family: DMSans_400Regular;
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 3px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

export default function Settings() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  } else {
    return (
      <Container>
        <Navbar back="back" title="Pengaturan" />

        <Div>
          <ItemRow>
            <ItemIcon source={require("../../assets/icons/language.png")} />
            <ItemText>Bahasa</ItemText>
            <NavDiv>
              <ItemText2>English</ItemText2>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="black"
              />
            </NavDiv>
          </ItemRow>
          <ItemRow>
            <ItemIcon source={require("../../assets/icons/mode.png")} />
            <ItemText>Mode Terang</ItemText>
            <NavDiv>
              <SwitchContainer>
                {/* <Switch value={isDarkMode} onValueChange={toggleDarkMode} /> */}
                <Switch />
              </SwitchContainer>
            </NavDiv>
          </ItemRow>
          <ItemRow>
            <ItemIcon source={require("../../assets/icons/faq.png")} />
            <ItemText>FAQ</ItemText>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </ItemRow>
          <ItemRow>
            <ItemIcon source={require("../../assets/icons/help.png")} />
            <ItemText>Pusat Bantuan</ItemText>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </ItemRow>
        </Div>
      </Container>
    );
  }
}
