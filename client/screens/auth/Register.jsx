import { Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Toast } from "toastify-react-native";
import Loading from "../../components/Loading";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

const REGISTER = gql`
  mutation AddUser($newUser: UserInput) {
    addUser(newUser: $newUser) {
      _id
      email
      password
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

const LoginNavDiv = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LoginText = styled.Text`
  color: gray;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

const LoginLinkDiv = styled.Pressable`
  padding: 10px 8px;
`;

const LoginLink = styled.Text`
  color: #bb4648;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

export default function Register() {
  const navigation = useNavigation();
  const [registerFunc, { data, loading, error }] = useMutation(REGISTER);

  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

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

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (!form.email || !form.password) {
        throw { name: "InvalidLogin" };
      }

      const { data } = await registerFunc({
        variables: { newUser: form },
      });

      const _id = await data?.addUser?._id;

      if (_id) {
        Toast.success("Registration Success!");
        setForm(initialFormState);
        navigation.navigate("LoginPage");
      } else {
        Toast.error("Registration Failed!");
      }
    } catch (error) {
      console.log(error);
      Toast.error("Registration Failed!");
    }
  };

  if (loading) return <Loading />;

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <Container>
        <HeadingTitle>Buat Akun</HeadingTitle>
        <HeadingSubtitle>Masukkan detail untuk membuat akun</HeadingSubtitle>
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
          <Button onPress={handleRegister}>
            <ButtonText>Submit</ButtonText>
          </Button>
        </Form>

        <LoginFooterContainer>
          <LoginNavDiv>
            <LoginText>Punya akun?</LoginText>
            <LoginLinkDiv onPress={() => navigation.navigate("LoginPage")}>
              <LoginLink>Masuk</LoginLink>
            </LoginLinkDiv>
          </LoginNavDiv>
        </LoginFooterContainer>
      </Container>
    );
  }
}
