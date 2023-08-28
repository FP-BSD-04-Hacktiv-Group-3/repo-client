import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import { FontAwesome } from "@expo/vector-icons";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const chat = [
  {
    id: 1,
    user: "Sender",
    msg: "Hi Jack!, Mau nanya produk tipe a stok nya masih banyak ga?",
    time: "4:35 pm",
  },
  {
    id: 2,
    user: "Receiver",
    msg: "Hi, untuk saat ini, stoknya kosong kak.",
    time: "4:37 pm",
  },
  {
    id: 3,
    user: "Sender",
    msg: "Kalo tipe c? variannya ada apa aja?",
    time: "4:38 pm",
  },
  {
    id: 4,
    user: "Receiver",
    msg: "Itu stoknya banyak kak, untuk varian bole dicek langsung diprofil toko kami.",
    time: "4:50 pm",
  },
  {
    id: 5,
    user: "Receiver",
    msg: "Boleh di cek juga promonya,,",
    time: "4:52 pm",
  },
  {
    id: 6,
    user: "Sender",
    msg: "Baik kak, trima kasih infonya",
    time: "5:15 pm",
  },
  {
    id: 7,
    user: "Receiver",
    msg: "Sip,,,",
    time: "5:20 pm",
  },
];

const Container = styled.View`
  flex: 1;
`;

const UserContainerDiv = styled.View`
  background: white;
  padding: 10px 24px;
`;

const Separator = styled.View`
  background: #ededed;
  padding: 0.6px;
  elevation: 1;
`;

const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

const ProfilePict = styled.Image`
  height: 45px;
  width: 45px;
  padding-left: 10px;
  resize-mode: contain;
`;

const SectionContainer = styled.View``;

const UserUsername = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_700Bold;
`;

const UserStatus = styled.Text`
  color: #06c630;
  font-size: 12px;
  font-family: DMSans_500Medium;
`;

const ScrollDiv = styled.ScrollView`
  background: white;
  padding: 20px 24px 0px 24px;
  margin-bottom: 80px;
`;

const ChatInputDiv = styled.View`
  background: white;
  height: 82px;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: absolute;
  bottom: 0;
`;

const Input = styled.TextInput`
  height: 50px;
  border: 1px solid #f0f0f0;
  border-radius: 100px;
  padding: 0 20px;
  background-color: #fafafa;
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  background-color: #feaf27;
  border-radius: 100px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Msg = styled.View`
  margin-bottom: 10px;
`;

const MsgContainer = styled.View`
  display: flex;
  margin-bottom: 4px;
  padding: 14px 20px;
  max-width: 70%;
`;

const SenderMsgContainer = styled(MsgContainer)`
  background: #eeeeee;
  border-radius: 12px 12px 0 12px;
  align-self: flex-end;
`;

const ReceiverMsgContainer = styled(MsgContainer)`
  background: #0c1a30;
  border-radius: 12px 12px 12px 0;
  align-self: flex-start;
`;

const MsgText = styled.Text`
  font-size: 14px;
  font-family: DMSans_400Regular;
`;

const SenderMsgText = styled(MsgText)`
  color: #0c1a30;
`;

const ReceiverMsgText = styled(MsgText)`
  color: #fff;
`;

const TimeText = styled.Text`
  color: #0c1a30;
  font-size: 12px;
  font-family: DMSans_400Regular;
  margin: 0 5px;
`;

const SenderTimeText = styled(TimeText)`
  text-align: right;
`;

const ReceiverTimeText = styled(TimeText)`
  text-align: left;
`;

export default function ChatDetails() {
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
        <Navbar back="back" title="Pesan" />

        <UserContainerDiv
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 1 }}
        >
          <UserContainer>
            <ProfilePict
              source={require("../../assets/profile/profile-online.png")}
            />

            <SectionContainer>
              <UserUsername>John Doe</UserUsername>
              <UserStatus>Online</UserStatus>
            </SectionContainer>
          </UserContainer>
        </UserContainerDiv>

        <Separator />

        <ScrollDiv>
          {chat?.map((c) =>
            c.user === "Sender" ? (
              <Msg key={c.id}>
                <SenderMsgContainer>
                  <SenderMsgText>{c.msg}</SenderMsgText>
                </SenderMsgContainer>
                <SenderTimeText>{c.time}</SenderTimeText>
              </Msg>
            ) : (
              <Msg key={c.id}>
                <ReceiverMsgContainer>
                  <ReceiverMsgText>{c.msg}</ReceiverMsgText>
                </ReceiverMsgContainer>
                <ReceiverTimeText>{c.time}</ReceiverTimeText>
              </Msg>
            )
          )}
          <View style={{ padding: 12 }}></View>
        </ScrollDiv>

        <ChatInputDiv>
          <Input placeholder="Type message..." placeholderTextColor="#C4C5C4" />
          <Button>
            <FontAwesome name="send" size={22} color="white" />
          </Button>
        </ChatInputDiv>
      </Container>
    );
  }
}
