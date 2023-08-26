import { Text, View } from "react-native";
import styled from "styled-components/native";
// import { GoogleSigninButton } from "@react-native-google-signin/google-signin";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const COLORS = {
  primary: "#feaf27",
  white: "#fff",
  black: "#0C1A30",
  vLightGray: "#FAFAFA",
  lightGray: "#C4C5C4",
  darkGray: "#838589",
  red: "#BB4648",
};

const Container = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 32px;
`;

const HeadingTitle = styled.Text`
  color: ${COLORS.black};
  font-size: 20px;
  font-family: DMSans_700Bold;
`;

const HeadingSubtitle = styled.Text`
  color: ${COLORS.darkGray};
  font-size: 14px;
  font-family: DMSans_400Regular;
  margin-top: 8px;
`;

const Form = styled.View`
  margin-top: 40px;
`;

const Label = styled.Text`
  color: ${COLORS.black};
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
  background-color: ${COLORS.vLightGray};
`;

const Button = styled.TouchableOpacity`
  background-color: ${COLORS.primary};
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
  background-color: ${COLORS.lightGray};
  margin-top: 4px;
`;

const SeparatorText = styled.Text`
  color: ${COLORS.lightGray};
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
  color: ${COLORS.primary};
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
  color: ${COLORS.gray};
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const RegisterLink = styled.Text`
  color: ${COLORS.red};
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
          <Input placeholder="Email" placeholderTextColor={COLORS.lightGray} />
          <Label>Kata Sandi</Label>
          <Input
            placeholder="Password"
            placeholderTextColor={COLORS.lightGray}
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
            borderRadius: "20px",
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
