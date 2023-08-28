import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../../components/Navbar";
import styled from "styled-components/native";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const chatData = [
  {
    id: 1,
    receiver: "Alexa S",
    receiver_profile_pict: require("../../assets/profile/profile.png"),
    last_chat:
      "Hello, bole nanya” tentang produk tipe s ga? Mau ngecek dulu aja sih",
    last_chat_time: "4.33 pm",
  },
  {
    id: 2,
    receiver: "Matias J",
    receiver_profile_pict: require("../../assets/profile/profile.png"),
    last_chat: "Oke, thanks ya",
    last_chat_time: "4.33 pm",
  },
  {
    id: 3,
    receiver: "Clark K",
    receiver_profile_pict: require("../../assets/profile/profile.png"),
    last_chat: "Baik min, trima kasih",
    last_chat_time: "4.33 pm",
  },
];

const ScrollDiv = styled.ScrollView`
  background: white;
  flex: 1;
  padding: 24px;
`;

const HeaderTitle = styled.Text`
  font-size: 16px;
  font-family: DMSans_500Medium;
  margin-bottom: 20px;
`;

const ChatRow = styled.Pressable`
  width: auto;
  padding: 14px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const ProfilePict = styled.Image`
  height: 60px;
  width: 60px;
  padding-left: 10px;
  resize-mode: contain;
`;

const ChatRowDetails = styled.View`
  width: 76%;
`;

const ChatFrontmatter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const ChatRowUsername = styled.Text`
  font-size: 16px;
  font-family: DMSans_500Medium;
`;

const ChatRowTime = styled.Text`
  font-size: 12px;
  font-family: DMSans_500Medium;
`;

const ChatRowLastMsgDiv = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ChatRowLastMsg = styled.Text`
  font-size: 14px;
  font-family: DMSans_400Regular;
`;

export default function Chat() {
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
          <HeaderTitle>Pesan</HeaderTitle>

          {chatData?.map((cd) => (
            <ChatRow
              key={cd.id}
              onPress={() => navigation.navigate("ChatDetails")}
            >
              <ProfilePict source={cd.receiver_profile_pict} />

              <ChatRowDetails>
                <ChatFrontmatter>
                  <ChatRowUsername>{cd.receiver}</ChatRowUsername>
                  <ChatRowTime>{cd.last_chat_time}</ChatRowTime>
                </ChatFrontmatter>

                <ChatRowLastMsgDiv>
                  <ChatRowLastMsg>
                    {cd.last_chat.length > 60
                      ? cd.last_chat.substring(0, 60) + " ..."
                      : cd.last_chat}
                  </ChatRowLastMsg>
                </ChatRowLastMsgDiv>
              </ChatRowDetails>
            </ChatRow>
          ))}
        </ScrollDiv>
      </View>
    );
  }
}
