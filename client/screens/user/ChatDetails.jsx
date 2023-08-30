import { Text, View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase/firebase";
import formatTime from "../../utils/formatTime";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  Timestamp,
  onSnapshot,
} from "firebase/firestore";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { user, senderId } from "../../config/configDummy";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import Loading from "../../components/Loading";

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
  color: #ff7537;
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
  // const { data } = route.params; params = store id nya
  let docSnap;
  const ChatId = senderId + 1;
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const docRef = doc(db, "chats", ChatId);

  async function defineDocSnap() {
    docSnap = await getDoc(docRef);
  }

  async function send() {
    await defineDocSnap();

    //kalo chat roomnya belum ada...
    if (!docSnap?.exists()) {
      createDB();
    }

    await updateDoc(docRef, {
      messages: arrayUnion({
        id: uuid(),
        name: user,
        senderId,
        text,
        date: Timestamp.now(),
      }),
      ["Message" + ".latest"]: Timestamp.now(),
      ["Message" + ".lastMessage"]: text,
    });

    setText("");
  }

  async function createDB() {
    try {
      await setDoc(docRef, {
        messages: [],
      });

      const unsub = onSnapshot(docRef, (doc) => {
        const { messages: data } = doc.data();
        const fullData = doc.data();

        setData(data);
      });
    } catch (error) {
      console.log(error, 63);
    }
  }

  async function onStart() {
    await defineDocSnap();

    // kalo ada history chatnya di database
    if (docSnap?.exists()) {
      const unsub = onSnapshot(docRef, (doc) => {
        const { messages: data } = doc.data();
        const fullData = doc.data();
        setData(data);
      });
    } else {
      console.log("gaada chat");
    }
  }

  useEffect(() => {
    onStart();
  }, []);

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Navbar back="back" title="Pesan" />

        <UserContainerDiv style={{ marginTop: 1 }}>
          <UserContainer>
            <ProfilePict source={require("../../assets/profile/profile.png")} />

            <SectionContainer>
              <UserUsername>Store Name ku</UserUsername>
              <UserStatus>Username Admin</UserStatus>
            </SectionContainer>
          </UserContainer>
        </UserContainerDiv>

        <Separator />

        <ScrollDiv>
          {data?.map((c) =>
            c.senderId === senderId ? (
              <Msg key={c?.id}>
                <SenderMsgContainer>
                  <SenderMsgText>{c?.text}</SenderMsgText>
                </SenderMsgContainer>
                <SenderTimeText>{formatTime(c?.date)}</SenderTimeText>
              </Msg>
            ) : (
              <Msg key={c?.id}>
                <ReceiverMsgContainer>
                  <ReceiverMsgText>{c?.text}</ReceiverMsgText>
                </ReceiverMsgContainer>
                <ReceiverTimeText>{formatTime(c?.date)}</ReceiverTimeText>
              </Msg>
            )
          )}
          <View style={{ padding: 12 }}></View>
        </ScrollDiv>

        <ChatInputDiv>
          <Input
            placeholder="Type message..."
            placeholderTextColor="#C4C5C4"
            onChangeText={(text) => setText(text)}
            value={text}
          />
          <Button onPress={send}>
            <FontAwesome name="send" size={22} color="white" />
          </Button>
        </ChatInputDiv>
      </Container>
    );
  }
}
