import { Text } from "react-native";
import styled from "styled-components/native";

const Form = styled.View`
  margin: 20px 24px 0px 24px;
`;

const Input = styled.View`
  width: 100%;
  height: 50px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  padding: 0 54px;
  margin-bottom: 20px;
  background-color: #fafafa;
`;

const SearchIconDiv = styled.Pressable`
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

const ScanIconDiv = styled.Pressable`
  position: absolute;
  height: 50px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScanIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export default function Search() {
  return (
    <Form>
      <Input />
      <Text
        style={{
          textAlign: "center",
          color: "#C4C5C4",
          position: "absolute",
          width: "94%",
          top: 16,
        }}
      >
        Produk apa yang mau kamu cari?
      </Text>
      <ScanIconDiv>
        <ScanIcon
          resizeMode="cover"
          source={require("../assets/icons/camera.png")}
        />
      </ScanIconDiv>
      <SearchIconDiv>
        <SearchIcon
          resizeMode="cover"
          source={require("../assets/icons/search.png")}
        />
      </SearchIconDiv>
    </Form>
  );
}
