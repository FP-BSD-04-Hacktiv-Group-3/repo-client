import { Text } from "react-native";
import styled from "styled-components/native";

const Form = styled.View`
  margin: 40px 30px;
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

const SearchIconDiv = styled.View`
  position: absolute;
  height: 50px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export default function Search() {
  return (
    <Form>
      <Input
        placeholder="Produk apa yang mau kamu cari?"
        placeholderTextColor="#C4C5C4"
      />
      <SearchIconDiv>
        <SearchIcon
          resizeMode="cover"
          source={require("../assets/icons/search.png")}
        />
      </SearchIconDiv>
    </Form>
  );
}
