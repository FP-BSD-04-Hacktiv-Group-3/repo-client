import { Text } from "react-native";
import styled from "styled-components/native";
import Navbar from "../../components/Navbar";
import { useNavigation } from "@react-navigation/native";

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

const Container2 = styled.ScrollView`
  padding: 0 32px;
  background: white;
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

export default function EditProductForm() {
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
      <Container>
        <Navbar back="back" title="Edit Produk" />

        <Container2 style={{ marginTop: 1 }}>
          <Form>
            <Label>Nama Produk</Label>
            <Input placeholder="Nama Produk" placeholderTextColor="#C4C5C4" />
            <Label>Deskripsi</Label>
            <Input placeholder="Deskripsi" placeholderTextColor="#C4C5C4" />
            <Label>Harga</Label>
            <Input placeholder="Harga" placeholderTextColor="#C4C5C4" />
            <Label>Stok</Label>
            <Input placeholder="Stok" placeholderTextColor="#C4C5C4" />
            <Label>Gambar</Label>
            <Input placeholder="Gambar" placeholderTextColor="#C4C5C4" />
            <Input placeholder="Gambar" placeholderTextColor="#C4C5C4" />
            <Button>
              <ButtonText>Submit</ButtonText>
            </Button>
          </Form>
        </Container2>
      </Container>
    );
  }
}
