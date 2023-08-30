import { Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Toast } from "toastify-react-native";
import Loading from "../../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const LOGIN = gql`
  mutation Login($login: LoginInput) {
    login(login: $login) {
      id
      email
      access_token
      role
    }
  }
`;

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
  align-items: center;
`;

const RegisterText = styled.Text`
  color: gray;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const RegisterLinkDiv = styled.Pressable`
  padding: 10px 8px;
`;

const RegisterLink = styled.Text`
  color: #bb4648;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

export default function Login() {
  const navigation = useNavigation();
  const [loginFunc, { data, loading, error }] = useMutation(LOGIN);

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  useEffect(() => {
    async function fetchData() {
      const savedUser = await AsyncStorage.getItem("access_token");
      console.log(savedUser, 444);
      if (savedUser) {
        navigation.navigate("AuthNavStack");
      }
    }
    fetchData();
  }, []);

  const initialFormState = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState({
    ...initialFormState,
  });

  const onChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!form.email || !form.password) {
        throw { name: "InvalidLogin" };
      }

      const { data } = await loginFunc({
        variables: { login: form },
      });

      const at = await data?.login?.access_token;

      if (at) {
        await AsyncStorage.setItem("access_token", at);
        await AsyncStorage.setItem("user", JSON.stringify(data?.login));
        setForm(initialFormState);
        navigation.navigate("AuthNavStack");
      } else {
        Toast.error("Invalid Email/Password!");
      }
    } catch (error) {
      console.log(error);
      Toast.error("Invalid Email/Password!");
    }
  };

  if (loading) return <Loading />;
  // if (error) return `Submission error! ${error.message}`;

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <Container>
        <HeadingTitle>Selamat datang di Tacotta</HeadingTitle>
        <HeadingSubtitle>Silahkan masukan data untuk login</HeadingSubtitle>
        <Form>
          <Label>Email</Label>
          <Input
            placeholder="Email"
            placeholderTextColor="#C4C5C4"
            name="email"
            defaultValue={form.email}
            onChangeText={(val) => onChange("email", val)}
          />
          <Label>Kata Sandi</Label>
          <Input
            placeholder="Password"
            placeholderTextColor="#C4C5C4"
            secureTextEntry
            name="password"
            defaultValue={form.password}
            onChangeText={(val) => onChange("password", val)}
          />
          <Button onPress={handleLogin}>
            <ButtonText>Masuk</ButtonText>
          </Button>
        </Form>

        {/* <Separator>
          <SeparatorLine />
          <SeparatorText>atau masuk dengan</SeparatorText>
          <SeparatorLine />
        </Separator> */}

        <LoginFooterContainer>
          {/* <ForgotPasswordLink>Lupa Password?</ForgotPasswordLink> */}
          <RegisterNavDiv>
            <RegisterText>Belum punya akun?</RegisterText>
            <RegisterLinkDiv
              onPress={() => navigation.navigate("RegisterPage")}
            >
              <RegisterLink>Daftar</RegisterLink>
            </RegisterLinkDiv>
          </RegisterNavDiv>
        </LoginFooterContainer>
      </Container>
    );
  }
}
