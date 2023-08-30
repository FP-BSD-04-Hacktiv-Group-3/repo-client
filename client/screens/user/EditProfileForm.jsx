import { Text, View } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import Loading from "../../components/Loading";
import { useState } from "react";

const Container = styled.View`
  flex: 1;
  background: white;
`;
const Container2 = styled.ScrollView`
  display: flex;
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
  margin-bottom: 40px;
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

const PhotoInput = styled.View`
  width: 100%;
  height: 50px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  padding: 0 20px;
  margin-bottom: 20px;
  background-color: #fafafa;
`;

const PhotoInputBtn = styled.Pressable`
  width: 80px;
  height: 40px;
  background: red;
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

const Button2 = styled.TouchableOpacity`
  background-color: #fafafa;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0f0f0;
  margin-top: 6px;
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 14px;
  font-family: DMSans_500Medium;
`;

export default function EditProfileForm() {
  const navigation = useNavigation();

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
        <Navbar back="back" title="Edit Profile" />

        <Container2>
          <Form>
            <Label>Username</Label>
            <Input placeholder="Username" placeholderTextColor="#C4C5C4" />
            <Label>Email</Label>
            <Input placeholder="Email" placeholderTextColor="#C4C5C4" />
            <Label>Foto Profil</Label>

            <View style={{ marginBottom: 18 }}>
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              )}
              <Button2
                title="Pick an image from camera roll"
                onPress={pickImage}
              >
                <Text style={{ color: "#616161", fontWeight: "semibold" }}>
                  + Tambah Foto Profil
                </Text>
              </Button2>
            </View>

            <Label>Alamat</Label>
            <Input placeholder="Alamat" placeholderTextColor="#C4C5C4" />
            <Label>Nomor Telepon</Label>
            <Input placeholder="Nomor Telepon" placeholderTextColor="#C4C5C4" />
            <Label>Kata Sandi</Label>
            <Input
              placeholder="Password"
              placeholderTextColor="#C4C5C4"
              secureTextEntry
            />
            <Button>
              <ButtonText>Submit</ButtonText>
            </Button>
          </Form>
        </Container2>
      </Container>
    );
  }
}
