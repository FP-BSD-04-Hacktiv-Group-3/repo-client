import { Text } from "react-native";
import styled from "styled-components/native";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const Container = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 32px;
  background: white;
`;

const HeadingTitle = styled.Text`
  color: #0c1a30;
  font-size: 20px;
  font-family: DMSans_700Bold;
`;

const HeadingSubtitle = styled.Text`
  color: #838589;
  font-size: 14px;
  font-family: DMSans_400Regular;
  margin-top: 8px;
`;

const Form = styled.View`
  margin-top: 40px;
`;

const Label = styled.Text`
  color: #0c1a30;
  font-size: 14px;
  font-family: DMSans_400Regular;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  padding: 0 20px;
  margin-bottom: 20px;
  background-color: #fafafa;
`;

const Button = styled.TouchableOpacity`
  background-color: #feaf27;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const LoginFooterContainer = styled.View`
  margin-top: 60px;
`;

const RegisterNavDiv = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  gap: 8px;
`;

const RegisterText = styled.Text`
  color: gray;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const RegisterLink = styled.Text`
  color: #bb4648;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

export default function Register() {
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
        <HeadingTitle>Buat Akun</HeadingTitle>
        <HeadingSubtitle>Masukkan detail untuk membuat akun</HeadingSubtitle>
        <Form>
          <Label>Username</Label>
          <Input placeholder="Username" placeholderTextColor="#C4C5C4" />
          <Label>Nomor Telepon</Label>
          <Input placeholder="Nomor Telepon" placeholderTextColor="#C4C5C4" />
          <Label>Email</Label>
          <Input placeholder="Email" placeholderTextColor="#C4C5C4" />
          <Label>Kata Sandi</Label>
          <Input
            placeholder="Password"
            placeholderTextColor="#C4C5C4"
            secureTextEntry
          />
          <Button>
            <ButtonText>Masuk</ButtonText>
          </Button>
        </Form>

        <LoginFooterContainer>
          <RegisterNavDiv>
            <RegisterText>Punya akun?</RegisterText>
            <RegisterLink>Masuk</RegisterLink>
          </RegisterNavDiv>
        </LoginFooterContainer>
      </Container>
    );
  }
}
