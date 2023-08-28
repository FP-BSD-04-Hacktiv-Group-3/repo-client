import { Text, View } from "react-native";
import styled from "styled-components/native";
// import { GoogleSigninButton } from "@react-native-google-signin/google-signin";

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

const Separator = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const SeparatorLine = styled.View`
  flex: 1;
  height: 2px;
  background-color: #c4c5c4;
  margin-top: 4px;
`;

const SeparatorText = styled.Text`
  color: #c4c5c4;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const GoogleButtonContainer = styled.TouchableOpacity`
  background-color: #db4437;
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
`;

const GoogleButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const LoginFooterContainer = styled.View`
  margin-top: 60px;
`;

const ForgotPasswordLink = styled.Text`
  color: #feaf27;
  font-size: 14px;
  font-family: DMSans_500Medium;
  text-align: center;
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

export default function Login() {
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
        <HeadingTitle>Selamat datang di Tacotta</HeadingTitle>
        <HeadingSubtitle>Silahkan masukan data untuk login</HeadingSubtitle>
        <Form>
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

        <Separator>
          <SeparatorLine />
          <SeparatorText>atau masuk dengan</SeparatorText>
          <SeparatorLine />
        </Separator>

        <View
          style={{
            height: "120px",
            backgroundColor: "tomato",
          }}
        >
          <Text style={{ textAlign: "center" }}>Nanti google button</Text>
        </View>

        {/* <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
            disabled={this.state.isSigninInProgress}
        /> */}

        <LoginFooterContainer>
          <ForgotPasswordLink>Lupa Password?</ForgotPasswordLink>
          <RegisterNavDiv>
            <RegisterText>Belum punya akun?</RegisterText>
            <RegisterLink>Register</RegisterLink>
          </RegisterNavDiv>
        </LoginFooterContainer>
      </Container>
    );
  }
}
